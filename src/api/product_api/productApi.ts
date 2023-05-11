import axios from "axios";
import {Product} from "../../model/Product";

export async function productApi(): Promise<Product[]> {
let product1:any=undefined;
    axios.get("http://localhost:3000/products", {
        headers: {

        }
    })
        .then(async response => {
            console.log("respoinse")
            const product: Product[] = await JSON.parse(JSON.stringify(response.data));
            product1=product;
            return product;
        })

return  product1;

}