export interface IUserData {
    id: number | string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: {
        streetAddress: string,
        city: string,
        state: string,
        zip: string
    },
    description: string,
}
