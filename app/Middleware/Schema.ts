import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import schemaFactory from '../Controllers/schemas'

export default class SchemaMiddleware {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>,
    guards: ['register' | 'login']
  ) {
    let schemas = await schemaFactory()
    try {
      if (guards[0] !== undefined) {
        await request.validate({
          schema: schemas[guards[0]],
        })
      }
    } catch (error) {
      return response.badRequest(error.messages.errors)
    }
    await next()
  }
}
