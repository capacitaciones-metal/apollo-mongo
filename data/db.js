import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true})

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    edad: Number,
    tipo: String,
    pedidos: Array
})

const Clientes = mongoose.model('clientes', clientesSchema)

export {Clientes};