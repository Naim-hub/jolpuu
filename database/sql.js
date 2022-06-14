import mysql from "mysql2";

//db연결

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'db',
        password: 'Dubidu1379!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit : 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getdrowsyYawn : async() => {
        const [rows] = await promisePool.query(`select * from db`);
        console.log(rows);
        return rows
    }
}