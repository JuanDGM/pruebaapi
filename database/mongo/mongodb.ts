import mongoose from "mongoose";

const MONGO_CONNECT = {
    isConnected:0
}

export const connect = async()=>{

    if(MONGO_CONNECT.isConnected===1){
        console.log("Ya estabamos Connected");
        return;
    }
    
    if(mongoose.connections.length>0){

        MONGO_CONNECT.isConnected = mongoose.connections[0].readyState; 

        if(MONGO_CONNECT.isConnected===1){
            console.log("Usando la conexion anterior")
            return;    
        }
        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_CONNECTION || '')
    MONGO_CONNECT.isConnected=1;
    console.log("Connected");
}

export const disconnect = async()=>{
    if(process.env.NODE_ENV==='development') return;

    if(MONGO_CONNECT.isConnected===0) return;

    await mongoose.disconnect();
    console.log("Disconnected");
    MONGO_CONNECT.isConnected=0;
}