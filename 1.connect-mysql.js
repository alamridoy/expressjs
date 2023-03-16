let express = require('express')
let mysql = require('mysql')
let app = express()
app.use(express.json())



const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'todo'
})



con.connect((err)=> {
    if(err)
    {
        console.log(err);
    }else{
        console.log('connection!');
        
    }
})

app.post('/post',(req,res)=>{
     let name = req.body.name;
     let id = req.body.id;
     let marks = req.body.marks;


     con.query('insert into mytable values(?,?,?)',[id,name,marks],(err,result)=>{
        if(err)
        {
            console.log(err);
        }else{
            res.send("POSTED")
            console.log('posted')
            
        }
     })
})
app.listen(3000,(err)=>{
    if(err)
        {
            console.log(err);
        }else{
            console.log('on port 3000')
            
        }
})