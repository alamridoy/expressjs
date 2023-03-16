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


app.get("/maxmarks",(req,res)=>{
    con.query("select * from mytable where marks = (select max(marks) as maxmarks from mytable)",(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            let data = JSON.parse(JSON.stringify(result))
            res.send(data)
            console.log(data)
            
        }

    })
})

app.get("/minmarks",(req,res)=>{
    con.query("select min(marks) as minmarks from mytable",(err,result)=>{
        if(err){
            console.log(err);
            
        }else{

            let data = JSON.parse(JSON.stringify(result))
            res.send(data)
            console.log(data)
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

