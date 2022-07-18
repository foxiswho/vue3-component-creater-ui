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
                name: '占位提示'
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
            'size': {
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
            'name': {
                name: '字段名'
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
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
            'name',
        ],
        event: {
            blur: {
                name: '失去焦点时触发'
            },
            focus: {
                name: '获得焦点时触发'
            },
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
            input: {
                name: 'Input 值改变时触发'
            },
            clear: {
                name: '在点击由 clearable 属性生成的清空按钮时触发'
            },
        }
    },
    'form-item': {
        /**
        * 属性
        */
        attribute: {
            'label': {
                name: '标签名'
            },
            'label-width': {
                name: '标签宽度'
            },
            'required': {
                name: '是否必填'
            },
            'size': {
                name: '表单组件的默认尺寸'
            },
        },
        /**
         * 常用
         */
        popular: [
            'label',
            'label-width',
            'required',
        ]
    },
    'date-picker': {
        /**
        * 属性
        */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },
            'size': {
                name: '输入框尺寸',
                description: '',
            },
            'editable': {
                name: '文本框可输入'
            },
            'placeholder': {
                name: '占位提示'
            },
            'start-placeholder': {
                name: '开始日期的占位内容'
            },
            'end-placeholder': {
                name: '开始日期的占位内容',
            },
            'type': {
                name: '类型',
                defaultValue: 'date',
                description: 'year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange',
            },
            'format': {
                name: '指定输入值的格式',
                defaultValue: 'YYYY-MM-DD',
                description: '',
                type: ['date']
            },
            'default-value': {
                name: '打开时默认显示的时间',
            },
            'default-time': {
                name: '范围选择时选中日期所使用的当日内具体时刻',
            },
            'name': {
                name: '字段名'
            },
        },
        /**
         * 常用
         */
        popular: [
            'type',
            'v-model',
            'readonly',
            'disabled',
            'clearable',
            'required',
            'placeholder',
            'editable',
            'name',
        ],
    },
    'date-picker': {
        /**
        * 属性
        */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },
            'size': {
                name: '输入框尺寸',
                description: '',
            },
            'editable': {
                name: '文本框可输入'
            },
            'placeholder': {
                name: '占位提示'
            },
            'start-placeholder': {
                name: '开始日期的占位内容'
            },
            'end-placeholder': {
                name: '开始日期的占位内容',
            },
            'type': {
                name: '类型',
                defaultValue: 'date',
                description: 'year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange',
            },
            'format': {
                name: '指定输入值的格式',
                defaultValue: 'YYYY-MM-DD',
                description: '',
                type: ['date']
            },
            'default-value': {
                name: '打开时默认显示的时间',
            },
            'default-time': {
                name: '范围选择时选中日期所使用的当日内具体时刻',
            },
            'name': {
                name: '字段名'
            },
        },
        /**
         * 常用
         */
        popular: [
            'type',
            'v-model',
            'readonly',
            'disabled',
            'clearable',
            'required',
            'placeholder',
            'editable',
            'name',
        ],
    },
    'input-number': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'placeholder': {
                name: '占位提示'
            },
            'disabled': {
                name: '是否禁用'
            },
            'readonly': {
                name: '只读'
            },
            'size': {
                name: '输入框尺寸',
                description: '只在 type 不为 textarea 时有效',
            },
            'name': {
                name: '字段名'
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
            'precision': {
                name: '数值精度'
            },
        },
        /**
         * 常用
         */
        popular: [
            'type',
            'v-model',
            'max',
            'min',
            'step',
            'precision',
            'placeholder',
            'disabled',
            'name',
        ],
        event: {
            blur: {
                name: '失去焦点时触发'
            },
            focus: {
                name: '获得焦点时触发'
            },
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
        }
    },
    'radio-group': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'size': {
                name: '输入框尺寸',
                description: '只在 type 不为 textarea 时有效',
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },

            'text-color': {
                name: '激活时的文本颜色'
            },
            'validate-event': {
                name: '输入时是否触发表单的校验',
            },

        },
        /**
         * 常用
         */
        popular: [
            'v-model',
            'size',
            'readonly',
            'disabled',
        ],
        event: {
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
        }
    },
    'radio': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'label': {
                name: '单选框对应的值',
            }, 'size': {
                name: '输入框尺寸',
                description: '只在 type 不为 textarea 时有效',
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },

            'border': {
                name: '是否显示边框'
            },
            'name': {
                name: '字段名',
            },

        },
        /**
         * 常用
         */
        popular: [
            'v-model',
            'size',
            'readonly',
            'disabled',
            'name',
        ],
        event: {
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
        }
    },
    'radio-group': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'label': {
                name: '单选框对应的值',
            }, 'size': {
                name: '输入框尺寸',
                description: '只在 type 不为 textarea 时有效',
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },

            'border': {
                name: '是否显示边框'
            },
            'name': {
                name: '字段名',
            },

        },
        /**
         * 常用
         */
        popular: [
            'v-model',
            'size',
            'readonly',
            'disabled',
            'name',
        ],
        event: {
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
        }
    },
    'rate': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'max': {
                name: '最大分值',
            },
            'size': {
                name: '尺寸',
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },

            'allow-half': {
                name: '是否允许半选'
            },
        },
        /**
         * 常用
         */
        popular: [
            'v-model',
            'size',
            'readonly',
            'disabled',
            'max',
        ],
        event: {
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
        }
    },
    'select': {
        /**
         * 属性
         */
        attribute: {
            'v-model': {
                name: '绑定值'
            },
            'multiple': {
                name: '是否多选',
            },
            'size': {
                name: '尺寸',
            },
            'readonly': {
                name: '只读'
            },
            'disabled': {
                name: '是否禁用'
            },
            'clearable': {
                name: '是否可清空'
            },
            'required': {
                name: '是否必填'
            },

            'value-key': {
                name: '作为 value 唯一标识的键名'
            },
            'name': {
                name: '字段名',
            },
            'placeholder': {
                name: '占位提示'
            },
        },
        /**
         * 常用
         */
        popular: [
            'v-model',
            'size',
            'readonly',
            'disabled',
            'max',
        ],
        event: {
            change: {
                name: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发'
            },
            blur: {
                name: '失去焦点时触发'
            },
            focus: {
                name: '获得焦点时触发'
            },
            clear: {
                name: '在点击由 clearable 属性生成的清空按钮时触发'
            },
        }
    }
}