import { Router} from 'express';
import { getAllEntries } from '../services/entriesService';
import { EntryI } from '../types';

const entriesRouter = Router();

entriesRouter.get('/',(_req,res)=>{
    const entries = getAllEntries()
    res.send(entries);
})

entriesRouter.post('/',(_req,res)=>{
    res.send("CREATE new entry");
})

export default entriesRouter;