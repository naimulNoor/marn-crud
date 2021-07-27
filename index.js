import express,{Router} from 'express';
import mongoose from 'mongoose';

import route from './route/route.js'

const app = express();

const PORT=8000;


app.use('/',route);


//monngo db url
const URL='mongodb://pencil:pencil123@marn-crud-shard-00-00.f0ldu.mongodb.net:27017,marn-crud-shard-00-01.f0ldu.mongodb.net:27017,marn-crud-shard-00-02.f0ldu.mongodb.net:27017/marn-crud?ssl=true&replicaSet=atlas-wtk4ny-shard-0&authSource=admin&retryWrites=true&w=majority';

//mongo db connect
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
  
    app.listen(PORT,()=>{
        console.log('server is Running sucessfully on Port ${PORT}');
    }); 

}).catch(error =>{
    
    console.log('MonError : ',error.message);
})
