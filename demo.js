let events = require('events');
let eventEmitter = new events.EventEmitter();

// let  connectHandler=()=> {
//     console.log('连接成功');
//     eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', ()=> {
//     console.log('数据接收成功');
// });
// eventEmitter.emit('connection');
// console.log('程序执行完毕');

eventEmitter.on('error', ()=> {
    console.log('error');
});
eventEmitter.emit('error')


// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');

//    // 触发 data_received 事件
//    eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);

// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });

// // 触发 connection 事件
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");

let hello=require('./module.js');
hello.world()

// //hello.js
// function Hello() {
// 	var name;
// 	this.setName = function(thyName) {
// 		name = thyName;
// 	};
// 	this.sayHello = function() {
// 		console.log('Hello ' + name);
// 	};
// };
// module.exports = Hello;
