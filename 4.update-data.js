let express = require('express')
let mysql =require('mysql')
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
    if(err){
        console.log(err);
        
    }else{
        console.log('connected!!');
        
    }
})


app.put("/update/:id",(req,res)=>{
    let upid = req.params.id;
    let name = req.body.name;
    let marks = req.body.marks;

    console.log(upid)
    console.log(name)
    console.log(marks)

    con.query("update mytable set name = ?, marks = ? where id = ?",[name,marks,upid], (err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            res.send('Uptaded data')
            // console.log(result);
            
            
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

