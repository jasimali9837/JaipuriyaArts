/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Buttons } from "../../components/Buttons";
import { AppContext } from "../Context/AppContext";
const Collection = () => {
  const navitems = ["All", "Suit Salwar", "Salwar", "Grown", "Bridal Sarees"];
  const [Navitems, setNavitems] = useState("All");
  const { id, setid } = useContext(AppContext);

  const [collection, setcollection] = useState([]);

  useEffect(() => {
    axios
      .get("/Data.json")
      .then((res) => {
        console.log(res.data);
        let TotalData = res.data;
        let FilterdData = TotalData.filter((Data) => Data.category == Navitems);
        console.log(FilterdData);

        setcollection(FilterdData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [Navitems]);

  const CartItemAdd = (itemid, e) => {
    e.preventDefault();
    setid(itemid);
  };
  return (
    <section>
      <nav className=" md:m-[5vh] m-[2vh] cursor-pointer">
        <ul className="flex   md:w-[70%] justify-evenly w-[100%]">
          {navitems.map((data, i) => (
            <li
              key={i}
              className={` border-2 border-red-500 p-1  md:px-2    rounded-md text-[12px] justify-between ${
                Navitems === data ? "bg-[#7E1518] text-white" : ""
              }`}
              onClick={() => {
                setNavitems(data);
              }}
            >
              {data}
            </li>
          ))}
        </ul>{" "}
      </nav>
      <div className="  p-3   grid grid-cols-2  md:grid md:grid-cols-3 xl:grid-cols-4  ">
        {collection.map((Data, i) => (
          <div key={i} className="m-2">
            <img src={Data.image} alt="" />
            <h2>{Data.Name}</h2>
            <p className="m-1">{Data.Title}</p>
            <h3 className=" font-semibold text-[20px] sm:text-[25px] md:text-[28px]">
              {" "}
              {Data.price}
            </h3>
            <Buttons
              CSS={
                "text-[#7E1518] bg-slate-400 rounded-md p-1  px-2 m-2   text-[13px] "
              }
              Text={"Add To cart"}
            />

            <Buttons
              CSS={"bg-[#7E1518] text-white rounded-md p-1 px-2 text-[13px]"}
              Text={"Buy now"}
              onClick={() => CartItemAdd(Data.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
