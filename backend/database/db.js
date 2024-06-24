const mongoose = require('mongoose');

const connectDatabase = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/event_planner')
        .then(()=>{
            console.log('Database connected successfully');
        }).catch(err=>{
            console.log('The server connecting error',err);
        })
    }
    catch(err){
        console.log('Connection error',err);
    }
}

module.exports = connectDatabase;