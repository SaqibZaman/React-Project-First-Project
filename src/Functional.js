////////// Basic Functioinal Component //////////

// import React from "react";

// function Functional()
// {
//     return(
//         <div>
//             <h1>This is the Basic Functional Component from (Functional.js)</h1>
//         </div>
//     );
// }
// export default Functional;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Creating Multiple Components In The Same File //////////

// import React from 'react'

// function Functional()
// {
//     return(
//         <div>
//             <h1>This is the Functional Component from (Functional.js)</h1>
//             <Second_Functional />
//             <Second_Class />
//         </div>
//     )
// }
// function Second_Functional()
// {
//     return(
//         <div>
//             <h2>This is the Second_Functional Component from (Functional.js)</h2>
//         </div>
//     )
// }

// class Second_Class extends React.Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h3>This is the Second_Class Component from (Functional.js) </h3>
//             </div>
//         )
//     }
// }


// export default Functional;

// If we want to add "more than one JSX elements" than we must have to enclose all the JSX elements in a div tag or opening 
// and closing tags.

// In JSX, we can perform any Mathmetical Operations within curly brackets "{ }".

// JSX combines HTML and JS and enable us to perform any HTML and JS operation in REACT.

// We can also use React without JSX but it'll be very complex.

// If we don't want to use "export default" than we have to use the "export" before the function and write the component 
// name within flower brackets while we import the component.

// We can also create multiple components in a same file.

// To create multiple components in a same file, we have to  create the second component below the first component
// before the export keyword. In that case we have to return/mention the component tag within the 
// first component. So we don't need to import or export the component separately. As shown in the "App.js" file.

// After creating a component, we have to use it as a HTML tag as "<componentName />".
// We can also re-use a component as much as we need.
// We can create a Child Component within a Parent Component but in that condition it will be little difficult to use the Child Component outside the Parent Component.
// In that condition first we have to access the Parent Component after the Child Component.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Component Within Another Component //////////
function Functional()
{
    function Child()
    {
        return(
            <div>
                <h1>This is the Child Component from (Functional.js)</h1>
            </div>
        );
    }
    return(
        <div>
            <h1>This is the Parent Component from (Functional.js)</h1>
            <Child />
        </div>
    );
}
export default Functional;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////