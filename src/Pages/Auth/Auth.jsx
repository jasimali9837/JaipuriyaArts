import { Buttons } from "../../components/Buttons";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import "./LoginAndReg.css";
export const Login = () => {
  return (
    <section className="loginContainer ">
      <div className="loginandRegdiv ">
        <nav className="loginregnav ">
          <Link to={"/"}>
            <h1 className="Logo">Logo</h1>
          </Link>
          <Link to={"/signin"}>
            <p className=" BackPara">
              <FaArrowLeft />
              Go Back{" "}
            </p>
          </Link>
        </nav>

        <form action="" className=" formMain">
          <h1 className=" Welcomeheading">Welcome Back</h1>
          <p className="text-slate-400">
            Log in to access your personalized health dashboard.
          </p>
          <section className="flex flex-col">
            <label htmlFor="Email">Email Address</label>

            <input
              type="text"
              placeholder="Enter Your email"
              className="inputpara"
            />
          </section>
          <section className="flex flex-col">
            <label htmlFor="Email">Password</label>

            <input
              type="text"
              placeholder="Enter Your password"
              className="inputpara"
            />
          </section>
          <Buttons
            CSS={
              "bg-[#7E1518] text-white   rounded-xl    w-full  py-3 mt-[3vh] "
            }
            Text={" Login  "}
          />
        </form>
        <Link to={"/signin"}>
          <p className=" uppercase">
            {`doesn't have an accaount ? `}
            <span className="text-[#7E1518]">Signup here</span>{" "}
          </p>
        </Link>
      </div>

      <img
        src="/Sarees/H-m/16.png"
        alt=""
        className=" object-cover 
        "
      />
    </section>
  );
};

export const Register = () => {
  return (
    <section className="loginContainer ">
      <div className="loginandRegdiv">
        <nav className="loginregnav ">
          <Link to={"/"}>
            <h1 className="Logo">Logo</h1>
          </Link>
          <Link to={"/"}>
            <p className="BackPara">
              <FaArrowLeft />
              Go Back{" "}
            </p>
          </Link>
        </nav>

        <form action="" className="text-[#7E1518] p-5 xl:w-[70%] w-full ">
          <h1 className=" text-[20px] font-semibold sm:text-[25px] md:text-[30px] xl:text-[35px]">
            Create Your Account
          </h1>
          <p className="text-slate-400">
            Start your journey to personalized health insights.
          </p>
          <section className="flex flex-col mt-2">
            <label htmlFor="Email">Name</label>

            <input
              type="text"
              placeholder="Enter Your  Full name"
              className="inputpara"
            />
          </section>
          <section className="flex flex-col mt-2">
            <label htmlFor="Email">Email Address</label>

            <input
              type="text"
              placeholder="Enter Your email"
              className="inputpara"
            />
          </section>
          <section className="flex flex-col mt-2">
            <label htmlFor="Email">Cretate Password </label>

            <input
              type="text"
              placeholder="Create  a Password"
              className="inputpara"
            />
          </section>
          <section className="flex flex-col mt-2">
            <label htmlFor="Email">Confirm Password</label>

            <input
              type="text"
              placeholder="Enter Your email"
              className="inputpara"
            />
          </section>

          <Buttons
            CSS={"bg-[#7E1518] text-white  rounded-sm w-full  py-3 mt-[3vh]"}
            Text={" Create Account "}
          />
        </form>
        <Link to={"/login"}>
          <p className=" uppercase">
            {` Already have an account?  `}
            <span className="text-[#7E1518]">Login here?</span>{" "}
          </p>
        </Link>
      </div>

      <img
        src="/Sarees/H-m/15.png"
        alt=""
        className=" object-cover 
        "
      />
    </section>
  );
};
