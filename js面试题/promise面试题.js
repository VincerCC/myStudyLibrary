

/*  面试题一：使用Promise实现每隔1秒输出1,2,3
    使用reduce方法，不停地往 Promise.resolve()后边追加.then()，在then里边务必是函数（若不是函数，会发生值透传，结果是一秒后同时打印 1,2,3），而且是new Promise,才能实现等上一个then有了resolve之后才执行下一个then
    reduce(参数1，参数2)，参数1用于执行每个数组元素的函数，参数2用于设置初始值
    初始值设为Promise.resolve()，每次循环添加.then(() => {
                                                return new Promise(r => {
                                                setTimeout(() => r(console.log(x)), 1000)
                                                })
                                            })
*/
const arr = [1, 2, 3]
arr.reduce((p, x) => {
    /* p 是上一次执行之后的值，x是当前元素
        第一次循环，p=Promise.resolve()
        return Promise.resolve().then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(1)), 1000)
                                    })
                                })

        第二次循环，p=Promise.resolve().then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(1)), 1000)
                                    })
                                })
        return Promise.resolve().then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(1)), 1000)
                                    })
                                }).then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(2)), 1000)
                                    })
                                })

        第三次循环，p=Promise.resolve().then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(1)), 1000)
                                    })
                                }).then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(2)), 1000)
                                    })
                                })
        return Promise.resolve().then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(1)), 1000)
                                    })
                                }).then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(2)), 1000)
                                    })
                                }).then(() => {
                                    return new Promise(r => {
                                    setTimeout(() => r(console.log(3)), 1000)
                                    })
                                })
    */
    return p.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(x)
                resolve()
            }, 1000)
        })
    })
}, Promise.resolve())





/*
    面试题二：实现红绿灯，红灯3秒，绿灯2秒，黄灯1秒，交替循环不重复亮灯
    实现思路：
        1.首先定义一个亮灯函数light，传入灯函数和时间，函数返回一个promise，promise进行定时器亮灯，然后改变状态为resolved, 这个promise的作用是让.then有序触发
        2.然后定义一个step函数，函数执行Promise.resolve.then(),最后return 函数本身实现迭代自调用
*/
function red() {
    console.log("red");
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}
let light = function (cb,timer){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            cb()
            resolve()
            //在timer秒之后，状态返回resolve，通知.then执行
        },timer)
    })
}
// 使用 promise
let step = function(){
    Promise.resolve().then(()=>{
        return light(red,3000)
    }).then(()=>{
        //当上一个then的函数状态返回resolved之后,才进来这个then
        return light(green,2000)
    }).then(()=>{
        return light(yellow,1000)
    }).then(()=>{
        return step()
    })
}
step()
// 使用 async
async function next(){
    await light(red,3000)
    await light(green,2000)
    await light(yellow,1000)
    await next()
}
next()

/*
面试题三：传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
*/
const time = (timer) => {
    //定义一个定时器，到达时间后返回resolve状态，通知then执行
    return new Promise(resolve => {
        setTimeout(() => {
        resolve()
        }, timer)
    })
}
const ajax1 = () => time(2000).then(() => {
    // 2秒后 执行then，ajax1 返回 1
    console.log(1);
    return 1
})
const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
})
const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
})

function mergePromise (ajaxArray) {
    // 在这里写代码
    // 存放每个ajax的结果
    const data = [];
    let promise = Promise.resolve();
    ajaxArray.forEach(ajax => {
        // 第一次的then为了用来调用ajax
        // 第二次的then是为了获取ajax的结果

        // ajax是一个有返回值的函数，() => time(2000).then(() => {
        //     console.log(1);
        //     return 1
        // })
        //promise.then(()=>{return 1}).then(res =>{console.log(res)})输出为上一个then返回值
        promise = promise.then(ajax).then(res => {
            data.push(res);
            return data; // 把每次的结果返回
        })
    })
    // 最后得到的promise它的值就是data[1, 2, 3]
    return promise;
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
});
console.log(this)//window
let obj = {
    fn:function() {
        console.log(this,'fn外')//obj
        return function() {
            console.log(this,'fn内')//window
        }
    },
    fn2:function() {
        console.log(this,'fn2外') //obj
        return ()=>{
            console.log(this,'fn2内') //obj
        }
    }
}
obj.fn()()
obj.fn2()()