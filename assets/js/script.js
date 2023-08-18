/*const names = ["Whinds", "Freaway", "Thayná", "teste"];

names.forEach((name) =>{
    console.log(`hi, ${name}!`);

})*/

/*const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers)

numbers.forEach((number, index)=>{
    if(number % 2 == 0){
        console.log(`O número ${number} está na posição ${index} `)
    }
})*/

/*const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca: "BMW",
        modelo: "BMW Z4",
    },
    {
        marca: "Fiat",
        modelo: "Palio",
    },
    {
        marca: "Audio",
        modelo: "A3",
    },
];
cars.forEach((car)=>{
     console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);

});
*/

class Car{
    constructor(brand, model){
        this.param1 = param1;
        this.param2 = param2;
    }

}

class CarsList {
    constructor(){
        this.cars =[];
    }
    AddCar(param){
        this.cars.push(param);
    }
}

const list = new CarsList();

function Creatcars(){
    const brand = document.getElementById("inp1").value;
    const model = document.getElementById("inp2").value;

    const hotwheel = new Car(brand, model);

    list.AddCar(hotwheel);

    list.cars.array.forEach(car => {
        console.log(`Marca: ${car.brand} - Modelo: ${car.model}`);
        
    });
}