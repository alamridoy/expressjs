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


app.post("/post",(req,res)=>{
    let name = req.body.name
    let marks = req.body.marks

    con.query("insert into mytable(name,marks) values(?,?)",[name,marks],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED')
        
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



