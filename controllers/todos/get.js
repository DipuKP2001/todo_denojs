import {FILE_PATH} from '../../config.js'

export default async ({response})=>{
    try {
        const data = await Deno.readFile(FILE_PATH)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
