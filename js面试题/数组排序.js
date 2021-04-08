let arr = [12, 13, 65, 2, 23, 15, 25, 23, 25, 14, 16];

// 【冒泡排序】
// 当前项 与 后一项 进行计较，交换位置
// 每一轮比较后，当前数组中最大的放到了末尾
// 最大轮数，length-1
// 每一轮次数，最多length-1（不用和自身比较）- i（之前比较了多少轮）
function mapSort(arr){
  let temp = null;
  // 外层控制循环比较的轮数
  for(let i=0; i<arr.length-1; i++){

    // 内层控制每一轮比较的次数
    for(let j=0; j<arr.length-1-i; j++){

      // 如果当前项大于后一项，交换位置
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }
  return arr
}
// console.log(mapSort(arr));


// 插入排序
function insertSort(arr){
  let handle = []
  handle.push([arr[0]])
  // 从第二项开始一次抓牌，一直到把台面上的牌抓光
  for(let i=1; i<arr.length-1; i++){
    // A是新抓的牌
    let A = arr[i];

    // 内层控制每一轮比较的次数
    for(let j=handle.length -1; j >= 0; j--){
      // B是每一次要比较的手里的牌
      let B = handle[j]
      if(A > B){
        handle.splice(j+1, 0, A)
        break
      }
      // 已经比到第一项，我们把新牌放到手中最前面即可
      if(j === 0){
        handle.unshift(A)
      }
    }

  }
  return handle
}
console.log(insertSort(arr));