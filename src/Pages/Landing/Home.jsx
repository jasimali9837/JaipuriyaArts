import { Buttons } from "../../components/Buttons";
import MapCollection from "../../components/MapCollection";

const Home = () => {
  const Categorydata = [
    {
      image: "/Sarees/Category/1.png",
      category: "Suit Salwar",
    },
    {
      image: "/Sarees/Category/2.png",
      category: " Salwar",
    },
    {
      image: "/Sarees/Category/3.png",
      category: "Gown",
    },
    {
      image: "/Sarees/Category/4.png",
      category: "Bridal Sarees",
    },
    {
      image: "/Sarees/Category/5.png",
      category: "plus Size Kurties",
    },
  ];
  const DesignWithPrice = [
    {
      image: "/Sarees/H-m/10.png",
      price: "1999",
      Title: "Suit Salwar Under ",
    },
    {
      image: "/Sarees/H-m/4.png",
      price: "5999",
      Title: "Suit Salwar Under ",
      dis: "Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments",
    },
    {
      image: "/Sarees/H-m/4.png",
      price: "6999",
      Title: "Suit Salwar Under ",
      dis: "Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments",
    },
    {
      image: "/Sarees/H-m/4.png",
      price: "899",
      Title: "Suit Salwar Under ",
      dis: "Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments",
    },
    {
      image: "/Sarees/H-m/4.png",
      price: "999",
      Title: "Suit Salwar Under ",
      dis: "Our designer salwar suits are crafted with luxurious fabrics and intricate embellishments",
    },
  ];
  const JustLauncheditems = [
    {
      image: "/Sarees/H-m/2.png",
      title: "Anarkali Suits",
      des: "Intricately women with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/Sarees/H-m/5.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/Sarees/H-m/1.png",
      title: "Anarkali Suits",
      des: "Intricately women with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/Sarees/H-m/2.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/Sarees/H-m/5.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
  ];
  const ProductWithOffsell = [
    {
      image: "/Sarees/H-m/11.png",
      title: "Suit salwar Under ",
      price: "1999",
      offper: "20",
    },
    {
      image: "/Sarees/H-m/12.png",
      title: "Suit salwar Under ",
      price: "1999",
      offper: "40",
    },
  ];
  const CustomerReviews = [
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "Busineesman",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "verified user",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "Verified user",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "Busineesman",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "verified user",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "Afzal",
      profile: "Verified user",
    },
  ];

  return (
    <>
      <div className="  relative">
        {/*  Hero section  */}

        <section
          className="relative  md:p-3 xl:p-5 p-1  
          h-[50vh]
          sm:h-[70vh] 
         xl:h-[960px] w-[100vw] "
        >
          <img
            src="./Sarees/Hero.png"
            alt=""
            className=" absolute z-0  top-0 right-0  w-[100vw] h-full object-fill "
          />
          <div className="z-30 top-0 absolute  xl:w-[50%] md:w-[75%] text-white xl:p-10  p-2   h-full  items-center flex flex-col justify-center ">
            <h2 className="xl:text-[90px] md:text-[50px] font-bold text-[25px]">
              Unfolding the Beauty
              <span className="text-[#7E1518]"> of Indian</span> Heritage
            </h2>
            <p className="xl:text-[30px] md:text-[20px] text-[12px] ">
              At Manjeet Saree, we bring tradition to life with elegant,
              handcrafted sarees that blend heritage and style. Whether for
              weddings, festivals, or everyday wear, each piece reflects
              timeless artistry. Discover your perfect saree and drape yourself
              in elegance and grace.
            </p>
            <div className="mt-[3vh] gap-2 ">
              <input
                type="text"
                placeholder="Search "
                className=" md:p-3 sm:p-2 p-1 sm:text-[18px] text-[15px] xl:text-[20px]  "
              />
              <Buttons
                Text={"Search"}
                CSS={"bg-[#7E1518] md:p-3 sm:p-2 p-1 "}
              />
            </div>
          </div>
        </section>
        {/* shop category  */}

        <section
          className="
         mt-5  mb-3 p-2 bg-red-50 "
        >
          <h2 className="text-[#7E1518] text-[25px] sm:text-[30px] md:text-[35px] xl:text-[40px] text-center font-semibold ">
            {" "}
            Shop By Category{" "}
          </h2>
          <div className=" w-[98vw] flex     overflow-x-scroll     p-3   gap-3 flex-nowrap hidescrolbar ">
            {Categorydata.map((data, i) => (
              <div
                key={i}
                className="relative w-[50vw]  
                xl:w-[25vw] flex-shrink-0
                 "
              >
                <p className=" absolute z-10 bottom-5 text-white  w-full text-center  text-[14px]  sm:text-[16px] md:text-[18px] xl:text-[20px] ">
                  {data.category}
                </p>
                <img
                  src={data.image}
                  alt=""
                  className="z-0   xl:w-[24vw] w-[48vw] "
                />
              </div>
            ))}
          </div>
        </section>
        {/* Diffrents designs with price  */}
        <section className=" xl:flex  xl:h-[1024px] ">
          {DesignWithPrice.map((Data, i) => (
            <div
              key={i}
              className={` relative  ${
                i === 0 ? " w-[100vw] xl:w-[48vw]" : "hidden"
              }`}
            >
              <img
                src={Data.image}
                alt="image"
                className="   object-cover h-full"
              />
              <div className="absolute  bottom-5 text-white w-[70%] text-[25px] sm:text-[35px] md:text-[45px] xl:text-[55px] font-bold text-center ">
                <h2 className="">{Data.Title}</h2>
                <h4 className=""> Rs.{Data.price}</h4>

                <Buttons
                  Text={"Add to cart"}
                  CSS={
                    "border  bg-white text-[20px] rounded-[10px] text-red-400 px-3 py-1 m-3"
                  }
                />
                <Buttons
                  Text={"Buy now"}
                  CSS={
                    "border  bg-[#7E1518] text-[20px] rounded-[10px] text-red-400 px-3 py-1 text-white"
                  }
                />
              </div>
            </div>
          ))}
          <div
            className=" xl:w-[50vw] w-[100vw]  grid grid-cols-2 
            "
          >
            {DesignWithPrice.map((Data, i) => (
              <div
                key={i}
                className={`  flex flex-col   p-1 sm:p-2 xl:p-4  ${
                  i === 0 ? " hidden  " : " xl:w-[25vw] "
                } `}
              >
                <img
                  src={Data.image}
                  alt="image"
                  className="xl:h-[354px] xl:w-[359px]"
                />
                <div>
                  <h2 className="text-[14px] sm:text-[15px] md:text-[17px] xl:text-[19px] font-bold">
                    {Data.Title}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] md:text-[14px] xl:text-[18px]">
                    {Data.dis}
                  </p>
                  <span> Rs {Data.price}</span>
                  <Buttons
                    Text={"Add to cart"}
                    CSS={
                      "border  bg-white   text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] rounded-[10px] text-red-400 px-3 py-1 m-3"
                    }
                  />
                  <Buttons
                    Text={"Buy now"}
                    CSS={
                      "border  bg-[#7E1518]  text-[10px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[10px]  text-red-400 px-3 py-1 text-white"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*  Just Launched */}
        <section
          className="
         mt-5  mb-3 p-2 bg-red-50 "
        >
          <h2 className="text-[#7E1518] text-[25px] sm:text-[30px] md:text-[35px] xl:text-[40px] text-center font-semibold ">
            {" "}
            Just launched{" "}
          </h2>
          <div className=" w-[98vw] flex     overflow-x-scroll     p-3   gap-3 flex-nowrap hidescrolbar ">
            {JustLauncheditems.map((data, i) => (
              <div
                key={i}
                className="relative w-[50vw]  
                xl:w-[25vw] flex-shrink-0
                 "
              >
                <img
                  src={data.image}
                  alt=""
                  className="z-0   xl:w-[24vw] w-[48vw] "
                />
                <div>
                  <p>{data.title}</p>
                  <h4 className="font-semibold text-[14px] sm:text-[14px] md:text-[16px]  ">
                    Rs.{data.price}
                  </h4>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] leading-3 sm:leading-5">
                    {data.des}
                  </p>

                  <Buttons
                    Text={"Add to cart"}
                    CSS={
                      "border  bg-white   text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] rounded-[10px] text-red-400 px-3 py-1 m-3 text-nowrap"
                    }
                  />
                  <Buttons
                    Text={"Buy now"}
                    CSS={
                      "border  bg-[#7E1518]  text-[10px] sm:text-[12px] md:text-[13px] xl:text-[14px] rounded-[10px]  text-red-400 px-3 py-1 text-white"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Second Hero */}
        <section>
          <div className="relative mt-[3vh]">
            <img src="/Sarees/H-m/18.png" alt="Second Hero" />
            <div
              className="absolute  top-[20%]  
          xl:top-[40%] left-[10%] text-white"
            >
              <h2
                className="text-[15px] sm:text-[25px] md:text-[30px] xl:text-[45px] font-semibold 
            "
              >
                Where Timeless
                <br />
                Tradition Meets
                <br /> Modern Glamour
              </h2>
              <h3 className="text-[15px] sm:text-[25px] md:text-[30px] xl:text-[45px]">
                Kurti Under
              </h3>
              <p className="text-[15px] sm:text-[25px] md:text-[30px] xl:text-[45px]">
                {" "}
                Rs 1,999
              </p>
              <Buttons
                Text={"Buy now"}
                CSS={
                  "border  bg-[#7E1518]  text-[10px] sm:text-[12px] md:text-[13px] xl:text-[18px] rounded-[5px]  text-red-400  px-3 py-1 text-white xl:mt-[3vh]  sm:mt-[1vh] xl:px-5 xl:py-2"
                }
              />
            </div>
          </div>
          <div className="flex gap-[1.5vw] mt-[3vw]  justify-evenly relative">
            {ProductWithOffsell.map((Data, i) => (
              <div key={i} className="w-[48vw] relative">
                <div
                  className="absolute -top-2 right-5 bg-white text-[#7E1518]  w-[60px] h-[80px] rounded-[10px]
                  md:w-[80px] md:h-[90px] xl:right-10 xl:w-[100px] xl:h-[120px]"
                >
                  <p className="text-[15px] sm:text-[18px] xl:text-[25px] font-semibold text-center">
                    <span> Flat</span>
                    <br />
                    <span className=" font-bold text-[17px] sm:text-[20px] xl:text-[32px]">
                      {Data.offper}%
                    </span>
                    <br />
                    <span>Off</span>
                  </p>
                </div>
                <img src={Data.image} alt="Image" className="max-h-[893px] " />
                <div className="absolute  top-[50%] sm:top-[70%] xl:bottom-[30%] text-white  left-[10px] sm:left-[5vw] xl:left-[10%]  ">
                  <p className="text-[15px] sm:text-[16px] md:text-[20px] xl:text-[30px] font-semibold">
                    {Data.title}
                  </p>
                  <h3 className="text-[15px] sm:text-[16px] md:text-[20px] xl:text-[30px] font-semibold">
                    {" "}
                    Rs {Data.price}
                  </h3>
                  <Buttons
                    Text={"Add to cart"}
                    CSS={
                      "border  bg-white   text-[10px] sm:text-[12px] md:text-[13px] xl:text-[20px]  text-red-400 px-3 py-1 m-1 text-nowrap"
                    }
                  />
                  <Buttons
                    Text={"Buy now"}
                    CSS={
                      "border  bg-[#7E1518]  text-[10px] sm:text-[12px] md:text-[13px] xl:text-[20px]   text-red-400 px-3 py-1 text-white"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Customer review  */}
        <section className=" mt-[3vh] bg-red-50 text-[#7E1518]  p-5  flex flex-col  justify-center items-center  ">
          <h2 className="text-[20px] sm:text-[25px] md:text-[35px] xl:text-[40px] font-bold m-5">
            Out Customer says
          </h2>
          <div
            className="flex overflow-x-scroll gap-4 overflow-auto w-[91vw] hidescrolbar  
          
          
        "
          >
            {CustomerReviews.map((Data, i) => (
              <div
                key={i}
                className=" border border-red-500  
                md:w-[29vw]  w-[90vw] xl:h-[18vw]  shrink-0 bg-white p-2 rounded-md flex flex-col justify-center "
              >
                <p className="">{Data.des}</p>
                <div className="flex gap-2">
                  <img
                    src={Data.image}
                    alt="image"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <p>{Data.name}</p>
                    <p>{Data.profile}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*  To get Update */}

        <MapCollection />
      </div>
    </>
  );
};

export default Home;
