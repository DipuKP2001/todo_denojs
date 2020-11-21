import { Router } from "https://deno.land/x/oak@v6.3.2/mod.ts"

const router = new Router()

router.get('/',({ response })=>{
    response.body = "Todo List API using deno runtime"
})

export default router