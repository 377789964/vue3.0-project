import { inject, provide } from "vue";
const ThemeSymbol  = Symbol()

export function provideStore(value) {
  provide(ThemeSymbol, value)
}

export default function useStore(defaultStore = {}) {
  // inject参数1：注入的属性 参数2：默认值（可写参数）
  return inject(ThemeSymbol, defaultStore)
}