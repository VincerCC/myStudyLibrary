const reactiveHandle = {
  get(target, prop) {
    if (prop === "is_reactive") return true;
    const res = Reflect.get(target, prop);
    console.log("访问数据被劫持,劫持的是【" + prop + "】");
    return res;
  },
  set(target, prop, value) {
    const res = Reflect.set(target, prop, value);
    console.log("设置数据，设置的是【" + prop + "】");
    return res;
  },
  deleteProperty(target, prop) {
    const res = Reflect.deleteProperty(target, prop);
    console.log("删除数据，删除的是【" + prop + "】");
    return res;
  },
};
const readonlyHandle = {
  get(target, prop) {
    if (prop === "is_readonly") return true;
    const res = Reflect.get(target, prop);
    console.log("访问数据被劫持,劫持的是【" + prop + "】");
    return res;
  },
  set(target, prop, value) {
    console.warn("readonly，无法写入，只能读取");
    return true;
  },
  deleteProperty(target, prop) {
    console.warn("readonly，无法写入，只能读取");
    return true;
  },
};
// 浅监视
function myShallowReactive(target) {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  if (targetType === "object") {
    return new Proxy(target, reactiveHandle);
  }
  return target;
}
// 深监视
function myReactive(target) {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  if (targetType === "object") {
    for (let key in target) {
      target[key] = myReactive(target[key]);
    }
    return new Proxy(target, reactiveHandle);
  } else if (targetType === "array") {
    target.forEach((item, index) => {
      target[index] = myReactive(item);
    });
    return new Proxy(target, reactiveHandle);
  }
  return target;
}
let obj1 = {
  name: 1,
  age: {
    a: "a",
    b: "b",
    c: [1, 2, 3],
  },
};
let obj2 = {
  name: 1,
  age: {
    a: "a",
    b: "b",
    c: [1, 2, 3],
  },
};
let proxyObj1 = myReactive(obj1);
let proxyObj2 = myShallowReactive(obj2);
console.log("proxyObj1.name", proxyObj1.name);
proxyObj1.name = "厉害了";
console.log("proxyObj1.name", proxyObj1.name);

console.log("proxyObj1.age.a", proxyObj1.age.a);
proxyObj1.age.a = "成功了";
console.log("proxyObj1.age.a", proxyObj1.age.a);
console.log("-------------------------------");
console.log("proxyObj2.name", proxyObj2.name);
proxyObj2.name = "厉害了";
console.log("proxyObj2.name", proxyObj2.name);

console.log("proxyObj2.age.a", proxyObj2.age.a);
proxyObj2.age.a = "成功了"; // 无法进入到set函数
console.log("proxyObj2.age.a", proxyObj2.age.a);

console.log("======readonly========");
function myShallowReadonly(target) {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  if (targetType === "object") {
    return new Proxy(target, readonlyHandle);
  }
  return target;
}
// 深监视
function myReadonly(target) {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  if (targetType === "object") {
    for (let key in target) {
      target[key] = myReadonly(target[key]);
    }
    return new Proxy(target, readonlyHandle);
  } else if (targetType === "array") {
    target.forEach((item, index) => {
      target[index] = myReadonly(item);
    });
    return new Proxy(target, readonlyHandle);
  }
  return target;
}

let obj3 = {
  name: 1,
  age: {
    a: "a",
    b: "b",
    c: [1, 2, 3],
  },
};
let obj4 = {
  name: 1,
  age: {
    a: "a",
    b: "b",
    c: [1, 2, 3],
  },
};
let readonlyProxy1 = myShallowReadonly(obj3);
let readonlyProxy2 = myReadonly(obj4);
console.log("readonlyProxy1.age.a", readonlyProxy1.age.a);
readonlyProxy1.age.a = "哆啦";
console.log("readonlyProxy1.name", readonlyProxy1.name);
readonlyProxy1.name = "name";
console.log("readonlyProxy2.age.a", readonlyProxy2.age.a);
readonlyProxy2.age.a = "哆啦";

console.log("======ref========");
function myRef(target) {
  target = myReactive(target);
  return {
    // 保存target数据
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },
    set value(val) {
      console.log("修改数据【" + val + "】");
      this._value = val;
    },
    get is_ref() {
      return true;
    },
  };
}
function myShallowRef(target) {
  target = myShallowReactive(target);
  return {
    // 保存target数据
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },
    set value(val) {
      console.log("修改数据【" + val + "】");
      this._value = val;
    },
    get is_ref() {
      return true;
    },
  };
}
let userInfo = myRef({
  name: "jack",
  home: {
    city: "广州",
  },
});

console.log(userInfo.value.home.city);
userInfo.value.home.city = "深圳";
console.log(userInfo.value.home.city);

function isRef(target) {
  return (target && target.is_ref) || false;
}
function isReactive(target) {
  return (target && target.is_reactive) || false;
}
function isReadonly(target) {
  return (target && target.is_readonly) || false;
}
function isProxy(target) {
  return (target && target.is_proxy) || false;
}
console.log(isRef(userInfo));
console.log(isReactive(proxyObj1));
console.log(isReadonly(readonlyProxy1));

console.log(isRef());
console.log(isReactive());
console.log(isReadonly());

console.log(isRef({}));
console.log(isReactive({}));
console.log(isReadonly({}));
