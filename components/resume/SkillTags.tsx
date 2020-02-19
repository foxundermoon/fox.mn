import { Tag } from '../Tag'

export default () => {
  return ['大叔大婶', '迭代三'].map((e, i) => <Tag key={i}>{e}</Tag>)
}
