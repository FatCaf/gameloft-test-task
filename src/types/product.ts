export type Product = {
    id: number
    title: string
    price: number
    quantity?: number
    description: string
    img: string
}

export type ProductWithoutDescription = Omit<Product, 'description'>
