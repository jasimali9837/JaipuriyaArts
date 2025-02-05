import { Buttons } from "../../components/Buttons";
import MapCollection from "../../components/MapCollection";

const Contact = () => {
  return (
    <div>
      <header className=" relative">
        <img src="/Sarees/H-m/Hero2.png" alt="Hero" className="min-h-[200px]" />
        <p className=" absolute top-[10%] left-[10%]     xl:top-[50%] text-white md:left-[20%] md:text-[40px] text-[30px]  xl:text-[45px]   sm:w-[30%] w-[90%] b font-semibold   ">
          We’d Love to Hear From You!
        </p>
      </header>
      <section className=" bg-white  p-5 flex justify-center items-center">
        <form className="w-[70%] ">
          <h1 className="text-[25px] sm:text-[30px] xl:text-[35px] font-semibold text-[#7E1518]">
            Contact us
          </h1>

          <section className="mt-5">
            <label htmlFor="Name">Name</label>
            <br />
            <input type="text" className=" bg-gray-400 p-2 rounded-md w-full" />
          </section>
          <section className="mt-5">
            <label htmlFor="Name">Email Address</label>
            <br />
            <input type="text" className=" bg-gray-400 p-2 rounded-md w-full" />
          </section>
          <section className="mt-5">
            <label htmlFor="Name">Conatct Number</label>
            <br />
            <input type="text" className=" bg-gray-400 p-2 rounded-md w-full" />
          </section>
          <Buttons
            Text={"Subscribe"}
            CSS={
              "border  bg-[#7E1518]   text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] rounded-[10px]  text-white px-3 py-1 m-3 text-nowrap "
            }
          />
        </form>
      </section>
      <MapCollection />
    </div>
  );
};

export default Contact;
