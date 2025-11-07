let items =[];

export const getAllItems =(req , res)=>{
 return res.status(200).json({message : "sucessfully added" , data :items ,count : items.length});
}

export const addItems = (req , res)=>{
    const {name} = req.body;
    if(!name){
        res.status(404).json({message : "name is not there"});
    }
    const tempVal = {id : items.length , name : name};
    items.push(tempVal);
    res.status(200).json({message : "sucessfully added"});  
}

export const updateName =(req , res)=>{
 const {id} = parseInt(req.params.id);
 const name = req.body;
 if(!name){
    res.status(404).json({message : "please add the pdatwed name first"});
 }
 const item = items.find((i)=> i.id === id);
 if(ind < 0 || ind >= items.length){
    res.status(404).json({message : " index out of bound"});
 }
 item.name = name;
res.status(200).json({message : `item updated at ${id}` , item});
}
export const delteItem = (req,res)=>{
    const {id} = parseInt(req.params.id);
    const ind = items.find((i)=> i.id == id);
    items.splice(ind , 1);
    res.status(200).json("sucessfully deltated");
}