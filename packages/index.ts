/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-11-26 14:43:28
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-07 17:03:08
 */
import { App } from 'vue'
import Icon from './Icon'
import Input from './Input'
import Badge from './Badge'
import Button from './Button'
import Avatar from './Avatar'
import Card from './Card'
import CollapseButton from './CollapseButton'
import Form from './Form'
import Echarts from './Echarts'

const components = { Input, Button, CollapseButton, Form, Echarts, Icon, Badge, Avatar, Card }

const install = (app: App) => {
  Object.values(components).forEach((component) => app.use(component))
}

const MyComponents = {
  version: '0.0.1',
  name: 'my-components',
  install,
  ...components,
}

export default MyComponents
export { Input, Button, CollapseButton, Form, Icon, Badge, Avatar, Card }
