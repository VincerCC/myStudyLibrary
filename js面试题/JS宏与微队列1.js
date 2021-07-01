//   JS事件循环执行顺序         同步—>微任务—>宏任务
    //     settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行
    //     promise本身是同步的立即执行函数(同步)
    //     promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；
    //     async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把await表达式后面的代码（后边的所有代码为一个整体）放到微任务队列里，让出执行栈让同步代码先执行
    //     宏任务是一次执行一个，而微任务是一次执行完微任务队列中所有的任务

// 在 chrome 浏览器中执行
async function async1() {
  console.log('async1Start');
  await async2();
  //await async2()后，后面的任务直接放入微任务
  console.log('async1End');
}

async function async2() {
  console.log('async2');
}

console.log('start');

setTimeout(()=>{
  console.log('setTimeout');
},0)

async1();

new Promise((resolve)=>{
  console.log('promise1');
  resolve();
}).then(()=>{
  console.log('promise2');
});

console.log('end');

//1，执行同步代码，输出start
//2，遇到setTimeout，放入宏队列，宏队列:[setTimeout]
//3，执行async1，遇到同步代码，输出async1Start，目前已经输出  【start，async1Start】
//4，遇到await，执行async2，遇到同步代码async2，输出async2，目前输出   【start，async1Start，async2】
//5，执行完await async2()后，后面的任务直接放入微队列，微队列:[async1End]
//6，执行Promise,遇到同步代码promise1，输出promise1，目前输出   【start，async1Start，async2，promise1】
//7，resolve()后，代表promise执行完毕，将.then放入微队列，微队列:[async1End，promise2]，然后执行同步代码end,输出end，目前输出   【start，async1Start，async2，promise1，end】
//8，执行完所有同步代码后，去拿微队列的执行，输出async1End，目前输出   【start，async1Start，async2，promise1，end，async1End】，微队列:[promise2]
//9，微队列的代码没产生新的微任务，继续执行下一个微队列任务，输出promise2，目前输出   【start，async1Start，async2，promise1，end，async1End，promise2】，微队列:[]
//10，微队列都执行完了，执行宏队列，输出setTimeout，目前输出   【start，async1Start，async2，promise1，end，async1End，promise2，setTimeout】，宏队列:[]
//11，所有程序执行完毕，最终输出
// start
// async1Start
// async2
// promise1
// end
// async1End
// promise2
// setTimeout






//输出：t1  async1 start  async2 t2 promise t3 async1 end  promise.then  setTimeout
//宏队列：[setTimeout]
//微队列：[async1 end,promise.then]



// 在 chrome 浏览器中执行
console.log('script start')

async function async1() {
   console.log('async1 start')
   await async2()
   console.log('async1 end')
   console.log('async1 end111')
}
async function async2() {
   console.log('async2 start')
   return Promise.resolve().then(()=>{
     console.log('async2 end')
   })
}
async1()

setTimeout(function() {
   console.log('setTimeout')
}, 0)

new Promise(resolve => {
   console.log('new promise')
   resolve()
})
.then(function() {
   console.log('promise1')
})
.then(function() {
   console.log('promise2')
})
//宏：[setTimeout]
//微：[async2 end，promise1]
// console.log('script end')
//1，执行同步代码，输出script start
//2，执行async1，遇到同步代码，输出async1 start
//3，遇到await，执行async2，遇到同步代码async2，输出async2 start

//4，然后return Promise对象，放到微队列  ，微队列：[async2 end],然后程序跳出了async2函数体，往下执行
//因为要等return Promise.resolve().then()执行完后，才能进入async1 end，所以async1 end被挂起，不放入微队列

//5，然后遇到setTimeout,放入宏队列，宏队列:[setTimeout]
//6，执行Promise,遇到同步代码new promise，输出new promise
//7，resolve()后，代表promise执行完毕，将.then放入微队列，微队列:[async2 end，promise1]，因为promise2要等promise1执行完毕才执行，所以promise2暂时挂起，不放入微队列

//8，然后执行同步代码script end，输出script end

//9，执行完所有同步代码后，去拿微队列的执行，输出async2 end，async2执行完了，去执行async1的代码，因为遇到了await，将await后边代码放入，微队列：[promise1]

//9，继续拿微队列的promise1，输出promise1，将promise2放入微队列，微队列：[promise2]，

//10，然后发现没有程序执行了，返回刚刚跳出的await函数，将async1 end放入微队列，微队列：[promise2，async1 end]

//11，然后继续执行微队列，输出promise2，微队列：[async1 end]
//12，然后继续执行微队列，输出async1 end，微队列：[]
//13，微队列都执行完了，执行宏队列，输出setTimeout，宏队列:[]
//14，所有程序执行完毕，最终输出
//输出:
// script start
// async1 start
// async2 start
// new promise
// script end
// async2 end

// promise1
// promise2

// async1 end

// setTimeout


// 重点注意：
// 1，在async函数中，遇到await后面接着是普通函数时，先把普通函数里面的代码执行了后，就会跳出async函数体外，代码接着往下跑
//直到跑完了后在重新回到await刚刚跳出的位置，继续跑async函数体内的代码。

// 2，在async函数中，遇到await后面接着也是async函数时也就是Promise对象，也会先执行await紧接的函数代码，之后跳出async函数体外，
// 代码接着往下跑，直到跑完了后在重新回到await刚刚跳出的位置，由于await后面接着是Promise对象，再次跳出async函数体外。继续跑下面的代码。
// 直到跑完后才再次返回到await代码处。


const p = new Promise(resolve => {
   setTimeout(() => {
      resolve(x)
      }, 1000)
   })

console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {console.log('async2 end')}
async1()
setTimeout(function () {console.log('setTimeout')}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
}).then(function () {
      console.log('promise1')
  }).then(function () {
      console.log('promise2')
  })
console.log('script end')
// 输出：'script start' ,'async2 end','Promise','script end'
// 宏：'setTimeout'
// 微：'async1 end','promise1'

//所有同步代码执行完了，执行微任务
// 输出：'script start' ,'async2 end','Promise','script end','async1 end','promise1','promise2'
// 宏：'setTimeout'
// 微：


//所有微任务执行完了，执行宏任务
// 输出：'script start' ,'async2 end','Promise','script end','async1 end','promise1','promise2','setTimeout'
// 宏：
// 微：


const promise1 = new Promise((resolve, reject) => {
let time1 = setTimeout(() => {
  resolve('success')
}, 1000)
})
const promise2 = promise1.then(() => {
throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
let time2 = setTimeout(() => {
console.log('promise1', promise1)
console.log('promise2', promise2)
}, 2000)

//首先，new Promise,遇到setTimeout，将其放入宏队列，此时promise1是pending状态,宏[time1]
//promise2也是pending状态
//执行console.log('promise1', promise1),输出'promise1' Promise{<pending>}
//执行cconsole.log('promise2', promise2),输出'promise2' Promise{<pending>}
//遇到setTimeout，将其放入宏队列 ，宏[time1,time2],
// 第一轮宏队列执行完毕，没产生微队列，执行下一次宏队列

// 执行time1，promise1状态变为了resolved
//遇到了.then，将其放入微队列[throw new Error('error!!!')]
//宏任务执行完，有微队列未执行，执行微队列，抛出异常，promise1状态变为rejected
//微队列执行完，开始执行下一轮宏任务time2

// 执行console.log('promise1', promise1),'promise1' Promise{<resolved>: "success"}
// 执行cconsole.log('promise2', promise2),'promise2' Promise{<rejected>: Error: error!!!}

  async function async1() {
      console.log("async1 start");
      await async2();
      console.log("async1 end");
  }
  async function async2() {
  setTimeout(() => {
      console.log('timer')
  }, 0)
      console.log("async2");
  }
  async1();
  console.log("start")
  // 首先执行async1()，输出async1 start
  // 遇到 await async2()，进入函数体，遇到setTimeout，放入宏队列：[timer],输出 async2
  // 将await async2()后边的代码放到微队列，微队列：[async1 end]
  // 跳出async，执行输出 start
  // 第一轮执行完毕，检查微队列，有，执行微队列，输出 async1 end
  // 微队列清空，执行宏队列，输出 timer
  // 'async1 start'
  // 'async2'
  // 'start'
  // 'async1 end'
  // 'timer'

  async function async1() {
      console.log("async1 start");
      await async2();
      console.log("async1 end");
      setTimeout(() => {
          console.log('timer1')
      }, 0)
  }
  async function async2() {
      setTimeout(() => {
          console.log('timer2')
      }, 0)
      console.log("async2");
  }
  async1();
  setTimeout(() => {
      console.log('timer3')
  }, 0)
  console.log("start")
  // 首先 async1(),输出async1 start，
  // 遇到await async2()，进入函数，遇到settimeout，放入宏队列：[timer2],输出async2
  // 将await async2()后边的放入微队列：[async1 end,timer1],
  // 跳出async1(),遇到settimeout，放入宏队列：[timer2,timer3]，输出start
  // 查找微队列任务，执行async1 end，输出async1 end，
  // 遇到settimeout，放入宏队列：[timer2,timer3,timer1]
  // 微队列执行完，执行宏队列，输出timer2,输出timer3，输出timer1
  // async1 start
  // async2
  // start
  // async1 end
  // timer2
  // timer3
  // timer1


  async function async1 () {
      console.log('async1 start');
      await new Promise(resolve => {
          console.log('promise1')
          resolve('promise1 resolve')
      }).then(res => console.log(res))
      console.log('async1 success');
      return 'async1 end'
  }
  console.log('srcipt start')
  async1().then(res => console.log(res))
  console.log('srcipt end')

  // 首先 输出 srcipt start
  // 进入async1函数，输出async1 start，遇到 await,执行new Promise，输出promise1，将.then放入微任务：[promise1 resolve],
  // 因为要等await执行完成，所以先不管await表达式后面的代码，跳出async1
  // 因为async1 还不是resolve，所以async1().then也放入微任务：[promise1 resolve,res]
  // 输出 srcipt end
  // 开始执行微任务，输出 promise1 resolve，然后await有了结果，接下来的代码，输出 async1 success ，然后return一个值为async1 end'
  // 因为new Promise为resolved了，所以继续执行微任务res,输出 async1 end

  //srcipt start
  //async1 start
  //promise1
  //srcipt end
  //promise1 resolve
  //async1 success
  //async1 end


  const first = () => (new Promise((resolve, reject) => {
      console.log(3);
      let p = new Promise((resolve, reject) => {
          console.log(7);
          setTimeout(() => {
              console.log(5);
              resolve(6);
              console.log(p)
          }, 0)
          resolve(1);
      });
      resolve(2);
      p.then((arg) => {
          console.log(arg);
      });
  }));
  first().then((arg) => {
      console.log(arg);
  });
  console.log(4);
  // 第一段代码定义的是一个函数，所以我们得看看它是在哪执行的，发现它在4之前，所以可以来看看first函数里面的内容了。
  // 函数first返回的是一个new Promise()，因此先执行里面的同步代码3
  // 接着又遇到了一个new Promise()，直接执行里面的同步代码7
  // 执行完7之后，在p中，遇到了一个定时器，先将它放到下一个宏任务队列里不管它，接着向下走
  // 碰到了resolve(1)，这里就把p的状态改为了resolved，且返回值为1，不过这里也先不执行
  // 跳出p，碰到了resolve(2)，这里的resolve(2)，表示的是把first函数返回的那个Promise的状态改了，也先不管它。
  // 然后碰到了p.then，将它加入本次循环的微任务列表，等待执行
  // 跳出first函数，遇到了first().then()，将它加入本次循环的微任务列表(p.then的后面执行)
  // 然后执行同步代码4
  // 本轮的同步代码全部执行完毕，查找微任务列表，发现p.then和first().then()，依次执行，打印出1和2
  // 本轮任务执行完毕了，发现还有一个定时器没有跑完，接着执行这个定时器里的内容，执行同步代码5
  // 然后又遇到了一个resolve(6)，它是放在p里的，但是p的状态在之前已经发生过改变了，因此这里就不会再改变，也就是说resolve(6)相当于没任何用处，因此打印出来的p为Promise{<resolved>: 1}

  // 微队列：[1,2]
  //宏队列：[setTimeout]
  // 3 7 4 1 2 5 Promise{<resolved>: 1}

/*重点*/
      const async1 = async () => {
          console.log('async1');
          setTimeout(() => {
              console.log('timer1')
          }, 2000)
          await new Promise(resolve => {
              console.log('promise1')
          })
          console.log('async1 end')
          return 'async1 success'
      }
      console.log('script start');
      async1().then(res => console.log(res));
      console.log('script end');
      Promise.resolve(1)
          .then(2)
          .then(Promise.resolve(3))
          .catch(4)
          .then(res => console.log(res))
      setTimeout(() => {
          console.log('timer2')
      }, 1000)
      /*
      1.输出 script start
      2.进入 async1()，输出 async1 ，遇到setTimeout ，放入宏任务:[timer1]
      3.进入await，输出 promise1 ，因为这个new Promise 没有返回值所以一直为pendding，后边代码将不执行，包括.then
      4.输出 script end
      5.遇到Promise.resolve(1)，then放入微队列:[1]
      6.遇到setTimeout ，放入宏任务:[timer1，timer2]
      7.同步代码执行完，开始执行微队列，因为promise的then不是函数，会发生值穿透，所以res始终为1，输出 1
      8.微队列执行完毕，执行宏队列，因为timer1的时间为2000，timer2为1000，所以会先输出 timer2，然后是timer1
      所以输出为：

      'script start'
      'async1'
      'promise1'
      'script end'
      1
      'timer2'
      'timer1'
      */

      const p1 = new Promise((resolve) => {
          setTimeout(() => {
              resolve('resolve3');
              console.log('timer1')
          }, 0)
          resolve('resovle1');
          resolve('resolve2');
      }).then(res => {
          console.log(res)
          setTimeout(() => {
              console.log(p1)
          }, 1000)
      }).finally(res => {
          console.log('finally', res)
      })
      /*
      Promise的状态一旦改变就无法改变,所以resolve(1)才会生效
      finally不管Promise的状态是resolved还是rejected都会执行，且它的回调函数是接收不到Promise的结果的，所以finally()中的res是undefind。
      最后一个定时器打印出的p1其实是.finally的返回值，.finally的返回值如果在没有抛出错误的情况下,默认会是上一个Promise的返回值,而这道题中.finally上一个Promise是.then()，但是这个.then()并没有返回值(return)，所以p1打印出来的Promise的值会是undefined，
      如果你在定时器的下面加上一个return 1，则值就会变成1。
      'resolve1'
      'finally' undefined
      'timer1'
      Promise{<resolved>: undefined}
      */