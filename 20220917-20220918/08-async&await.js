import thenFs from "then-fs";

// 可以用async和await来简化promise操作
async function getFile() {
    const r1 = await thenFs.readFile('./file/1.txt', 'utf-8');
    console.log(r1);
    const r2 = await thenFs.readFile('./file/2.txt', 'utf-8');
    console.log(r2);
    const r3 = await thenFs.readFile('./file/3.txt', 'utf-8');
    console.log(r3);
}

getFile();