let express = require('express')
let mysql = require('mysql')
let app = express()
app.use(express.json()); 


let con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'fetchdata'
    }
)

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('connection!');
        
    }
  
})

app.delete("/deletedata",(req,res)=>{
    let deleteid = req.body.id
    con.query("delete from mytable where id = ?",deleteid,(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        if(result.affectedRows==0){
            res.send("id not present")
        }else{
            res.send("deleted")
        }
        
    } 
    })
})


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('on port 3000');
        
    }
})

