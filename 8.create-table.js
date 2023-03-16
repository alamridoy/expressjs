let express = require('express')
let mysql = require('mysql')
let app = express()
app.use(express.json()); 


let con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'newDatabase'
    }
)

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        let sql = "create table if not exists newtable(id int, name varchar(20))"
        con.query(sql,(err,result)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log("connected");
                
            }
        })
         
    }
  
})







app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('on port 3000');
        
    }
})

