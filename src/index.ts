const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are  ${age} years old, you are a ${gender}`
};

console.log(sayHi("김지환", 20, "male"))

export {};