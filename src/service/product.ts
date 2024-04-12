import { axiosService } from "@/instance/instance";
import { IProductLite } from "@/interface/product";

export const getAllProduct = async() =>{
    try {
        const {data} = await axiosService.get('/products')
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const getOneProduct = async(id:string) =>{
    try {
        const {data} = await axiosService.get(`/products/${id}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}
export const addProduct = async(dataProduct:IProductLite) =>{
    try {
        const {data} = await axiosService.post('/products',dataProduct);
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteProduct = async(pid:string) =>{
    try {
        const {data} = await axiosService.delete(`/products/${pid}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const updateProduct = async(pid:string,dataProduct:IProductLite) =>{
    try {
        const {data} = await axiosService.put(`/products/${pid}`,dataProduct)
        return data
    } catch (error) {
        console.log(error);
        
    }
}