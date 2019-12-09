export default {
    throttle(fn, delay) {
        // 触发事件时开始计时，
        // 计时器时间内如果有多次事件均不受理，
        // 执行完第一次触发的事件后继续重新受理其他的事件。
        let task = false
        return () => {
            if (!task) {
                task = true
                setTimeout(() => {
                    fn()
                    task = false
                }, delay)
            }
        }
    }
}