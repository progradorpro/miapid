const mongoose = require("mongoose");

const conectarDB = async () => {
    if (!process.env.MONGO_URI) {
        console.log("MONGO_URI no definido. Configura la variable de entorno para conectar a MongoDB Atlas.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message);
    }
};

module.exports = conectarDB;