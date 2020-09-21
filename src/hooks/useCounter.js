import { reactive, toRefs } from 'vue'
export default function useCounter() {
  const data = reactive({
    count: 0
  })
  function addCount() {
    data.count++
  }
  // 这里返回的data不支持解构，会失去响应式
  // return {
  //   data,
  //   addCount
  // }
  // 解决办法是: 使用toRefs方法（响应式数据解构后依然具有响应式）
  return {
    data: toRefs(data),
    addCount
  }
}