// import logo from './logo.svg';
// import './App.css';
// // import { useEffect } from 'react';
// import React, {useEffect , useState} from 'react';

// function App() {
//   async function datafetch() {
//   try{
//   const fectchData =fetch('https://fakestoreapi.com/products')
//   const data =  await   response.json()
//   console.log(data)
//   }
//   catch(err) {
//     alert(err)
//   }
// }

// // datafetch()
// useEffect(() => {
//   datafetch()
// }, []);
// console.log(data)
//   return (
//    <>
//    </>
//   );
// }
// export default App;






// new
// last week class 9
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import logo from './logo.svg';

// function App() {
//   const [data, setData] = useState([]); // State to store the fetched data
//   const datafetch = async () => { // Defined the datafetch function correctly
//     try {
//       const response = await fetch('https://api.escuelajs.co/api/v1/users');
//       const data = await response.json();
//       setData(data); // Update the state with the fetched data
//     } catch (err) {
//       alert(err);
//     }
//   };

//   useEffect(() => {
//     datafetch();
//   }, []);

//   return (
//     <>
//       {data.map((user, index) => ( // Corrected the data mapping
//         <div key={index}>
//           <h1>{user.name}</h1> {/* Changed 'title' to 'name' */}
//           <h2>{user.email}</h2> {/* Changed 'description' to 'email' */}
//           <img src={user.avatar} alt={user.name} /> {/* Changed 'img' to 'avatar' and added alt attribute */}
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;

// try and cach use for error handling mostly
// async use mostly
// components main usesate is use mostly
// useEffect use with handling of apis 
// for api ko fetch kyliye fecth method ko use krtye hyain
// api ko use kr kye fectch kr kye .json format main convert krna hye data milnye kyliye
// . ka mtlab object main sye kisi bhi cheez ko nikla yani fecth krna
// sari jo cheezain hye wo object main hoti hye 
// try and catch use in apis
// url ko apis kehtye hyain
// client ki server kye sath comunication kyliye apis use krtye hyain takye client kye sath link hosakhye
// apis ki four methods
// 1.get api jsb data milta hye tab get data 2. post api or create  jab detye hyain 3. put  
// 4.patch use for data update
// curet opreater 
// The total name or acronym that represents the four main methods in RESTful APIs (GET, POST, PUT, DELETE) is often referred to as CRUD:

// Create: Corresponds to POST
// Read: Corresponds to GET
// Update: Corresponds to PUT
// Delete: Corresponds to DELETE
// So, these methods collectively represent CRUD operations, which are fundamental to interacting with resources in web development.
  // delete const put methods




  // class no 10 of react 
  // 7sep-24
  // hooks three types
  // usestate
  // useeffect
  // usecontext
  // today
  // import React , {useState} from 'react'
  // import Home from "./components/home"
  // import About from './components/about';
  // import Products from './components/products';
  // import {BrowserRouter , Routes, Route } from 'react-router-dom'
  // function  App() {
  //   const [username ,setUsername] = useState('Moazma')
  //   return (
  //     <>
  //     <BrowserRouter>
  //     <Routes>
  //       <Route  path='/' element={<Home username={username} />} />
  //     {/* <Route path='/about' element={<About/>}/>
  //     <Route path='/products' element={<Products/>}/> */}


  //     </Routes>
  //     </BrowserRouter>
    
  //     </>
  //   );
  // }

  // extra
//     import React , {useState , createContext} from 'react'
//   import Home from "./components/home"
//   import About from './components/about';
//   // import Products from './components/products';
//   import {BrowserRouter , Routes, Route } from 'react-router-dom'



//  export const Appcontext = createContext()


//   function  App() {
//     const [username ,setUsername] = useState('Moazma')
//     return (
//       <>
//       <Appcontext.Provider value={{username , setUsername}}>
//       <BrowserRouter>
//       <Routes>
//         <Route  path='/' element={<Home  />}/>
//         <Route path='/about' element={<About/>}/>
//       </Routes>
//       </BrowserRouter>
//       </Appcontext.Provider>

//       </>
//     );
//   }

  
//   export default App;






// 3
// useeffect use
// import React, { useState, createContext ,useEffect } from "react"
// import Home from './components/home'
// import About from './components/about'
// import Form from "./components/form"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// export const Store= createContext()

// function App() {
//   const [username, setUsername] = useState('Moazma')
//   // ()=> {}arrow function jaha pr bnatye wahi pr use hota hye 
// //  data ko update krnye kyliye useeffect ko use krtye hyin
// // takey kuch bhi new things ko add kr sakhye
// // 5,6 cheezo ko use krnye kyliye usecontext use krtye hain
// // app ko store bnaye kyliye usecontext ko use krtye hyan 

// useEffect(()=>{
// console.log('hello')
//   },[username]); //[] dependies btati hye kye khali bracket tab chalye gi jab pehly bar component work krye ka

//   return (
//     <>
//       <Store.Provider value={{username , setUsername}}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/form" element={<Form/>}/>
//           </Routes>
//         </BrowserRouter>
//       </Store.Provider>
//     </>
//   );
// }
// export default App;





// useeffect is liye use hots jab hum components ko rerender krtye hayn




// // useState or useEffect  difference
// import React from 'react';
// import Input from './components/ToDoList copy'
//  // Adjust the path if Input.jsx is in a subfolder

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Main App</h1> */}
//       <Input />
//     </div>
//   );
// }

// export default App;

