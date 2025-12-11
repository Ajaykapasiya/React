import React from 'react'


const Person = () => {

    const person = {
        name: "Sam",
        age: 45,
        email: "sam@gmail.com",
        pincode: 432156,
    }
    return (
    <div>

    {/* <h1>Hiii</h1>
    <h2>Helloo</h2>
    <h3>Namaste</h3>
    <h1>{name}</h1>
    <h2>Age = {age}</h2> */}

            <h1> Name = {person.name}</h1>
            <h1>Age = {person.age}</h1>
            <h1>Email = {person.email}</h1>
            <h1>Pincode = {person.pincode}</h1>


        </div>

    )
}


export default Person
