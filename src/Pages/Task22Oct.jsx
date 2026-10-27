import React, { useState } from "react";
// {
//   /* Q1. Login Status (5 Marks) Create a React component that displays
//         "Welcome User!" when the user is logged in and "Please Login" when the
//         user is logged out. Use conditional rendering. */
// }

const Task22Oct = () => {
//   const [islogin, setIsLogin] = useState(true);
//   return <div>
//     {islogin ? (
//         <div>
//             <h1>Login Status</h1>
//             <h3>Welcome User!</h3>
//             <button onClick={()=>setIsLogin(!islogin)}>Logout</button>
//         </div> ) : (
//             <div>
//                 <h1>Login Status</h1>
//                 <h3>Please Login</h3>
//                 <button onClick={()=>setIsLogin(!islogin)}>Login</button>
//             </div>
//         )
//     }
//   </div>;
// };

// export default Task22Oct;

// import React, { useState } from "react";
// // // Q2. Show and Hide Message (5 Marks)
// // // Create a button that toggles a message between visible and hidden. Display "Hello, React!" when the message is visible.

// const Task22Oct = () => {
//   const [visible, setVisible] = useState(true);
//   return (
//     <div>
//       {visible ? (
//         <div>
//           <h1>Show</h1>
//           <h3>Hello, React!</h3>
//           <button onClick={()=>setVisible(!visible)}>Hide</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Hidden</h1>
//           <button onClick={()=>setVisible(!visible)}>Show</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Task22Oct;

// Q3. Pass or Fail (5 Marks)
// Create a React component that stores a student's marks. If marks are 40 or above, display "Pass"; otherwise, display "Fail".
// import React, { useState } from 'react'

// const Task22Oct = () => {
//     const [marks,setMarks] = useState(true)
//   return (
//     <div>
//         <label>Enter Your Marks</label>
//         <br />
//         <input type="number" value={marks} onChange={(e) => setMarks(Number(e.target.value))} />
//         <br /><br />
//         <button onClick={()=>setMarks(!marks)}>Reset</button>
//         <h1>{marks >= 40  ? "Pass" : "Fail"}</h1>

//     </div>
//   )
// }

// export default Task22Oct

// Q4. Loading Status (5 Marks)
// Create a component that displays "Loading..." initially. After clicking a button, change the status to "Data Loaded Successfully!" using conditional rendering.
// import React, { useState } from 'react'

// const Task22Oct = () => {
//     const[loading,setLoading] = useState(true)
//   return (
//     <div>
//       {loading ? (<div>
//         <h1>Loading...</h1>
//       </div>) : (<div>
//         <h1>Data Loaded Successfully!</h1>
//       </div>)}
//       <button onClick={()=>setLoading(!loading)}>Change</button>
//     </div>
//   )
// }

// export default Task22Oct

// Part B: List Rendering (20 Marks)
// Q5. Display Student Names (5 Marks)
// Create an array containing five student names. Use the map() method to display all names in an unordered list.
// import React from "react";

// const Task22Oct = () => {
//   const students = ["Adesh", "Ishan", "Karan", "Jasman", "Rohit"];
//   return (
//     <div>
//       {students.map((s) => (
//         <ul>
//             <li>{s}</li></ul>
//       ))}
//     </div>
//   );
// };

// export default Task22Oct;

// Q6. Product List (5 Marks)
// Create an array of five products. Each product should contain an ID, name, and price. Use map() to display the product name and price.
// import React from "react";

// const Task22Oct = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Smartphone",
//       description: "High-end smartphone with advanced features.",
//       price: 599.99,
//     },
//     {
//       id: 2,
//       name: "Laptop",
//       description: "Powerful laptop for work and gaming.",
//       price: 999.99,
//     },
//     {
//       id: 3,
//       name: "Wireless Headphones",
//       description: "Premium wireless headphones with noise-cancellation.",
//       price: 149.99,
//     },
//     {
//       id: 4,
//       name: "Smartwatch",
//       description: "Feature-packed smartwatch with fitness tracking.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       name: "Professional DSLR Camera",
//       description: "High-quality DSLR camera for photography enthusiasts.",
//       price: 499.99,
//     },
//   ];
//   return (
//     <div>
//       {products.map((p) => (
//         <div style={{height : 250, width : 170, backgroundColor : "grey", fontSize : 12}}>
//           <h2>{p.id}</h2>
//           <h2>{p.name}</h2>
//           <h2>{p.description}</h2>
//           <h2>{p.price}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Task22Oct;

// Q7. Employee List (5 Marks)
// Create an array of at least five employees, each with an ID, name, and department. Display the employee details using map() and provide a unique key for each item.

// import React from 'react'

// const Task22Oct = () => {
//   const employees = [ {
//       "id": 1,
//       "name": "Airi Satou",
//       "department" : "CSE",
//   }, {
//       "id": 2,
//       "name": "Garrett Winters",
//       "department" : "Teaching",
//   }, {
//       "id": 3,
//       "name": "Ashton Cox",
//       "department" : "Backend",
//   }, {
//       "id": 4,
//       "name": "Cedric Kelly",
//       "department" : "Frontend",
//   },
//     {
//       "id": 5,
//       "name": "Tiger Nixon",
//       "department" : "IT",
//   }]
//   return (
//     <div>
//       {employees.map((e) => (
//         <div>
//           <h2>{e.id}</h2>
//           <h2>{e.name}</h2>
//           <h2>{e.department}</h2>
//     </div>
//       ))}
//     </div>
//   )
// }

// export default Task22Oct

// Q8. Conditional List Rendering (5 Marks)
// Create an array of student names and display them using map().
// - If the array is empty, display "No students available".
// - If the array contains students, display their names in a list.

// import React from "react";

// const Task22Oct = () => {
//   const students = ["Adesh", "Ishan", "Karan", "Jasman", "Rohit"];
//   return (
//     <div>
//       {students.length <= 0
//         ? "No students available"
//         : (students.map((s) => (
//             <ul>
//               <li>{s}</li>
//             </ul>
//         )
//           ))}
//     </div>
//   );
};

export default Task22Oct;
