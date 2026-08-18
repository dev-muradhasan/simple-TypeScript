type User0 = {
    name: string;
    age: number
}
type Role = {
    role: 'admin' | 'user';
}
type UserWithRole = User0 & Role;
const user: UserWithRole = {
    name: 'mr. x',
    age: 30,
    role: 'admin'
}

const product = {
    brand: 'Toyota',
    modeYear: '1997'
}
const myName = user['name']
const getPropertyFromObj=(obj:)=>{
    return
}
const  getPropertyFromObj=>(obj: {
    name: string;
    age: number;
    role: string;
})=>{
    return obj['name']
}


interface IUser {
    name: string;
    age: number
}
interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}
const user1: IUserWithRole = {
    name: 'mr. x',
    age: 30,
    role: 'admin'
}


type IsBoolean = boolean
const isAdmin: IsBoolean = false;
const isStudent: IsBoolean = true;

type Friends = string[];
// const friends: Friends = ['Mim', 'Fahim', 'Tamim']

interface IFriends {
    [index: number]: string
}
const friends: IFriends = ['Mim', 'Fahim', 'Tamim']


type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => {
    return num1 + num2
}


// type guard & type assertion

let anything: any;

anything = 'Talha';
anything = false;
anything = 22;

// (anything as number).


const calculateDeliveryFee = (distance: string | number | null) => {
    if (typeof distance === 'number') {
        return distance * 20;
    } else if (typeof distance === 'string') {
        const [value] = distance.split(" ");
        return Number(value) * 20
    }
}

// const result1 = calculateDeliveryFee(5);
const result2 = calculateDeliveryFee('5 km');
// const result2 = calculateDeliveryFee(null);


// const friends1: string[] = ['Mim', 'Fahim', 'Tamim'];
// const rollNumbers: number[] = [1,2,3]
// const isEligible: boolean[] = [true, false, true]

// generic => generalize kore fela

type GenArray<T> = Array<T>

const friends1: GenArray<string> = ['Mim', 'Fahim', 'Tamim'];
const rollNumbers: GenArray<number> = [1, 2, 3]
const isEligible: GenArray<boolean> = [true, false, true]


// type NCoordinates = [number, number]
// type SCoordinates = [string, string]
type Coordinates<X, Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [10, 20]
const coordinates: Coordinates<string, string> = ['10', '20']



const addCustomerToOrder = <T extends {id:number;name:string}>(customersInfo: T) => {
    return {
        order: 'pending',
        ...customersInfo
    }
}
type CommonCustomerProperties = {
    id: number;
    name: string;
    hasCoupon: boolean;
}
const result = addCustomerToOrder<CommonCustomerProperties>({
    id: 1,
    name: 'Riyad',
    hasCoupon: true
})
console.log(result)
const result1 = addCustomerToOrder<CommonCustomerProperties & { moneyBag: number}>({
    id: 1,
    name: 'Riyad',
    hasCoupon: true,
    moneyBag: 20000

})
console.log(result1)

// const result3 = addCustomerToOrder<{emni: string} & {emni: number}>
 const result3 = addCustomerToOrder<{id: number} & {name: string}>

 