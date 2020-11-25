import { FILE_PATH } from '../../config.js'

export default async ({response,request})=>{
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    try {
        const { value: { title } } = await request.body()
        const data = await Deno.readFile(FILE_PATH)
        const todos = JSON.parse(decoder.decode(data))

        const newTodo = { id:todos.length+1, title: title, completed:false }
        todos.push(newTodo)

        await Deno.writeFile(FILE_PATH,encoder.encode(JSON.stringify(todos)))
  
        response.status = 201
        response.body = { status:"success",newTodo }
    } catch (error) {
        response.status = 501
        response.body = { status:"Failed to create new Todo", error }
    }
}
