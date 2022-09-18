import thenFs from 'then-fs';

// thenFs读文件的返回是Promise对象
thenFs.readFile('./file/11.txt', 'utf-8').then(r1 => {
    console.log(r1);
    return thenFs.readFile('./file/2.txt', 'utf-8');
}).then(r2 => {
    console.log(r2);
    return thenFs.readFile('./file/3.txt', 'utf-8');
}).then(r3 => {
    console.log(r3);
}).catch(err => {
    console.log(err.message);
}) // 捕获错误

// Promise.all方法，并行的异步操作，所有操作执行结束后执行then指令
// Promise.race方法，谁先执行结束，就执行then指令
const arr = [
    thenFs.readFile('./file/1.txt', 'utf-8'),
    thenFs.readFile('./file/2.txt', 'utf-8'),
    thenFs.readFile('./file/3.txt', 'utf-8'),
];

Promise.race(arr).then(result => {
    console.log(result);
})
