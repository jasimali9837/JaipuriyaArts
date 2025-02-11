import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {
  const { id } = useContext(AppContext);
  const [Cartitems, setCartitems] = useState([]);

  console.log("These Items is in My cart items ", Cartitems);
  useEffect(() => {
    axios
      .get("/Data.json")
      .then((res) => {
        const AllItems = res.data;
        const Filtered_Data = AllItems.filter((data) => data.id == id);

        setCartitems(Filtered_Data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <>
      <div>
        <>
          {Cartitems.map((data, i) => (
            <div
              key={i}
              className="flex gap-[20px] m-2 p-3 border border-red-500  rounded-xl bg-slate-400"
            >
              <img
                src={data.image}
                alt=""
                className="
            w-[40%] sm:w-[30%] xl:w-[20%]"
              />
              <div>
                <h2 className="text-[20px]  sm:text-[25px] md:text-[30px] xl:text-[35px] font-semibold ">
                  {data.name}
                </h2>
                <p className="text-[20px]  sm:text-[25px] md:text-[30px] xl:text-[35px] font-semibold  text-[#7E1518]">
                  {data.price}
                </p>
                <p className="text-[15px]  sm:text-[25px] md:text-[30px] xl:text-[35px]  ">
                  {data.Title}
                </p>
                <button className="bg-[#7E1518] text-white rounded-md p-1 px-2 text-[13px]  sm:text-[23px] mt-3">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Cart;
