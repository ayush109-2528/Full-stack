import Client  from "pg";
const db = new Client({
    user: "username",
    host: "localhost",
    database: "mydatabase",
    password: "password",
    port:5432,
});
db.connect();
db.query("SELECT * FROM users",(err ,res)=>{
    if(err){
        console.error("error executing query", err.stack);
    }else{
        console.log("user data:", res.rows);
    }
    db.end();
})