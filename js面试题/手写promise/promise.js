const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function handlePromise(promise, result, resolve, reject) {

  if(result === promise) {
    // then 返回的是这个promise本身，抛出错误
    // 不能返回promise本身，会导致链式调用
    return reject('错误，不能返回promise本身，会导致链式调用')
  }

  if ((typeof result === 'object' && typeof result !== null) || typeof result === 'function') {
    // promise A+规范规定，promise是 一个Object 或者 是一个function，且有then方法
    // "promise" is an object or function with a then method......

    // 进来这里还不能判断他是不是promise，因为你不知道他的then是不是方法
    try {
      const then = result.then // 拿到此时这个promise的 then 方法
      if(typeof then === "function") {
        // 因为你的then是个方法，根据A+规范，我就认为你是一个promise
        then.call(result, res => {
          // 递归处理返回的promise
          handlePromise(promise, res, resolve, reject)
        }, error => {
          reject(error)
        })

        /**
         * 相当于
         * result.then(
         *  (res) => handlePromise(promise, res, resolve, reject),
         *  (error) => reject(error)
         * )
         * */

      } else {
        // 认为你不是promise，返回结果
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  } else {
    // 返回的是一个非promise,直接返回结果
    resolve(result)
  }
}
class Promise {
  constructor(executor) {
    this.value = null // 存储成功的值
    this.reason = null // 存储失败的值
    this.status = PENDING // 当前promise状态
    this.resolveCallbacks = [] // 存储成功的回调函数
    this.rejectCallbacks = [] // 存储失败的回调函数

    // 成功的回调
    const resolve = (value) => {
      if(this.status === PENDING) {
        this.value = value
        this.status = RESOLVED
        this.resolveCallbacks.forEach(fn => fn())
      }
    }

    // 失败的回调
    const reject = (reason) => {
      if(this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.rejectCallbacks.forEach(fn => fn())
      }
    }

    // 此处是为了解决 throw '错误'，出现错误将进入到reject函数
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    // 判断你的then有没有回调函数。没有的话给你默认一个函数，将data传递给下一个then
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (data) => {
      return data
    }
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => {
      return error
    }
    const p = new Promise((res, rej) => { // 为了实现.then().then()的连续调用

      setTimeout(() => { // 加延迟器是为了能够拿到 p

        // 直接成功，非异步
        if(this.status === RESOLVED) {
          try {
            const result = onFulfilled(this.value)
            handlePromise(p, result, res, rej) //解析处理返回的promise
          } catch (error) {
            rej(error)
          }
        }
        // 直接失败，非异步
        if(this.status === REJECTED) {
          try {
            const reason = onRejected(this.reason)
            handlePromise(p, reason, res, rej) //解析处理返回的promise
          } catch (error) {
            rej(error)
          }
        }

        // 为了解决 setTimeout 等异步操作，将回调函数存起来，等到状态改变的时候统一出发
        if(this.status === PENDING) {
          // 将成功的回调存起来，异步结束后统一调用
          this.resolveCallbacks.push(() => {
            try {
              const result = onFulfilled(this.value)
              handlePromise(p, result, res, rej) //解析处理返回的promise
            } catch (error) {
              rej(error)
            }
          })


          // 将失败的回调存起来，异步结束后统一调用
          this.rejectCallbacks.push(() => {
            try {
              const reason = onRejected(this.reason)
              handlePromise(p, reason, res, rej) //解析处理返回的promise
            } catch (error) {
              rej(error)
            }
          })
        }
      }, 0)
    })
    return p
  }

}
module.exports = Promise