const sum = (num1: number, num2: number) => {
    return num1 + num2;
}
// console.log(sum(5, '5'))


// primitive
const studentName: string = 'Murad Hasan'  // string type
const age: number = 21  // number type
const isActive: boolean = true;
const coupon: null = null
const deliveryAddress: undefined = undefined


// non primitive

// array
// object
// function


// array
const foodName: string[] = ['Milk', 'Vat & Mangso',]

// tuple , fixed length array & fixed data type
const studentLocation: [number, number] = [22.3560, 91224]
const studentWithRoll:[string, number] = ['Nobel', 3]

foodName.push(200)
studentLocation.push('bogura')


// object data type

type User = { id: number, age: number, name: string, organization?: 'Programming Hero', address?: {city: string}}
// interface User { id: number, age: number, name: string, organization ?: 'Programming Hero', address ?: string, }

const user1 : User= {
    id: 444,
    age: 20,
    name: 'Mr. Jhankar Mahbub',
    organization: 'Programming Hero',
    // address: 'Dhaka'
}

user1.organization = "PHero";
console.log(user1)

const user2: User= {
    id: 444,
    age: 20,
    name: 'Spider Man',
}


type Food = {
    name: string,
    price: number
}
const food: Food = {
    name: 'Pizza',
    price: 500
}

const getFoodPrice = (product: Food)=>{
    return product.price;
}

const user: User = {
    id: 444,
    age: 20,
    name: 'Spider Man',
    address: {
        city: 'dhaka',
    }
}
// user.address?.city

// const userName = user.name;
// const userAge = user.name;
const {name:userName, age:userAge} = user;

const updateUser = {
    ...user, // spreed operator
    age: 21
}
console.log(updateUser)


const arr: number[] = [10,20,30];
const total = (...numbers: number[])=>{  // ... rest operator
    const result = numbers.reduce((total,number)=> total+number,0)
    return result
}
console.log(total(10, 20, 30, 40))



// union types
// intersection

let userId: string | number;
userId= 34

type PaymentMethod = 'bkash' | 'nagad' | 'bank'
const payment = (paymentGateWay: PaymentMethod)=>{
    console.log(`paying using ${paymentGateWay}`)
}
payment('nagad')


type Profile = {
    name: string,
    profilePicture?: undefined,
    nationalIdNumber: number;
}

type Employee = {
    employeeId : number,
    role: 'admin' | 'user'
}

const person = {
    name: "limon",
    nationalIdNumber: 5555566666,
    employeeId: 151,
    role: 'admin',
}



// same same but different => ? & ?? 

// ternary operator
const ashikErBoyos = 21;
const msg: string = ashikErBoyos >= 21 ? 'biye korte parbe': 'biye korte parbe na';
console.log(msg)

// Nullish Coalescing Operator
const userName1: string | null  = null
const displayName = userName1 ?? "Guest"; // it's only check the value of the left side is null or undefined
console.log(displayName)