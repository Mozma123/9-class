// import React from 'react';

// const Home (props)  {
//   return (
//     <div>
//       <h1>Home {props.username}</h1>
//       <About username={props.username}/>
//     </div>
//   );
// }

// export default Home;


// import React, { useContext } from 'react';
// // import About from './about';
// import { Appcontext } from '../App';
 // Assuming About component is in the same directory

// const Home = () => {
//   return (
//     <div>
//       {/* <h1>Home {props.username}</h1> */}
//       <h1>Home {username}</h1>
//       {/* <About username={props.username}  />
//        */}
//        {/* <About setUsername={props.username}/> */}
//     </div>
//   );
// }

// 2
// const Home()  {
//     const {username} = useContext(Appcontext)
//   return (
//     <div>
// //       {/* <h1>Home {props.username}</h1> */}
//       <h1>Home {username}</h1>
// //       {/* <About username={props.username}  />
// //        */}
// //        {/* <About setUsername={props.username}/> */}
//     </div>
//   );
// }


// export default Home;




// chatgprt
// import React, { useContext } from 'react';
// import { Appcontext } from './Appcontext'; 
// Assuming Appcontext is defined and exported in Appcontext.js
// import About from './about';
// const Home = () => {
//   const { username , setUsername} = useContext(Appcontext);
// //   extra2
// function handleFun(e) {
//     setUsername(e.target.value)
// }

//   return (
//     <div>
//         <input type="text"  onChange={setUsername}/>
//       <h1>Home {username}</h1>
//       {/* Uncomment and use the below line if you need to pass props to About component */}
//       {/* <About username={username} /> */}
//       {/* <About setUsername={props.setUsername} /> */}
//     </div>
//   );
// }


// return (
//     <div>
//         <input type="text"  onChange={handleFun}/>
//       <h1>Home {username}</h1>
//       {/* Uncomment and use the below line if you need to pass props to About component */}
//       {/* <About username={username} /> */}
//       {/* <About setUsername={props.setUsername} /> */}
//     </div>
//   );
// }

// export default Home;





// 3
import React , {useContext} from 'react'
import { Store} from '../App'
import { Link } from 'react-router-dom'
function Home() {
  const {username , setUsername } = useContext(Store)
  function handleFun(e){
    setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleFun} />
      <h1>Home {username}</h1>
      
    </div>
  )
}

export default Home

