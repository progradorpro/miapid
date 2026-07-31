require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/user.routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});