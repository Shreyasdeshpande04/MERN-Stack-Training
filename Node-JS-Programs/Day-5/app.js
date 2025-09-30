const EventEmitter = require('events')
const event=new EventEmitter()

event.on("welcome",(username)=>{
    console.log(`welcome ${username}`);

})

event.emit("welcome","Shreyas")