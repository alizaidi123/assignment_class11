import React from 'react'
import ChildComponents from './ChildComponents'

const Students = () => {
    let Stud1Name = "Ali"
    let Stud2Name = "Hassan"
    let Stud3Name = "Hussain"
    let StudAge1 = 27
    let StudAge2 = 22
    let StudAge3 = 23
    let Favcol1 = "Blue"
    let Favcol2 = "Green"
    let Favcol3 = "Red"

  return (
    <div>
      <ChildComponents name ={Stud1Name}
      age = {StudAge1}
      col = {Favcol1} />

    <ChildComponents name ={Stud2Name}
      age = {StudAge2}
      col = {Favcol2} />
      
      <ChildComponents name ={Stud3Name}
      age = {StudAge3}
      col = {Favcol3} />
    </div>
  )
}

export default Students
