// import { useForm } from "react-hook-form"

// const LoginForm = () => {
//     const { register, handleSubmit } = useForm()

//     const onSubmit = (valueForm) => {
//         alert(JSON.stringify(valueForm))
//     } 
    
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label htmlFor='username'>Email: </label>
//                 <input type='email' id='username' {...register('userName')} />
//             </div>
//             <div>
//                 <label htmlFor='passwd'>Contraseña: </label>
//                 <input type='password' id='passwd' {...register('password')} />
//             </div>
//             <div>
//                 <label htmlFor='confirm'>Confirmar constraseña: </label>
//                 <input type='password' id='confirm' {...register('password')} />
//             </div>
//             <div>
//                 <button>Log in</button>
//             </div>

//         </form>

//     )
// }

// export default LoginForm