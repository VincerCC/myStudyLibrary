// demo_接口泛型类综合使用.ts
/*
*功能：定义一个操作数据库的库，支持Mysql、Mssql、MongoDb
*要求1：Mysql、Mssql、MongoDb功能一样，都有add、update、delete、get方法
*解决方案：需要约束规范，所以要定义接口，需要代码重用，所以用到泛型
  1.接口：在面向对象的编辑中，接口是一种规范的定义，他定义了行为和动作规范
  2.泛型：解决类、接口、方法的复用性
*/

// 1.定义接口
interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[]
}
// 要实现泛型接口，这个类也应该是泛型类,规定了这个类必须包含接口的方法
class MysqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}
class MssqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}
class MongoDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}

// 操作用户表，定义一个user类，与数据库表做映射
class user {
  userName:string|undefined

  password:string|undefined
}
var u = new user()
u.userName = '张三'
u.password = '123456'

// 调用MysqlDb
// 泛型传入user，规定了 add方法的参数必须为user格式
var oMysql = new MysqlDb<user>()
oMysql.add(u)
var oMssql = new MssqlDb<user>()
oMssql.add(u)
var oMongo = new MongoDb<user>()
oMongo.add(u)