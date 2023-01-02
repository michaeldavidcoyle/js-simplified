const me = {
    name: 'Michael',
    age: 48
}

const sarah = {
    name: 'Sarah',
    age: 49
}

export default function printUser(user) {
    console.log(`Name: ${user.name}. Age: ${user.age}`);
}

export { me, sarah }