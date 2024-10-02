// import React, { useState } from 'react';

// function About(props) {
//   const [text, setText] = useState('');

//   function handleInput(e) {
//     setText(e.target.value); 
//   }
//   function handleClick () {
//     let  data = props.setUsername
//     data= 'new'
//     console.log(data)
// 
//   }

//   return (
//     <div>
//       <p>{text}</p>
//       <h1>About {props.username}</h1>
//       <input type="text" onChange={handleInput} />
//       <button onClick={handleClick}>Change the username</button>
//       <product username={props.username}/>
//     </div>
//   );
// }

// return (
//     <div>
//       {/* <p>{text}</p> */}
//       <h1>Home {username}</h1>
//       <input type="text" onChange={handleFun} />
//       {/* <input type="text" onChange={handleInput} /> */}
//       {/* <button onClick={handleClick}>Change the username</button> */}
//       {/* <product username={props.username}/> */}
//     </div>
//   );
// }
// export default About;



// 3
import React , {useContext} from 'react'
import { Store } from '../App'

function About() {
  const {username} = useContext(Store)
 
  return (
    <div>
      <h1>About {username}</h1>
    </div>
  )
}

export default About;
