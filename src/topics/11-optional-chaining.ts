export interface Passenger{
    name: string;
    children?: string[];
} 

const passenger1: Passenger = {
    name: 'Isai',
}


const passenger2: Passenger = {
    name: 'Joaquin',
    children: ['Luis', 'Marta'],
}

const returnChildrenNumber= (passenger: Passenger): number => {
    if(!passenger.children) return 0;
//const printChildren = (passenger: Passenger): number => {
   
    const howManyChildren = passenger.children!.length || 0;
    console.log(passenger.name, howManyChildren)

    return howManyChildren;
}

returnChildrenNumber(passenger2)
returnChildrenNumber(passenger1)