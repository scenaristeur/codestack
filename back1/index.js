import express from 'express'
import crud from 'express-crud-router'
import sequelizeCrud from 'express-crud-router-sequelize-v6-connector'
import { User } from './models'

const app = new express()
app.use(crud('/admin/users', sequelizeCrud(User)))