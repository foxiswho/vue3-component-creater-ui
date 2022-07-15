<template>
  <div class="top-tools-bar">

    <el-row :gutter="22">
      <el-col :span="15">
        <div class="edit">
          <el-link type="primary" @click="$emit('undo')" style="margin-right: 6px;margin-top: 8px;" title="后退">
            <el-icon>
              <ArrowLeftBold />
            </el-icon>
          </el-link>
          <el-link type="primary" @click="$emit('redo')" style="margin-right: 10px;margin-top: 8px;" title="前进">
            <el-icon>
              <ArrowRightBold />
            </el-icon>
          </el-link>
        </div>
        <el-radio-group v-model="previewMode" size="small" @change="onPreviewModeChange">
          <el-radio-button label="pc" />
          <el-radio-button label="h5" />
        </el-radio-group>

        <el-radio-group v-model="designFox" size="small" @change="onDesignFoxChange">
          <el-radio-button label="普通" />
          <el-radio-button label="fox" />
        </el-radio-group>

        <el-link type="primary" @click="$emit('structureVisible')"
          style="margin-right: 8px;margin-top: 8px;margin-left: 10px;" title="查看结构" alt="查看结构">
          <el-icon :size="19">
            <elGrid />
          </el-icon>
        </el-link>
        <el-link :type="editMode ? 'primary' : 'danger'" @click="onEditModeChange" style="margin-top: 8px;">
          <el-icon style="margin-right: 3px;">
            <elView />
          </el-icon>
          {{ editMode ? '预览' : '编辑' }}
        </el-link>
      </el-col>
    </el-row>



  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      previewMode: 'pc',
      editMode: true,
      designFox: 'fox',
    };
  },
  watch: {},
  computed: {
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  destroyed() { },
  methods: {
    // 在此自动生成
    request() {
      // 网络请求，可选
    },
    logout() {
      window.ssoLogin.logout()
    },

    onPreviewModeChange(event) {
      this.$emit('onPreviewModeChange', this.previewMode != 'pc');
    },
    //自定义设计模式
    onDesignFoxChange(event) {
      this.$emit('onDesignFoxChange', event);
    },

    onEditModeChange() {
      this.editMode = !this.editMode;
      this.$emit('onEditModeChange', this.editMode);

      setTimeout(() => {
        this.editMode = true;
      }, 500);
    }
  },
  fillter: {},
};
</script>

<style scoped>
/*  在此自动生成 */

.top-tools-bar {
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #606266;
  background-color: white;
  border-radius: 0px;
  align-content: center;
  border-bottom: 1px solid #f0f0f0;
}

.edit {
  display: inline-block;
}
</style>

<style scoped>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {

  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
