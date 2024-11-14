import cover from '../../../../public/assets/cover.jpg'
import googlelogo from '../../../../public/assets/googlelogo.png'
import {Link} from "@inertiajs/react";

const Login = () => {
    return (
        <div className="w-full min-h-screen flex items-start font-poppins">
            
            <div className='relative w-1/2 h-full flex flex-col '>
                <img src={cover} className='object-none w-full h-dvh flex'/>
            </div>

            <div className="w-1/2 h-full flex flex-col p-20 justify-between">
                <h1 className="text-4xl font-bold px-8">BitesWise</h1>
                <p className='text-xl font-medium mt-2 px-8'>Sign In to BitesWise</p>
                <form className="w-full flex flex-col px-8 mt-5">
                    <input type="email" placeholder="Email" className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"/>
                    <input type="password" placeholder="Password" className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"/>
                </form>

                <div className="w-full flex flex-col px-8 pt-4">
                    <Link href='/beranda'>
                        <button className="w-full bg-emerald-500 py-4 my-1 text-white rounded-md text-center font-medium flex items-center justify-center hover:bg-emerald-700">
                            Sign In
                        </button>
                    </Link>
                        
                    <Link href='/register'>
                        <button className="w-full bg-white py-4 my-1 text-blue-600 font-medium border border-blue-600 rounded-md text-center flex items-center justify-center hover:bg-blue-600 hover:text-white">
                            Register
                        </button>
                    </Link>
                    
                    <p className="text-blue-600 cursor-pointer text-right text-sm mt-2 hover:font-medium">
                        Forgot Password?
                    </p>
                </div>

                <div className='w-full flex items-center justify-center relative p-8'>
                    <div className='w-full h-[1.5px] bg-black'></div>
                    <p className='text-base absolute text-black-80 bg-white px-2 font-medium'>or</p>
                </div>

                <div className='w-full flex felx-col px-8'>
                <button className='w-full bg-white py-4 my-2 text-black font-medium border border-blue-600 rounded-md text-center flex items-center justify-center hover:bg-blue-600 hover:text-white'>
                    <img src={googlelogo} className='h-8 mr-1' />
                    Sign In with Google
                </button>
                </div>

            </div>
        </div>
    )
}

export default Login;