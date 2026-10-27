const dgram = require("dgram");
const { send } = require("process");

const sender = dgram.createSocket("udp4")

sender.send('This is a string', 8000, "127.0.0.1", (error, bytes) => {
    if(error) console.log(error);
    console.log(bytes);
})
