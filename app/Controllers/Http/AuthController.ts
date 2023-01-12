import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const data = request.only(['username', 'email', 'password'])

    const email = await User.findBy('email', data.email)
    if (email) {
      return response.conflict('User already exists')
    }

    await User.create(data)

    return response.created('User created successfully')
  }
  public async authenticate({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.attempt(email, password)
    return token
  }
}
