const express = require('express')
const parkingRouter = require('./routes/parking')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            parking:"/api/v1/parking"
        }
        this.middleware()
        this.routes()
    }

    routes(){
        //this.app.get('/', (req, res) => {
        //    res.send('Mensaje recibido')
        //})//End Point
        
        this.app.use(this.paths.parking, parkingRouter)
    }

    middleware(){
        this.app.use(cors())//Habilita Origen Cruzado
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port)
        })
    }
}

module.exports = Server