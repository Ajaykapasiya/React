import React from "react";
import Person from "./components/Person";
import Products from "./components/Products";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import Events from "./components/Events";
import Counter from "./components/Counter";
import Map from "./components/Map";
import Filter from "./components/Filter";

const App = () => {


  return (
    <>
      <div>
        {/* <Person/> */}
        {/* <Products name="Proche 911"
          brand="Proche"
          price={20000000} /> */}

        {/* <Products name="Alto"
          brand="Maruti"
          price={200000} /> */}
      </div>
      <div>
            {/* <Person2 name="Rick" age="33" salary={60000} /> */}
      </div>
      <div>
            {/* <Person3 name = "Sam" age = {25}
            pancard ={true} /> */}
      </div>
      <div>
            {/* <Laptop brand = "Apple" model = "M1"  price= {100000}/>
            <Laptop brand = "Dell" model = "qwer"  price= {50000}/>
            <Laptop brand = "Hp" model = "dfvw"  price= {70000}/> */}
      </div>
      <div>
        {/* <Events/> */}
      </div>
      <div>
      {/* <Counter/> */}
      </div>
      <div>
        {/* <Map/> */}
      </div>
      <div>
        {/* <Filter/> */}
      </div>

      <div>
        Hello
      </div>
    </>
  );
}

export default App;
