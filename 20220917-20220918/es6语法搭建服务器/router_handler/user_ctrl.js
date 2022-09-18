import db from '../db/index.js';

export async function getInfoHandler(req, res) {
    // console.log(results);
    try {
        const [results,] = await db.query('select id, username, nickname, xxx from ev_users')
        res.send({
            status: 0,
            message: "获取用户信息成功！",
            data: results,
        });
    }
    catch (err) {
        res.send({
            status: 1,
            message: "获取用户信息失败！",
            data: err.message,
        });
    }

}