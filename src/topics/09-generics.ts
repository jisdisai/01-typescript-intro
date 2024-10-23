

export function whastMyType<T>( argument: T): T{

    return argument;

}


const amIString = whastMyType<string>('Hola Mundo');
const amINumber= whastMyType<number>(100);
const amIArray= whastMyType<number[]>([1,2,3,4,5,6]);

console.log(amIString.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));