export default {
    'input': {
        /**
         * 属性
         */
        attribute: {
            'type': {
                name: '类型'
            },
            'v-model': {
                name: '绑定值'
            },
            'maxlength': {
                name: '最大输入长度'
            },
            'minlength': {
                name: '最小输入长度'
            },
            'show-word-limit': {
                name: '字数统计',
                description: '只在 type = "text" 或 type = "textarea" 时有效',
                type: ['text', 'textarea']
            },
            'placeholder': {
                name: '输入框占位文本'
            },
            'clearable': {
                name: '是否可清空'
            },
            'formatter': {
                name: '指定输入值的格式',
                description: '只有当 type 是"text"时才能工作',
                type: ['text']
            },
            'parser': {
                name: '指定从格式化器输入中提取的值',
                description: '只有当 type 是"text"时才能工作',
                type: ['text']
            },
            'show-password': {
                name: '是否显示切换密码图标'
            },
            'disabled': {
                name: '是否禁用'
            }, 'size': {
                name: '输入框尺寸',
                description: '只在 type 不为 textarea 时有效',
            },
            'prefix-icon': {
                name: '自定义前缀图标'
            },
            'suffix-icon': {
                name: '自定义后缀图标'
            },
            'rows': {
                name: '输入框行数',
                description: '只在 type 为 textarea 时有效',
                type: ['textarea']
            },
            'autosize': {
                name: 'textarea 高度是否自适应',
                description: '仅 type 为 textarea 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }',
                type: ['textarea']
            },
            'autocomplete': {
                name: '自动完成'
            },
            // 'name': {
            //     name: '名称'
            // },
            'readonly': {
                name: '只读'
            },
            'max': {
                name: '最大值'
            },
            'min': {
                name: '最小值'
            },
            'step': {
                name: '步长'
            },
            'input-style': {
                name: '样式'
            },
        },
        /**
         * 常用
         */
        popular: [
            'type',
            'v-model',
            'maxlength',
            'minlength',
            'show-word-limit',
            'placeholder',
            'disabled',
        ]
    },
}