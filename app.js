let getCars = () => {
  let createCar = (plateNumber) => {
    return {
      plateNumber: plateNumber,
      latitude: random(-90, 90),
      longitude: random(-180, 180)
    }
  }
  
  return [
    createCar("LV-0000"),
    createCar("LV-0001"),
    createCar("LV-0002"),
    createCar("LV-0003"),
    createCar("LV-0004"),
    createCar("LV-0005"),
    createCar("LV-0006"),
    createCar("LV-0007"),
    createCar("LV-0008"),
    createCar("LV-0009"),
    createCar("LV-0010"),
    createCar("LV-0011"),
    createCar("LV-0012"),
    createCar("LV-0013"),
    createCar("LV-0014"),
  ]
}

let random = (min, max) => Math.random() * (max - min) + min

// ----

 let user = {
  latitude:-50,
  longitude: 50
 }
let cars = getCars ()

let  car1 = cars [0]

let latitude = car1.latitude + user.latitude

let longitude = car1.longitude + user.longitude

latitude = latitude * latitude
longitude = longitude * longitude

let summa = latitude + longitude

for ( let i = 0; i < cars.length; i++) {
  let car = cars[i]
  let latitude = car.latitude + user.latitude
  let longitude = car.longitude + user.longitude
  latitude = latitude * latitude
  longitude = longitude * longitude
  let summa = latitude + longitude

  cars[i].distance = summa
}

cars = cars.sort(function(a, b){
  return a.distance > b.distance 
});

console.log(cars[0])

