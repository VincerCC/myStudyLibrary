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
var textarea = document.getElementById("textarea");
var helperData = /** @class */ (function () {
    function helperData(dataKey, idKey) {
        this.dataKey = dataKey;
        this.idKey = idKey;
    }
    helperData.prototype.readData = function () {
        // 1.读取本地存储数据
        var data = sessionStorage.getItem(this.dataKey);
        // 2.转成数组对象
        var arrData = [];
        if (data !== null) {
            arrData = JSON.parse(data);
        }
        // 3.返回数组对象
        return arrData;
    };
    ;
    helperData.prototype.saveData = function (arrData) {
        // 1.数组转成字符串
        var dataStr = JSON.stringify(arrData);
        // 2.存到本地存储
        sessionStorage.setItem(this.dataKey, dataStr);
    };
    ;
    helperData.prototype.addData = function (conStr) {
        // 1.读取本地存储
        var dataArr = this.readData();
        // 2.接收到评论内容字符串 conStr
        var obj = {
            conStr: conStr
        };
        // 3.将评论内容封装成对象，并生成id
        var id = dataArr.length > 0 ? dataArr[dataArr.length - 1][this.idKey] + 1 : 1;
        obj[this.idKey] = id;
        // 4.将对象添加到数组
        dataArr.push(obj);
        // 5.数组转成字符串，重新保存到本地
        this.saveData(dataArr);
        // 6.返回 生成的id
        return id;
    };
    ;
    helperData.prototype.delData = function (id) {
        var _this = this;
        // 1.读取本地存储
        var dataArr = this.readData();
        // 2.找到对应id的元素，找到相同id元素返回下标，没找到返回-1
        var index = dataArr.findIndex(function (item) {
            console.log(item, item[_this.idKey]);
            return item[_this.idKey] == id;
        });
        console.log(index);
        if (index === -1)
            return false;
        // 3.删除对应下标元素
        dataArr.splice(index, 1);
        // 4.删除后的数组转成字符串，重新保存到本地
        this.saveData(dataArr);
        return true;
    };
    ;
    return helperData;
}());
var db = new helperData('myData', 'id');
window.onload = function () {
    console.log(db);
    var contentArr = db.readData();
    for (var _i = 0, contentArr_1 = contentArr; _i < contentArr_1.length; _i++) {
        var item = contentArr_1[_i];
        makeDiv(item.id, item.conStr);
    }
    document.getElementById("setData").onclick = function () {
        saveData();
    };
};
// 创建评论数据div
function makeDiv(id, content) {
    var liObj = document.createElement('li');
    liObj.innerHTML = content;
    document.getElementById("content").appendChild(liObj);
    var spanObj = document.createElement('span');
    spanObj.setAttribute('pId', id);
    spanObj.onclick = remove;
    spanObj.innerHTML = 'X';
    liObj.appendChild(spanObj);
}
//发表评论
function saveData() {
    console.log('111');
    var content = textarea.value;
    if (!content)
        return;
    var id = db.addData(content);
    makeDiv(id, content);
    textarea.value = '';
}
//删除评论
function remove(e) {
    var span = e.srcElement;
    var conDiv = span.parentNode;
    conDiv.parentNode.removeChild(conDiv);
    var id = e.srcElement.getAttribute('pId');
    db.delData(id);
}
console.log(textarea.value);
