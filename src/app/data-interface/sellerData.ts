export interface signUpData{
    name:string,
    email:string,
    password:string
    confirmPassword:string
}

export interface signUpResponse{
    id:string,
    name:string,
    email:string,
    password:string
}

export interface productData{
    productName:string | null | undefined,
    description:string | null | undefined,
    price:string | null | undefined,
    category:string | null | undefined,
    imageURL:string | null | undefined
}
export interface productsData{
    id:string;
    productName:string | null | undefined,
    description:string | null | undefined,
    price:string | null | undefined,
    category:string | null | undefined,
    imageURL:string | null | undefined
}