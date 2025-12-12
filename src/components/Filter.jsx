import React from 'react'

const Filter = () => {

    const products = [
        { id: 1, title: "Iphone", category: "Mobile", price: 90000 },
        { id: 2, title: "Macbook", category: "Laptop", price: 100000},
        { id: 3, title: "I-pad", category: "Tablet", price: 150000 },
        { id: 4, title: "I-watch", category: "Watch", price: 40000 },
        { id: 5, title: "Sony-1", category: "Camera", price: 130000 },
    ]

    const filteredData = products.filter((data) => data.category == "Mobile")
    console.log(filteredData);
    
    return (
        <div>
            {products.map((data) => <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.price}</p>
            </div>)}
        </div>
    )
}

export default Filter
