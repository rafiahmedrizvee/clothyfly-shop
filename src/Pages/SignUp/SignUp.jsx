import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import img from "../../assets/images/logimg.jpg"



const SignUp = () => {
    const { createUser, updateUser, googleSignIn, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate()
  const [error, setError] = useState("");

  const handleSignUp = (event) => {

    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fullName = firstName + "" + lastName;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password Should be One Uppercase");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("At least one special character #?!@$%^&*-");
      return;
    }
    if (password.length < 6) {
      setError("Minimum six in length ");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser(fullName)

        verifyEmail()
          .then(() => {
            toast.success("Please check your email and verify");
          })
          .catch((error) => {
           

          });
      


      }) 

      .catch((error) => {
       

      });






    form.reset();
    navigate("/")


  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
      
      })

      .catch((error) => {
       

      });
     form.reset();
     navigate("/")

  }

  return (
     <div style={{ backgroundImage: `url(${img})`}}  className="hero min-h-screen ">

      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card bg-secondary w-full max-w-sm shrink-0 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="text"
                name='firstName'
                placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="text" name='lastName' placeholder="LastName" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />

              <p className='text-red-500 font-semibold '>{error}</p>
              <label className="label">
                <Link to="/sign-in" className="label-text-alt link link-hover">Already have an account?Please Sign In</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type='submit' className=" btn bg-primary rounded-md text-white font-semibold transition-all ease-in-out transform hover:text-black hover:bg-[#43c9a9]" value="Sign Up" />
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-2">
              <button onClick={handleGoogleSignIn} className=" btn bg-primary rounded-md text-white font-semibold transition-all ease-in-out transform hover:text-black hover:bg-[#43c9a9]">Continue With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
