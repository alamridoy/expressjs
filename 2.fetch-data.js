
let express = require('express')
let mysql = require('mysql')
let app = express()
app.use(express.json())


const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fetchdata'
})


con.connect((err)=> {
    if(err)
    {
        console.log(err);
    }else{
        console.log('connection!');
        
    }
})

app.get('/fetch',(req,res)=>{
     

    con.query('select * from mytable',(err,result,fields)=>{
       if(err)
       {
           console.log(err);
       }else{
           res.send(result)

        //    console.log(JSON.parse(JSON.stringify(result)))
        let r = JSON.parse(JSON.stringify(result))
        console.log(r[0])
        console.log(r[0].name)
           
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