import {Clientes} from './db'


const clientesDB = {};


export const resolvers = {
    Query: {
        getCliente: ({id}) => {
            return new Cliente(id, clientesDB[id]);
        },
    },
    Mutation: {
        crearCliente: (_, {input}) => {
            const nuevoCliente = new Clientes({
                id: input.id,
                nombre: input.nombre,
                apellido: input.apellido,
                email: input.email,
                edad: input.edad,
                tipo: input.tipo,
                pedidos: input.pedidos

            })
            nuevoCliente.id = nuevoCliente._id;

            return new Promise((resolve, object) => {
                nuevoCliente.save((error => {
                    if (error) rejects(error)
                    else resolve(nuevoCliente)
                }))
            })
        },
        actualizarCliente: (_, {input}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate(
                    {_id: input.id}, input, {new: true},
                    (error, cliente) => {
                        if (error) rejects(error)
                        else resolve(cliente)
                    }
                );
            });
        }
    }

}


