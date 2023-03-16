let express = require('express')
let mysql = require('mysql')
let app = express()


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

app.get("/fetchbyid/:id",(req,res)=>{
    const fetchid = req.params.id;
    con.query('select * from mytable where id=?',fetchid,(err,result)=>{
        if(err)
        {
            console.log(err)
        }else{
           if(result.length==0){
             console.log('id not present');
             
           }else{
            res.send(result)
            let value = JSON.parse(JSON.stringify(result))
            console.log(value)
           }
            // console.log(result)
            
        }
    })
})
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('on port 3000');
        
    }
})