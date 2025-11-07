import express from "express";
import itemRoter from "./Route/route.js"
const app = express();
app.use(express.json());
app.use("/api/items" , itemRoter);
const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})