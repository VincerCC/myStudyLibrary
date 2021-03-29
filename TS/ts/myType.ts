// let key:any = document.querySelector("#key");
// let value:any = document.querySelector("#value");
// let setData:any = document.querySelector("#setData");
// let getData:any = document.querySelector("#getData");
// let delData:any = document.querySelector("#delData");
// let delAll:any = document.querySelector("#delAll");
// let setObj:any = document.querySelector("#setObj");
// let getObj:any = document.querySelector("#getObj");
// setData.onclick=function(){
//   console.log('666')
// }
// getData.onclick=function(){
//   console.log('666')
// }
// delData.onclick=function(){
//   console.log('666')
// }
// delAll.onclick=function(){
//   console.log('666')
// }
// setObj.onclick=function(){
//   console.log('666')
// }
// getObj.onclick=function(){
//   console.log('666')
// }
// let dh = new helperData('myData','id')

let textarea = document.getElementById("textarea") as HTMLInputElement
class helperData {
  dataKey:string;
  idKey:string;

  constructor(dataKey:string,idKey:string){
    this.dataKey=dataKey
    this.idKey=idKey
  }

  readData():any{
    // 1.读取本地存储数据
    let data:string | null = sessionStorage.getItem(this.dataKey)
    // 2.转成数组对象
    let arrData:any = []
    if(data!==null){
      arrData = JSON.parse(data)
    }
    // 3.返回数组对象
    return arrData
  };

  saveData(arrData:Array<Object>):void{
    // 1.数组转成字符串
    let dataStr = JSON.stringify(arrData)
    // 2.存到本地存储
    sessionStorage.setItem(this.dataKey,dataStr)
  };

  addData(conStr:string):number{
    // 1.读取本地存储
    let dataArr:any = this.readData()
    // 2.接收到评论内容字符串 conStr
    let obj:object = {
      conStr:conStr
    }
    // 3.将评论内容封装成对象，并生成id
    let id:number = dataArr.length > 0 ? dataArr[dataArr.length - 1][this.idKey] + 1 : 1
    obj[this.idKey] = id
    // 4.将对象添加到数组
    dataArr.push(obj)
    // 5.数组转成字符串，重新保存到本地
    this.saveData(dataArr)
    // 6.返回 生成的id
    return id
  };

  delData(id:number | string):boolean{
    // 1.读取本地存储
    let dataArr:any = this.readData()
    // 2.找到对应id的元素，找到相同id元素返回下标，没找到返回-1
    let index:number = dataArr.findIndex((item) => {
      console.log(item,item[this.idKey])
      return item[this.idKey] == id
    })
    console.log(index)
    if(index === -1) return false
    // 3.删除对应下标元素
    dataArr.splice(index,1)
    // 4.删除后的数组转成字符串，重新保存到本地
    this.saveData(dataArr)
    return true
  };
}
let db = new helperData('myData','id')
window.onload=function () {
  console.log(db)
  let contentArr=db.readData()
  for(let item of contentArr){
    makeDiv(item.id,item.conStr)
  }
  document.getElementById("setData").onclick = function (){
    saveData()
  }
}
// 创建评论数据div
function makeDiv(id,content){
  let liObj = document.createElement('li')
  liObj.innerHTML = content
  document.getElementById("content").appendChild(liObj)
  let spanObj = document.createElement('span')
  spanObj.setAttribute('pId',id)
  spanObj.onclick = remove
  spanObj.innerHTML = 'X'
  liObj.appendChild(spanObj)
}
//发表评论
function saveData(){
  console.log('111')
  let content =textarea.value
  if(!content) return
  let id = db.addData(content)
  makeDiv(id,content)
  textarea.value=''
}
//删除评论
function remove(e){
  let span = e.srcElement
  let conDiv = span.parentNode
  conDiv.parentNode.removeChild(conDiv)
  let id = e.srcElement.getAttribute('pId')
  db.delData(id)
}
console.log(textarea.value)
