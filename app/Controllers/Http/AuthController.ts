// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async register({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
  public async authenticate({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.attempt(email, password)

    return token
  }
}
