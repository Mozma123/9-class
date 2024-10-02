// import React  from 'react'
// import { useForm } from 'react-hook-form'
// import  Yup from 'Yup'
// import {yupResolver } from '@hookform/resolvers/yup'
// import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
// function Form ()  {
//   // function handle(data) {
//   //   console.log(data)
//   // }
// // const {register , handleSubmit} = useForm()
// // const {register , handleSubmit} = useForm();


// // schema
// const schema = Yup.object().shape({
//   username : Yup.string().required('A valid username is required')
//   password: Yup.string().required('A valid password is required'),
// })
// }


// const { register, handleSubmit , formState : {errors} } = useForm({
//   resolver: yupResolver(schema)
// })
//   return (
//     <div>
//       <h1>Register Foam </h1>
//       <form  onSubmit={handleSubmit(handle)}>
//         <p style={{color={red}}}>{errors.username?.message}</p>
//       <input type="text"  placeholder='username' {...register('username')}/><br></br>
//       <input type="password"  placeholder='Password'  {...register('password')}/><br></br>
//       <input type="password"  placeholder='cpassword' {...register('cpassword')} /><br></br>
//       <input type="text"  placeholder='Firstname '  {...register('Firstname')}/><br></br>
//       <input type="text"  placeholder='Lastname' {...register('Lastname')} /><br></br>
//       <input type="email"  placeholder='email'  {...register('email')}/><br></br>
//       <input type="submit" />
//       </form>
//     </div>
 


// )
// export default Form



// extra
// const [username , setUsername] = useState('');
// const [username , setUsername] = useState('');

// function handleSubmit(e){
//   setUsername(e.target.value)
  // console.log(e.target.value)
// };



// extra
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
function Form() {
  // schema 
  const schema = yup.object().shape({
    username: yup.string().required('A valid username is required'),
    password: yup.string().required('A valid password is required'),
  })

  function handle(data) {
    console.log(data)
  }

  const { register, handleSubmit , formState : {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <div>
      <h1>Register form </h1>
      <form onSubmit={handleSubmit(handle)}>
        <input type="text" placeholder="username" {...register('username')} /><br></br>
        <p style={{color : 'red'}}>{errors.username?.message}</p>
        <input type="password" placeholder="password" {...register('password')} /><br></br>
        <input type="password" placeholder="cpassword" {...register('cpassword')} /><br></br>
        <input type="text" placeholder="firstname" {...register('firstname')} /><br></br>
        <input type="text" placeholder="lastname" {...register('lastname')} /><br></br>
        <input type="email" placeholder="email" {...register('email')} /><br></br>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form