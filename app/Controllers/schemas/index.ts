import { newUserSchema, userLoginSchema } from './AuthSchema'

export default async () => {
  return {
    register: newUserSchema,
    login: userLoginSchema,
  }
}
