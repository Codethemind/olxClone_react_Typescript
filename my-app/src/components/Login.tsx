 import { signInWithPopup } from 'firebase/auth'
import gitar from '../assets/gitat.png.webp'
import { auth, googleProvider } from '../firebase/setup'

type popupProp ={
    setLoginPop:any

}

const Login = (props:popupProp) => {

const googleSignin =async ()=>{
 try {
    await signInWithPopup(auth,googleProvider)
 } catch (error) {
    console.error(error)
 }
}
  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-zinc-900/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <h1 onClick={()=>{props?.setLoginPop(false)}} className=' cursor-pointer font-semibold text-3xl'>X</h1>
          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
              <img src={gitar} alt=""  className='w-20 h-20 ml-32'/>
                <p className="text-base  font-medium mt-5 text-center">Help us to become one of safest places <br/> to buy and sell</p>
              <div className='flex border-2 border-black p-2 round-md mt-12'>
              <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" className="_2oC8g" fill-rule="evenodd"><path className="rui-w4DG7 _3Z_D3" d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>       
                       <h1 className='font-semibold ml-3'>Continue with phone</h1>
              </div>
              <div onClick={googleSignin} className='flex border border-gray-300 p-2 round-md mt-12'>
              <svg width="22px" height="22px" viewBox="0 0 48 48" data-aut-id="icon" className="_2oC8g" fill-rule="evenodd">
  <path className="rui-w4DG7 _3Z_D3" fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
  <path className="rui-w4DG7 _3Z_D3" fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
  <path className="rui-w4DG7 _3Z_D3" fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
  <path className="rui-w4DG7 _3Z_D3" fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
</svg>
<h1 className='font-semibold ml-12'>Continue with google</h1> 
             </div>
             <h1 className='text-center mt-4  cursor-pointer '>OR</h1>
             <h1 className='text-center mt-4 underline cursor-pointer '>Login with Email</h1>
             <h1 className='text-center mt-28 text-xs '>All your personal details are safe with us</h1>
             <h1 className='text-center mt-4 text-xs '>If you continue, you are accepting <span className='text-blue-600'>OLX Terms and <br/>Conditions and Privacy Policy</span> </h1>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
