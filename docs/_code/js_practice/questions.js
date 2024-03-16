function throttle(fn, delay = 1000) {
    let timer;
    let currentTime;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(fn.bind(this, ...args), delay)
            currentTime = Date.now()
        } else {
            clearTimeout(timer)
            let now = Date.now()
            let diff = now - currentTime
            if (diff < delay) {
                timer = setTimeout(fn.bind(this, ...args), delay - diff)
                currentTime = now
            } else {
                fn.bind(this, ...args)()
                timer = null
            }
        }
    }
}
