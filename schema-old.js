import {buildSchema} from 'graphql'


const schema = buildSchema(`
     type Cliente{
        id: ID
        nombre: String
        apellido: String
        email: String
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
     }
     
     enum TipoCliente{
        BASICO
        PREMIUM
     }
     
     type Pedido{
        producto: String
        precio: Int
     }
     
     type Query{
        cliente: Cliente
        getCliente(id: ID) : Cliente
     }
     
     input pedidoInput{
        producto: String
        precio: Int
     }
     
     input ClienteInput{
        id: ID
        nombre: String!
        apellido: String!
        email: String!
        edad: Int!
        tipo: TipoCliente!
        pedidos: [pedidoInput]
     }
     
     type Mutation {
        """ Crear clientes descripcion """
        crearCliente(input:ClienteInput) : Cliente
     }
`)

export default schema;