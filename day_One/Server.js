const express = require("express");
const app = express();
const Port = 4000;
app.use(express.json());
let items =[];
app.get("/getting" , (req , res)=>{
    res.json(items);
})
app.post("/add" , (req , res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({message : "name doesn't found"});
    }
    const temp = {Id : items.length+1 , name};
    items.push(temp);
    res.json({message :"added sucessfully"});
})
app.delete("/delete/:id" , (req , res)=>{
    const {id} = parseInt(req.body.id);
    const ind = items.findIndex(item => item.id == id);
    if(ind < 0  || ind >= items.length){
        res.status(400).json({message : "index out of bound"})
    }
    const delItem = items.slice(ind , 1);
    
    
    res.json({message : `deleted the  id  ${id}`  , delItem});
})
app.listen(Port , ()=>{
    console.log(`App is Running on Port ${Port}`);
})