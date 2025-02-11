/* eslint-disable no-unused-vars */
import { IoCart } from "react-icons/io5";
import { Buttons } from "./Buttons";
import { NavLink, Link } from "react-router";
import "./Components.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "../Pages/Context/AppContext";
export const Navbar = () => {
  const { navitem, setnavitem, mobilenav, setmobilenav } =
    useContext(AppContext);

  return (
    <nav
      className=" flex justify-between p-2  
    xl:text-[20px] text-[15px] items-center bg-[#7E1518] h-[70px]   "
    >
      <Link to={"/"}>
        <h1 className=" md:w-[40%] w-[20%]">Logo</h1>
      </Link>

      {/*   Big devices navbar  */}
      <div className="sm:flex justify-between    p-4 md:w-[60%] w-[80%]   hidden  ">
        <ul className="flex gap-3  ">
          <NavLink
            to={"/"}
            className={` ${navitem === 1 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(1)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/about"}
            className={` ${navitem === 2 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(2)}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to={"/collection"}
            className={` ${navitem === 3 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(3)}
          >
            <li>Collection</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={` ${navitem === 4 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(4)}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
        <ul className="flex gap-4  items-center">
          <NavLink
            to={"/cart"}
            className={` ${navitem === 5 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(5)}
          >
            <li>
              <IoCart className="text-[25px]" />
            </li>
          </NavLink>

          <NavLink
            to={"/login"}
            className={` ${navitem === 6 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(6)}
          >
            <li>
              <Buttons Text={"Log in"} />
            </li>
          </NavLink>
          <NavLink
            to={"/signin"}
            className={` ${navitem === 7 ? "active" : "Activatelink"}`}
            onClick={() => setnavitem(7)}
          >
            <li>
              <Buttons Text={"Sign  in"} />
            </li>
          </NavLink>
        </ul>
      </div>
      {/*  Small Devices navbar */}

      <section className=" sm:hidden  flex gap-4  items-center z-50 ">
        <NavLink
          to={"/cart"}
          className={` ${navitem === 5 ? "active" : "Activatelink"}`}
          onClick={() => setnavitem(5)}
        >
          <IoCart className="text-[25px]" />
        </NavLink>
        <div>
          {mobilenav ? (
            <IoIosClose
              className="text-[30px]"
              onClick={() => setmobilenav(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-[30px]"
              onClick={() => setmobilenav(true)}
            />
          )}

          {mobilenav && (
            <div className=" justify-between  flex flex-col  text-[18px]   md:w-[60%] w-[50%] absolute right-0  top-[70px] bg-slate-700   ">
              <ul className=" flex flex-col gap-3   ">
                <NavLink
                  to={"/"}
                  className={` ${navitem === 1 ? "active" : "Activatelink"}`}
                  onClick={() => setnavitem(1)}
                >
                  <li className="pl-5 ">Home</li>
                </NavLink>
                <hr />
                <NavLink
                  to={"/about"}
                  className={` ${navitem === 2 ? "active" : "Activatelink"}`}
                  onClick={() => setnavitem(2)}
                >
                  <li className="pl-5 ">About</li>
                </NavLink>
                <hr />
                <NavLink
                  to={"/collection"}
                  className={` ${navitem === 3 ? "active" : "Activatelink"}`}
                  onClick={() => setnavitem(3)}
                >
                  <li className="pl-5 ">Collection</li>
                </NavLink>
                <hr />
                <NavLink
                  to={"/contact"}
                  className={` ${navitem === 4 ? "active" : "Activatelink"}`}
                  onClick={() => setnavitem(4)}
                >
                  <li className="pl-5 ">Contact</li>
                </NavLink>
                <hr />
              </ul>
              <ul className=" flex flex-col gap-3  ">
                <li className="grid grid-flow-col grid-cols-2 justify-between   ">
                  <Link
                    to={"/login"}
                    className={` ${navitem === 6 ? "active" : "Activatelink"}`}
                    onClick={() => setnavitem(6)}
                  >
                    <Buttons
                      Text={"Log in"}
                      CSS={"bg-blue-500 p-3 text-white w-[100%] border  "}
                    />
                  </Link>

                  <Link
                    to={"/signin"}
                    className={` ${navitem === 7 ? "active" : "Activatelink"}`}
                    onClick={() => setnavitem(7)}
                  >
                    <Buttons
                      Text={"Sign  in"}
                      CSS={"bg-blue-500 p-3 text-white w-[100%] border"}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};
