
// import logo from './logo.svg';
// import React from 'react';
// import './App.css';

// import React, {useState} from 'react'
// import React, {Component} from 'react'
// import Props from './Props'
// import React, {useState} from 'react'
// import Props from './Props'
// import Practice from './Practice';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import logo from './logo.svg';
import './App.css';
import Functional from './Functional'
import Class from './Class'
/////////////////////////// THE DEFAULT APP COMPONENT ////////////////////////////////////////////

function App(){
  return(
    <div className="App">

      <Functional />

      <Class />

    </div>
  );
}
export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////// Click Event & Functions /////////////////////////////////////
// function App() {
//   function apple()
//   {
//     alert("Function Called !")
//   }

//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   );
// } 

// export default App;


////////// Preventing Auto-Call Using Arrow Functions //////////

// function App() {
//   function apple()
//   {
//     alert("Function Called !")
//   }

//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <button onClick={()=>apple()}>Click Me</button>
//     </div>
//   );
// } 

// export default App;


////////// Problems While Updating/Changing Variables Value //////////

// function App() {
//   let data = 'Saqib Zaman'
//   function apple()
//   {
//     data = "ZamZam"
//     alert(data)
//   }

//   return (
//     <div className="App">
//       <h1>{data} !</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   );
// } 

// export default App;

////////// State In Functional Component //////////
// function App() {
//   const [data,setData] = useState("Saqib")
//   function updateData()
//   {
//     setData("Zaman")
//   }
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// } 

// export default App;   

////////// To Concurrently/Continuously Update the data  //////////
// function App() {
//   const [data,setData] = useState(0)
//   function updateData()
//   {
//     setData(data+1)
//   }
//   console.warn("____________")
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// } 

// export default App;


////////// State In Class Component //////////

// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state = {
//       data: "Zaman"
//     }
//   }
//   apple()
//   {
//     this.setState({data: "Saqib"})
//   }
//   render()
//   {
//     return (
//       <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>Update Data</button>
//       </div>
//     );
//   }
// }

// export default App;


////////// To Concurrently/Continuously Update the data  //////////

// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state = {
//       data: 0
//     }
//   }
//   apple()
//   {
//     this.setState({data: this.state.data+1})
//   }
//   render()
//   {
//     return (
//       <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>Update Data</button>
//       </div>
//     );
//   }
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Props In Functional Components //////////

// function App() {
//   const [Name,setName] = useState("Ali")
//   return (
//     <div className="App">
//       <h1>Props In Functional Components</h1>

//       <Props Name={Name} />
//       <button onClick={()=>{setName("Haider")}}>Update Button</button>


//       {/* <Props Name={"Ali"} Email="Ali123@gmail.com" Others={{address: "Lahore", mobile: "222"}}  />
//       <Props Name={"Sikander"} Email="Sikander789@gmail.com" Others={{address: "Islamabad", mobile: "333"}} /> */}

//     </div>
//   );
// }

// export default App;









// function App()
// {
//   return(
//     <div>
//       <button>Click Me to Update</button>
//       <Practice />
//     </div>
//   );
// }

// export default App;









////////// Props In Class Components //////////

// import React from 'react'

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       name: "Ali"
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//       <h1>Props !</h1>
  
//       <Props name={this.state.name} email="Ali@test.com" />
//       <button onClick={()=>this.setState({name:"Alian"})}>Update Prop Value</button>
//     </div>
//     );
//   }
// }

// export default App;


// To Pass the Data in the Component, we have to pass the "Props" in the Component-Tag as above.
// To access the data in the "Student.js file", we've to pass the props just like parameters as shown in the file.
// We can also pass multiple Props as above. 
// We can pass multiple Props/data Separately.
// We can also pass multiple Props in a single Object as above.
// To Change the Prop Value, we have to define a State in an Arrow function and to define a State we've to import the "useState hook" as above.
// We use Props to transfer from one component to the other.
// We can only create/add/remove/change the Props from the Parent/Sending Component (App.js).
// To change/update the Prop Value, we've to use the Prop name in the State.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// State is basically an Object which stores data like Variables.

// State is a Data Container like Variables where we can store information (Name, Email, Array, Objects).

// State can be used with both Functional and Class Components.

// In React, we use State instead of Variables bcoz the Compontent doesn't update/re-render when we change the Variable value. 

// React Only Updates the data when we change the "State" & "Props" bcoz React doesn't understand Variables.

// In Functional Components, we've to import react or we can also import "useState hook" as above to define the State.

// useState hook allows us to maintain or update the State. 

// We can use state by taking a variable and destructuring the peramaters of the useState.

// We've to give a by-default/initial name to the useState as above.

// Within the Square Brackets "[]" we have to create two variables.

// The "data" variable contains the data and the "useState" is used to update the data.

// This is how we use State in React.

// In Class Components, we have to import React as (import React,{component} from 'react').

// In Class Component we don't have to import the "useState hook" to define the State.

// To define State, we've to create a Constructor as above.

// We've to write a JS-Functionality "super()" to call the Parent Constructor also.

// In "this.state", the "state" is used as an object.

// In Class Component, whenever we use "this" keyword, we must have to use the Constructor.

// We must call the "super" constructor before accessing "this".

// In Class Component, we must have to use Arrow Function, whenever we use a function.

// In Class Components, we set the state as ( this.setState({data: "Saqib"}) ).

// We can use state outside the component BUT it is un-authentic. 

// State is Public and not Private.





/* <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */