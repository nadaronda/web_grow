import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Product } from '../models/product.model'

type Myrequest = FastifyRequest<{
  Body: { /*category: string, */nameProduct: string, description: string, price: number, active: boolean };
  Params: { id: string }
}>
export const ProductRouter: FastifyPluginAsync = async (app) => {
  // Get all products
  app.get('/', async () => {
    const products = await Product.find().lean()
    return products
  })
  // Create a new Producto
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { /*category,*/ nameProduct, description, price, active } = request.body
    const newProduct = new Product({/* category,*/ nameProduct, description, price, active })
    await newProduct.save()
    return newProduct
  })
  // borrar Producto
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Product.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}