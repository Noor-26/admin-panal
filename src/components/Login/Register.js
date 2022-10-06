import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-[90vh]'>
    <div className=' flex items-center justify-center '>
    <div className='text-center'>
        <p className='text-[#030037] text-2xl font-semibold'>Welcome</p>
        <p className='text-[14px] text-[#686687] font-semibold'>Enter your Username and Passoword.</p>
        <form >
        <div className="form-control w-[400px] mb-2">
<label className="input-group input-group-md border">
<span className='bg-white text-[17px]'><FaRegUserCircle/></span>
<input type="text" placeholder="Username" className="input w-full focus:outline-none bg-white" />
</label>
</div>
        <div className="form-control mb-2">
<label className="input-group input-group-md border">
<span className='bg-white text-[17px]'><MdLockOutline/></span>
<input type="text" placeholder="Password" className="input w-full focus:outline-none bg-white" />
{/* AiOutlineEye */}
{/* <AiOutlineEyeInvisible/> */}
</label>
</div>
<button className='btn btn-primary w-full text-white capitalize tracking-[1px] ' type='submit'>Login </button>
<p className='mt-2 text-[14px] capitalize text-[#686687] font-bold'>Already have an account ? <Link to="/login" className='text-primary'>Login</Link></p>
        <p className='mt-2 text-[14px] capitalize text-[#686687] font-bold'>forget password?</p>
        </form>
    </div>
    </div>
    <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/admin-panel-5.appspot.com/o/images%2FFrame%20163.png?alt=media&token=ee922595-e0ab-45f5-911b-a22fdc3b2057" alt="" className='w-full'/>
    </div>
</div>
  )
}

export default Register