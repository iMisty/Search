/*
 * @Author: Miya
 * @Date: 2020-08-17 00:31:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-18 16:17:03
 * @Description: 节流方法
 * @FilePath: /Single-Search/src/services/debounce.ts
 */
const debounce = (fn: string, delay: number) => {
  // 设定时间
  const delaytime: number = delay || 200;
  // 定时器
  let timer: number | undefined | null = 0;
  return function() {
    // @ts-ignore
    const that = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      // @ts-ignore
      fn.apply(that, args);
    }, delay);
  };
};

export default debounce;