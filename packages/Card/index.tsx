import { defineComponent, App, PropType } from 'vue'
import Icon from '/packages/Icon/index.tsx'
import './index.less'

const IProps = {
  /**
   * 标签传入 clickable 代表可点击
   * attrs 传入 'default' 'large' 'rectangle' 来调用大小
   */
  ...Icon.props,
  title: {
    description: '卡片展示的内容',
    default: () => '',
    required: false,
    type: String,
  },
  iconBGColor: {
    description: 'Icon背景颜色',
    default: () => 'rgb(233, 240, 255)',
    required: false,
    type: String,
  },
}

const Card = defineComponent({
  name: 'DvisCard',
  props: IProps,
  setup(props, { slots, emit, attrs }) {
    const { iconBGColor, title, ...rest } = props
    const { style, ...other } = attrs

    return () => (
      <div class={'dvis-card'} onClick={(e) => emit('onClick', e)}>
        <span>
          {slots.icon && slots.icon()}
          <Icon {...rest} {...other} style={{ backgroundColor: iconBGColor }}></Icon>
          {title}
          {slots.title && slots.title()}
        </span>

        {slots.content && slots.content()}
      </div>
    )
    // return () => <Icon {...props} class={['dvis-badge']} v-slots={slots}></Icon>
  },
  install: function (App: App) {
    App.component(Card.name, Card)
  },
})

export default Card
