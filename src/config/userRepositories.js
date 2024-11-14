import db from ".../config/database.js";
db.run(`
    CREATE TABLE IF NOT EXIST users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NO NULL,
    avatar TEXT
    )
    `);

    function createUserRepository(newUser){
        return new Promise((res, rej)=>{
            const {username, email, password, avatar} = newUser;
            db.run(`
                INSERT INTO users (username, email, password, avatar)
                values (?, ?, ?, ?)
  `,
[username, email, password, avatar],
(err)=> {
    if (err) {
        rej(err)
    }else{
        res({message: 'User Created'})
    }
}
);
        })
    }

    export default {
        createUserRepository
    }