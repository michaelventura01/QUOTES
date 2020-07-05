const express = require("express");
const server = express();
const { PORT } = require("./config");
const {HomeRoutes, QuotesRoutes} = require('./routes');
const { NotFoundMiddleWare } = require('./middlewares')

//middlewares carpeta publica
server.use(express.static('./public'))

//middleware de peticiones
server.use(express.json());

//middleware de controlador home
server.use('/', HomeRoutes);

//middleware de controlador Quotes
server.use('/', QuotesRoutes);

//para cuando no encuentre ruta, middleware
server.use(NotFoundMiddleWare)

server.listen(PORT, () => {
    console.log(`Application Running on PORT ${PORT}`);
});