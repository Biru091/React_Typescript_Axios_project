import axios from "axios";

const api=axios.create({
    baseURL:"https://dummyjson.com",

});

export async function Getdata(){
    try{
       const response=await api.get("/products");
           return response.data
    }
    catch {
        throw new Error("data not fetched");
    }
}
export async function GetSingleProduct(id: string) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}