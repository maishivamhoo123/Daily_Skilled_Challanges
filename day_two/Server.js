import express from "express";
const app = express();
const PORT = 3000;
const items =[];

app.use(express.json());
app.get("/allitems" , (req , res)=>{
    try{
    res.status(202).json({message : "all the items are" , items});
    }catch(err){
        res.status(404).json({message : "the eror in getreques" , err});
    }
});
app.post("/addItems" , (req , res) =>{
    const {item} = {id : items.length +1  , name : req.body.name };
    if(!items){
        return res.status(404).json({message : "items not found"});
    }
    items.push(item);
    res.status(200).json({message :"item added sucessfully"});
})
app.delete("/item/:id" , (req , res) =>{
    const {id} = parseInt(req.params.id);

   const ind = items.findIndex((i) => i.id === id);
    if(ind < 0 || ind >= items.length){
        res.status(404).json({message :"index out of bound"});
    }
    items.splice(ind , 1);
    res.status(200).json({message : "item deleted sucessfully"});
})
app.put("/item/:id" , (req , res) =>{
    const {id} = parseInt(req.params.id);
    const ind = items.findIndex((i) => i.id === id);
    if(ind <0 || ind >= items.length){
        return res.status(404).json({message :"index outof bound"});
    }
    items[ind].name = req.body.name;
    res.status(200).json({message :"item edited sucessfully"});

})

app.listen(PORT , ()=>{
    console.log(`App is listning on porrt ${PORT}`);
})