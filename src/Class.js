////////// Basic Class Component //////////
// import React from 'react'   //import React,{Component} from 'react'

// class Class extends React.Component  //class Class extends Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>This is the Basic Class Component from (Class.js)</h1>
//             </div>
//         )
//     }
// }

// export default Class;

// In Class Component we have to use "render" whereas in Functional Component, there is no need of it.
// We can also export the component as above.
// In Class Component there are different ways to call Props, define State and the Structure difference.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Creating Multiple Components In The Same File //////////

import React from 'react'   //import React,{Component} from 'react'

class Class extends React.Component  //class Class extends Component
{
    render()
    {
        return(
            <div>
                <h1>This is the Class Component from (Class.js)</h1>

                <Second_Class />
             <Second_Functional /> 

            </div>
        )
    }
}

class Second_Class extends React.Component {
    render() {
        return(
            <div>
                <h2>This is the Second_Class Component from (Class.js)</h2>
            </div>
        )
    }
}


function Second_Functional(){
    return(
        <div>
            <h3>This is the Second_Functional Component from (Class.js)</h3>
        </div>
    )
}

export default Class;

// We can create mutiple components within the same file.
// We can also create functional component within a class component.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Component Within Another Component //////////
// import React from 'react'

// class Class extends React.Component
// {
//     class Child extends React.Component
//     {
//         render()
//         {
            
//             return(
//                 <div>
//                     <h1>This is the Child Component within (Class.js)</h1>
//                 </div>
//             )
//         }
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>This is the Parent Component within (Class.js)</h1>
//                 <Child />
//             </div>
//         );
//     }
// }
// export default Class;

// Research Needed!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////