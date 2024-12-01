import React from 'react'

const Car = () => {
    const Car = [
        {carModel: "Cultus", carMake:2019, carColor:"Silver",carPrice:"22 lac"},
        {carModel:"Alto", carMake:2018, carColor:"Gray",carPrice:"20 lac"},
        {carModel:"Mira", carMake:2014, carColor:"Lime",carPrice:"18 lac"},
        {carModel:"Dayz", carMake:2014, carColor:"Blue",carPrice:"16 lac"}
    ]
  return (
    <div>
        {Car.map((car) => { 
            return (
                <div>
                    <h1 className='text-3xl text-red-300'>
                        {car.carModel}
                    </h1>
                    <p>{car.carMake}</p>
                    <p>{car.carColor}</p>
                    <p>{car.carPrice}</p>
                    
                </div>
            )
        })}
      
    </div>
  )
}

export default Car
