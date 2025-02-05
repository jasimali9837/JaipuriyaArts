import { Buttons } from "./Buttons";

const MapCollection = () => {
  return (
    <section className=" md:flex gap-4 justify-evenly p-2">
      <div className=" md:flex  text-[#7E1518]  items-center   md:w-[50vw]   ">
        <div className=" ">
          <h1 className="text-[20px] sm:text-[22px] md:text-[25px] font-semibold">
            Join To get Update of new Collection..
          </h1>
          <p>
            Join our email subscription now to get updates on new arrivels and
            coupons.
          </p>
          <div className="border border-[#7E1518] p-1 justify-between flex mt-3 ">
            <input
              type="text"
              className=" outline-none text-[18px] sm:text-[20px] md:text-[22px] xl:text-[25px]"
            />
            <Buttons
              Text={"Subscribe"}
              CSS={
                "border  bg-[#7E1518]   text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] rounded-[10px]  text-white px-3 py-1 m-3 text-nowrap "
              }
            />
          </div>
        </div>
      </div>
      <div>
        <img src="/Sarees/H-m/map.png" alt="" />
      </div>
    </section>
  );
};

export default MapCollection;
