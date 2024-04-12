export interface Iproduct {
    id?:string,
    name:string,
    price:number,
    desc:string,
}
export type IProductLite = Pick<Iproduct,'name'|'price'|'desc'>