////////// Props With Functional Components //////////

// function Props(props)
// {
//     console.log(props);
//     return(
//         <div style={{backgroundColor: "skyblue", margin: 10}}>
//             <h1>Hello {props.Name} !</h1>
//             {/* <h3>Email: {props.Email}</h3>
//             <h6>Address: {props.Others.address}</h6> */}
//         </div>
//     )
// }

// export default Props;



////////// Props With Class Components //////////

import React from 'react'

export default class Class extends React.Component{

    render()
    {
        console.log(this.props);
        return(
            <div style={{backgroundColor: 'skyblue', margin: 10}}>
                <h1>Hello {this.props.name}</h1> 
                <h3>Email: {this.props.email}</h3> 
            </div>
        )
    }
}








// Props means Properties, which help us to pass data in a component.
// "Props" work just like "Parameters" in a Function.
// For understanding, we can call "Props" as "Parameters".
// We've passed the "Props" as props to access the data/Props.
// In Class Components, we've to use console.log in a function.