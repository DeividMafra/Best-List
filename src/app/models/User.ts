export interface User {
    id: string,
    first_Name: string,
    last_Name: string,
    email: string,
    phone?: string,
    address?: string,
    city_id?: string,
    date_creation: Date,
    date_of_birth?: Date,
    isPro: boolean,
    zipcode?: string
}