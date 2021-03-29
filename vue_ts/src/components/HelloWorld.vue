<template>
  <div class="hello">
    <ul id='content' class="ulBox">
      <li v-for="(item,index) in dataArr" :key="index">
        {{item.conStr}}-{{item.idKey}}
        <span @click="remove(item.idKey)">X</span>
      </li>
    </ul>
    <textarea name="" id="textarea" cols="30" rows="10" v-model="value"></textarea>
    <button id="setData" @click="saveData">发表</button>
    <h1 @click="showMy">{{msg}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit,Watch } from 'vue-property-decorator';
import helperData from '../ts/myType'
let db = new helperData('dataKey','idKey')
@Component({

}) //装饰器
export default class HelloWorld extends Vue {
  @Prop({
    type:String,
    required:true
  })
  private msg!: string;
  value:string = ''
  dataArr:Array<object> = []
  created() {
    this.dataArr = db.readData()
    console.log('this.dataArr',this.dataArr)
  }
  @Watch('msg')
  msgChange(newVal:any,oldVal:any){
    console.log('msg改变了,newVal'+newVal+'oldVal'+oldVal)
  }
  @Emit('showMy')//用来向父级传递事件，return的内容为父级事件接收到的的参数
  showMy(){
    console.log('我是子组件触发父组件')
    return '我是返回值'
  }
  //发表评论
  saveData(){
    console.log('111')
    let content =this.value
    if(!content) return
    db.addData(content)
    this.value=''
    this.dataArr = db.readData()
  }
  //删除评论
  remove(e:string|number){
    console.log(e)
    db.delData(e)
    this.dataArr = db.readData()
    console.log(this.dataArr)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ulBox{
  margin: 0;
  padding: 0;
}
.ulBox li{
  display: flex;
  justify-content: space-between;
  border:1px solid black;
  margin: 5px;
  padding:5px;
  list-style: none;
}
</style>
