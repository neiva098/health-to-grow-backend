import { query } from "express-validator";

export const findAll = [
    query('type').isString()
]