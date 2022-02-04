interface PersonType {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"김지환",
    age:20,
    gender:"male",

}
const sayHi = (person:PersonType):string =>{
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person))

export {};