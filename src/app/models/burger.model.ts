export interface Burger {
    _id: string
    name: string
    price: number
    about: string
    type:string
}

export interface Drink {
    _id: string
    name: string
    price: number
    about: string
    type:string
}

export interface BurgerFilter {
    term: string
}
export interface DrinkFilter {
    term: string
}
