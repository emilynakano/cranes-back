import { schema, rules } from '@ioc:Adonis/Core/Validator'

const newUserSchema = schema.create({
  username: schema.string([rules.minLength(4)]),
  email: schema.string([rules.email()]),
  password: schema.string([rules.confirmed(), rules.minLength(4)]),
})

const userLoginSchema = schema.create({
  email: schema.string([rules.email()]),
  password: schema.string(),
})

export { newUserSchema, userLoginSchema }
