import express from "express";
import { getAllItems , addItems  , updateName , delteItem} from "../Controller/Controller.js";

const router = express.Router();

router.get("/" , getAllItems);
router.post("/" , addItems);
router.put("/:id" ,updateName);
router.delete("/:id" , delteItem);
export default router;