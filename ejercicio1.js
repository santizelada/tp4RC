let car = {
    color: "black",
    brand: "tesla",
    model: "S",
    status: "on",

    turnOn: function (){
        this.status = "on"
        console.log("The car is on")
    },
    turnOff: function (){
        this.status = "off"
        console.log("The car is off")
    }
}

car.turnOn()
car.turnOff()

console.log(car)

