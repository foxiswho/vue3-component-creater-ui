<template>
  <el-card class="attribute-container">

    <div style="text-align: center;">
      <el-switch v-model="editMode" active-text="自由编辑" inactive-text="约束编辑" active-color="#13ce66"
        inactive-color="#13ce66">
      </el-switch>
    </div>

    <div style="margin-top: 20px;">
      <div name="1" v-show="!editMode">
        <div>
          <div class="item" v-for="(item, index) in localAttributes" :key="index">
            <el-input v-model="item.key" :placeholder="'key' + index" class="half-width"></el-input>
            <div class="split">:</div>
            <el-input v-model="item.value" :placeholder="'value' + index" class="half-width" style="flex-grow: 3;"></el-input>
            <el-icon @click="deleteItem(index)" style="margin-left: 5px;"><l-minus /></el-icon>
          </div>

          <div class="quick-add-root">
            快速增加一些属性:
            <div style="margin-top: 5px;">
              <transition name="el-zoom-in-center">
                <el-tag v-if="attributeKeys.indexOf('class') == -1" size="small" type="success" @click="onClassClick"
                  effect="dark" class="tag">Class
                </el-tag>
              </transition>
              <transition name="el-zoom-in-center">
                <el-tag v-if="attributeKeys.indexOf('@click') == -1" size="small" type="success" @click="onEventClick"
                  effect="dark" class="tag">点击事件</el-tag>
              </transition>
              <transition name="el-zoom-in-center">
                <el-tag v-if="!attributeKeys.includes('__text__')" size="small" type="success" @click="onTextClick"
                  effect="dark" class="tag">文本内容</el-tag>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div name="2" v-show="editMode">
        <el-input type="textarea" :autosize="{ minRows: 4}" placeholder="请输入属性, 以key: value的形式(冒号后要有空格)"
          v-model="textAttributes">
        </el-input>
      </div>
    </div>

    <div style="margin-top: 10px;text-align:center;">
      <el-tooltip class="item" effect="dark" content="新增属性 ctrl+a" placement="bottom">
        <el-button type="primary" class="center" @click="createNew" circle>
          <el-icon><circle-plus /></el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="保存属性 ctrl+s" placement="bottom">
        <el-button type="success" class="center" @click="save" circle>
          <el-icon><l-refresh /></el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip v-if="enableRemoveButton" class="item" effect="dark" content="移除该组件 ctrl+d" placement="bottom">
        <el-button type="danger" class="center" @click="remove" circle>
          <el-icon><l-delete /></el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip v-if="enableBroButton" class="item" effect="dark" content="复制一个兄弟组件 ctrl+c" placement="bottom">
        <el-button type="primary" class="center" @click="copyBro" circle>
          <el-icon><document-copy /></el-icon>
        </el-button>
      </el-tooltip>
      <div style="text-algin: center;">
        <span class="shortcut-tip">支持快捷键操作</span>
      </div>
    </div>
<el-divider />
<el-tabs
    type="card"
    model-value="first"
    class="demo-tabs"
  >
  <!-- <el-form :model="form" label-width="120px"> -->
    <el-tab-pane label="组件" name="first">
    <el-row>
      <el-col :span="24">
      <el-input v-model="input" placeholder="标签名称" size="small"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
       <el-switch
        model-value="true"
        size="small"
        active-text="开"
        inactive-text="关"
      />
      </el-col>
    </el-row>
    <el-row>
      <el-radio-group size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="center" >居中</el-radio-button>
      <el-radio-button label="right" >右对齐</el-radio-button>
    </el-radio-group>
    </el-row>
    <el-row>
      <el-col :span="24">
      <el-input v-model="input" placeholder="标签宽度" size="small"/>
      </el-col>
    </el-row>
   
    </el-tab-pane>
    <el-tab-pane label="表单" name="second">表单</el-tab-pane>
  </el-tabs>
  <!-- </el-form> -->
  </el-card>
</template>

<script>
import { getRawComponentKey, getRawComponentContent } from "@/utils/common";
import { brotherEleEnum, copyBroCode } from "@/libs/bro-ele-config";
import keymaster from "keymaster"
import { store as _store } from "@/libs/store.js";

export default {
  props: ['__rawVueInfo__', 'enableRemoveButton', 'shortcutInitMode'],// __rawVueInfo__为当前编辑的原始代码对象, shortcutInitMode快捷键的初始化方式
  data: function () {
    return {
      input: "",
      localAttributes: [],
      enable: true,
      autoplay: false,
      editMode: false,
      textAttributes: '',
      form: {}
    };
  },
  mounted() {
    const container = document.querySelector(".attribute-container");
    container.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    if (this.shortcutInitMode === 'auto') {
      // 这种方式用于在检视图中，因为它依赖组件的创建和销毁
      this.initShortcut();
    }
  },

  beforeDestroy() {
    if (this.shortcutInitMode === 'auto') {
      // 防止内存泄漏
      this.destroyShortcut();
    }
  },

  methods: {
    destroyShortcut() {
      console.log(`destroyShortcut by mode: ${this.shortcutInitMode}`)
      keymaster.unbind('⌘+a, ctrl+a');
      keymaster.unbind('⌘+s, ctrl+s');
      keymaster.unbind('⌘+d, ctrl+d');
      keymaster.unbind('⌘+c, ctrl+c');
    },

    initShortcut() {
      console.log(`init by mode: ${this.shortcutInitMode}`)
      keymaster('⌘+a, ctrl+a', () => {
        if (this.enable) {
          this.createNew();
          return false
        }
      });
      keymaster('⌘+s, ctrl+s', () => {
        if (this.enable) {
          this.save();
          return false
        }
      });
      keymaster('⌘+d, ctrl+d', () => {
        if (this.enable) {
          this.remove();
          return false
        }
      });
      keymaster('⌘+c, ctrl+c', () => {
        if (this.enable && this.enableBroButton) {
          this.copyBro();
          return false
        }
      });
    },

    onClassClick() {
      this.localAttributes.push({ key: "class", value: "class-name" });
    },
    onEventClick() {
      this.localAttributes.push({ key: "@click", value: "onEventClick" });
    },
    onTextClick() {
      this.localAttributes.push({ key: "__text__", value: "content" });
    },

    createNew() {
      this.localAttributes.push({ key: "", value: "" });
    },
    save() {
      try {
        let resultList = [];
        if (!this.editMode) {
          resultList = this.localAttributes.filter((item) => {
            return !!item.key;
          });
        } else {
          const attributes = this.textAttributes.split('\n');
          resultList = attributes.map(item => {
            const [key, value] = item.split(": ");
            return {
              key, value
            }
          })
          this.localAttributes = resultList;
        }

        this.$emit("save", { resultList, lc_id: this.rawInfoID });

        this.$notify({
          title: "提示",
          message: '代码已更新',
          position: 'bottom-right',
          type: 'success'
        });
      } catch (error) {
        this.$message.error(error);
      }
    },
    remove() {
      this.$emit("remove", { lc_id: this.rawInfoID });
    },
    deleteItem(index) {
      this.localAttributes.splice(index, 1);
    },
    copyBro() {
      copyBroCode(this.__rawVueInfo__);
      _store.commit('onDragEnd');
    },
    onShow() {
      // 这种方式适用于常规模式下的初始化，因为这个实例初始化后不会被销毁，一直常驻内存。但又不能受到其它实例销毁时的影响，所以需要明确的再次初始化。
      this.initShortcut();
    },
    onHide() {
      this.destroyShortcut();
    },
  },

  computed: {
    componentName() {
      return this.__rawVueInfo__ ? getRawComponentKey(this.__rawVueInfo__) : '';
    },
    rawInfoID() {
      return this.__rawVueInfo__ ? getRawComponentContent(this.__rawVueInfo__).lc_id : '';
    },
    enableBroButton() {
      const checkResult = brotherEleEnum().find(item => {
        return item.name == this.componentName;
      });
      return checkResult && checkResult.length != 0;
    },
    attributeList() {
      const result = [];
      const vueRawInfo = this.__rawVueInfo__;
      if (vueRawInfo) {
        const object = vueRawInfo[getRawComponentKey(vueRawInfo)];

        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            const element = object[key];
            if (typeof element !== "object" && key != 'lc-mark' && key != 'lc_id') { // 这两个是保留字段，不对外提供使用
              result.push({ key: key, value: element });
            }
          }
        }
      }
      return result;
    },

    attributeKeys() {
      return this.localAttributes.map(item => item.key)
    }
  },
  watch: {
    attributeList: {
      handler: function () {
        this.localAttributes = this.attributeList;
      },
      immediate: true
    },
    localAttributes(newValue) {
      if (newValue.length === 0) {
        newValue.push({ key: "", value: "" });
      }

      this.textAttributes = newValue.map(item => `${item.key}: ${item.value}`).join('\n')
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px;
  width: 50%;
  text-align: center;
}

.half-width {
  width: 0%;
  flex-grow: 2;
}

.center {
  display: inline-block !important;
  margin: 10px 10px;
}

.item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.quick-add-root {
  padding: 5px 10px;
  border: 1px dashed #c6c6c6;
  border-radius: 5px;
  font-size: 12px;
  color: gray;

  .tag {
    margin-right: 5px;
  }

  .tag:last-child{
    margin-right: 0;
  }
}

.split {
  width: 30px;
  text-align: center;
  font-weight: bold;
}

.el-icon-plus,
.el-icon-minus {
  margin-left: 10px;
}

.el-button + .el-button {
  margin-left: 0px;
}

.shortcut-tip {
  font-size: 12px;
  color: grey;
  padding: 2px;
  border-bottom: grey solid 1px;
}
</style>
