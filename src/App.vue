<template>
  <vcc :initCodeEntity="codeInfoEntity" @updateCodeEntity="onCodeUpdate" @onLoadFinish="onLoadFinish"></vcc>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// 以这样一段结构初始化VCC组件
const initCodeStr = '{"template":{"lc_id":"root","__children":[{"div":{"class":"container","style":"min-height: 100%; padding-bottom: 100px;","lc_id":"container","__text__":"","__children":[{"el-form":{":model":"formFox",":rules":"rulesFox","ref":"formFox","lc-mark":"","label-width":"100px","class":"demo-border fox","lc_id":"eyr4tywkfb","f_id":"form-fox","fct":"form","__children":[{"el-form-item":{"class":"fox","label":"标题","prop":"name","lc-mark":"","lc_id":"eu21ux5mvi","f_id":"form-item1-fox","fct":"form-item","__children":[{"el-input":{"v-model":"formFox.name","lc_id":"6yigg3d00n","f_id":"form-item1-input-fox","fct":"input","__children":[]}}]}}]}}]}}]}}'

export default {
  components: {
    vcc: defineAsyncComponent(() => import('./components-v2/VCC.vue')),
  },
  data() {
    return {
      codeInfoEntity: {
        codeStructure: JSON.parse(initCodeStr),
        JSCode: ``
      },
    }
  },
  mounted() {
  },
  methods: {
    onCodeUpdate({ codeRawVueInfo, JSCode }) {
      // 编辑后新的代码结构
      // codeRawVueInfo为template对象表示结构
      // JSCode为显式输入的JS逻辑
      console.log('=========')
      console.log(JSON.stringify(this.codeRawVueInfo))
      console.log(JSCode)
    },
    onLoadFinish() {

    }
  }
}
</script>