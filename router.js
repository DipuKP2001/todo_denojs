import { Router } from "https://deno.land/x/oak@v6.3.2/mod.ts"

import getTodos from './controllers/todos/get.js'

const router = new Router()

router.get('/',({ response })=>{
    response.body = "Todo List API using deno runtime"
})

router.get('/todos',getTodos)

export default router