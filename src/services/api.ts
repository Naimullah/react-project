import axios from "axios";

const client=axios.create({
    baseURL: 'http://localhost:3000'
})      
export async function getProduct(){
    const response=await client.get('/products')
    return response.data
    // return client.get('/products')

}