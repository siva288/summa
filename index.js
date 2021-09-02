const express=require("express");
const app=express();
const sql=require("mysql");
const bodyparse=require("body-parser");
const cors =require("cors");
const con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
   database:"gaipp"
})

con.connect((err)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("db connect..");
    }
})
app.use(cors());
app.use(bodyparse.urlencoded({extended:true}));
app.use(express.json());
app.post("/add/insert",(req,res)=>
{
    const name=req.body.name;
en1="INSERT INTO user(name) VALUES('"+name+"')";
    con.query(en1,(err)=>{
        if(err) 
        {
            throw err;
        }
        else
        {
            console.log("data enter success..")
        }

    })
})

app.get("/get/user",(req,res)=>{
    en2="SELECT * FROM user ";
    con.query(en2,(err,result)=>{
        if(err)
        {
            throw err
        }
        else
        {
            console.log(result);
            res.send(result);
        }
    })
})

app.post("/data/inserts",(req,res)=>{
    const name=req.body.name;
    const description=req.body.description;
    const duration=req.body.duration;
    const date=req.body.date;

    en3="INSERT INTO exercise(username,decription,duration,date) VALUES('"+name+"','"+description+"',"+duration+",'"+date+"')";
    con.query(en3,(err,res)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            console.log(res.data);
        }
    })
})
app.get("/get/main",(req,res)=>{
    en4="SELECT * FROM exercise ";
    con.query(en4,(err,result)=>{
        if(err)
        {
            throw err
        }
        else
        {
            console.log(result);
            res.send(result);
        }
    })
})
app.delete("/user/del/:id",(req,res)=>{
    const id=req.params.id;
    en5="DELETE  FROM exercise WHERE id="+id+"";
    con.query(en5,(err,res)=>{
        if(err)
        {
            throw err
        }
        else
        {
            console.log("delete");
        }
    })
})
app.get("/get/update/:id",(req,res)=>{
    const id=req.params.id;
    en6="SELECT * FROM exercise WHERE id="+id+"";
    con.query(en6,(err,ress)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            console.log(ress);
            res.send(ress);
        }
    })
})
app.put("/main/update",(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const description=req.body.description;
    const duration=req.body.duration;
    const date=req.body.date;
    if(name!="")
    {
        en7="UPDATE exercise SET username='"+name+"' WHERE id="+id+"";
        con.query(en7,(err)=>{if(err){throw err}else{console.log("name update")}})
    }
    else if(description!="")
    {
        en8="UPDATE exercise SET decription='"+description+"' WHERE id="+id+"";
        con.query(en8,(err)=>{if(err){throw err}else{console.log("description update")}})
    }
    else if(duration!=0)
    {
        en9="UPDATE exercise SET duration='"+duration+"' WHERE id="+id+"";
        con.query(en9,(err)=>{if(err){throw err}else{console.log("duration update")}})
    }
    else if(date!="")
    {
        en10="UPDATE exercise SET date='"+date+"' WHERE id="+id+"";
        con.query(en10,(err)=>{if(err){throw err}else{console.log("date update")}})
    }
    else
    {
        console.log("something wrong");
    }
})
app.listen(4545,(err)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("port running...")
    }
});
