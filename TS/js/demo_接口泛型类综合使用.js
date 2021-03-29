// demo_接口泛型类综合使用.ts
/*
*功能：定义一个操作数据库的库，支持Mysql、Mssql、MongoDb
*要求1：Mysql、Mssql、MongoDb功能一样，都有add、update、delete、get方法
*解决方案：需要约束规范，所以要定义接口，需要代码重用，所以用到泛型
  1.接口：在面向对象的编辑中，接口是一种规范的定义，他定义了行为和动作规范
  2.泛型：解决类、接口、方法的复用性
*/
// 要实现泛型接口，这个类也应该是泛型类,规定了这个类必须包含接口的方法
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDb;
}());
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MongoDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb;
}());
// 操作用户表，定义一个user类，与数据库表做映射
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());
var u = new user();
u.userName = '张三';
u.password = '123456';
// 调用MysqlDb
var oMysql = new MysqlDb();
oMysql.add(u);
var oMssql = new MssqlDb();
oMssql.add(u);
var oMongo = new MongoDb();
oMongo.add(u);
