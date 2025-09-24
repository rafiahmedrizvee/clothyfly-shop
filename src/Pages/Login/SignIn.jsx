import { useContext, useState } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const SignIn = () => {
    const { signIn,passwordReset } = useContext(AuthContext)
  const [error, setError] = useState("");
  const [userEmail,setUserEmail]= useState ("");
  //console.log(users);


  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    setUserEmail(email);
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);

      })

      .catch((error) => {
        setError(error.message);

      });
    form.reset();
    setError("")

  };


  const handleEmailBlur =event=>{
    const email = event.target.value;
    setUserEmail(email);
    
  
  }

  const handleForgetPassword=()=>{
   if(!userEmail){
    alert("Please Enter your valid Email address");
    return;
   }
  //  

  passwordReset(userEmail)
  .then(()=>{

    alert("Please check your email & reset password");

  })
  .then((error)=>{
    console.log(error);
    
  });
    
  };
  return (
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              {
                error && (
                  <p className='text-red-500 '>Email or Password doest not match</p>
                )
              }
              <label className="label">


                <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forget Password</button> 

                <Link to="/sign-up" className="label-text-alt link link-hover">I have no Account?Registered Now </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <input type='submit' className=" btn bg-primary rounded-md text-white font-semibold transition-all ease-in-out transform hover:text-black hover:bg-[#43c9a9]" value="Login" />
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-2">
              <button className=" btn bg-primary rounded-md text-white font-semibold transition-all ease-in-out transform hover:text-black hover:bg-[#43c9a9]">Continue With Google</button>
       
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
