module.exports = (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) {

        return res.status(401).json({
            mensaje: "Acceso denegado"
        });

    }

    if (token !== process.env.TOKEN) {

        return res.status(403).json({
            mensaje: "Token inválido"
        });

    }

    next();

};