import { Link } from 'react-router-dom';
import google from '../../assets/icons/google.png'
import loginSvg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthCotext } from '../../Providers/Authprovider';


const Login = () => {
  const {signIn}=useContext(AuthCotext)
  const handleSignIn=(event)=>{
    event.preventDefault;
    const form =event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.log(error))
  }
    return (
        <div>
           
<section className="flex flex-col md:flex-row h-screen items-center lg:my-10 my-10 mb-96">

  <div className="flex justify-center w-full md:w-1/2 xl:w-2/3 ">
    <img src={loginSvg} alt="" className="w-1/2 h-1/2 object-cover"/>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6  xl:px-12
        flex items-center justify-center">

    <div className="w-full ">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form className="mt-6" onSubmit={handleSignIn}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"   required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr className="my-6 border-gray-300 w-full"/>

      <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
            <img style={{'width':'2vw'}} src={google} alt="" />
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

          <p className="mt-8">Need an account? <Link to={"/signup"} className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>


    </div>
  </div>

</section>      
        </div>
    );
};

export default Login;