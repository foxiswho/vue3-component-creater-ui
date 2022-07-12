import el from './package/element-plus'
export class FoxComponent {
    data = {}
    component = ''
    /**
     * 初始化
     * @param {object} { component: 组件; input,source: object,package:包;el;ant } 
     */
    constructor(options = {}) {
        if (options?.component) {
            this.component = options.component
        }
        if (options?.source) {
            this.source = options.source
        }
        if (options?.package) {
            this.package = options.package
        } else {
            this.package = 'el'
        }

    }
    /**
     * 获取组件数据
     */
    getComponentData() {
        if ('el' == this.package) {
            if (this.component && el.hasOwnProperty(this.component)) {
                this.data = el[this.component]
            }
        }
        return this.data
    }
    /**
     * 格式化
     * @returns 
     */
    getComponentFormat() {
        //获取组件数据
        this.getComponentData();
        //
        let list = {
            //常用
            popular: {},
            //可选
            optional: {}
        }
        if (this.data) {
            const item = this.data
            // console.info('item', item)
            let popular = false
            if (item?.popular && item.popular.length > 0) {
                popular = true
            }
            // console.info('item。popular', item.popular)
            if (item?.attribute) {
                for (const key in item.attribute) {
                    const obj = item.attribute[key]
                    if (popular && item.popular.includes(key)) {
                        list.popular[key] = obj
                    } else {
                        list.optional[key] = obj
                    }
                }
            }

            console.info('getComponentFormat', list)
            return list
        }
        return null
    }
}