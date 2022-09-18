import fs from 'fs';

function readFile(fpath) {
    // 返回一个Promise对象，就可以后面接then调用
    // resolve对应then中成功的回调函数，reject对应失败的回调函数
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, 'utf-8', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        })
    })
}

readFile('./file/1.txt').then(r1 => {
    console.log(r1);
    return readFile('./file/2.txt', 'utf-8');
}).then(r2 => {
    console.log(r2);
    return readFile('./file/3.txt', 'utf-8');
}).then(r3 => {
    console.log(r3);
}).catch(err => {
    console.log(err.message);
})