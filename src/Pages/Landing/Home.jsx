import MapCollection from "../../components/MapCollection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      image: "/H-m/10.png",
    },
    {
      image: "/H-m/4.png",
      price: "5999",
      Title: "",
      dis: "",
    },
    {
      image: "/H-m/4.png",
      price: "6999",
      Title: " ",
      dis: "",
    },
    {
      image: "/H-m/4.png",
      price: "899",
      Title: "",
      dis: "",
    },
    {
      image: "/H-m/4.png",
      price: "999",
      Title: " ",
      dis: "",
    },
  ];
  const JustLauncheditems = [
    {
      image: "/H-m/2.png",
      title: "Anarkali Suits",
      des: "Intricately women with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/H-m/5.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/H-m/1.png",
      title: "Anarkali Suits",
      des: "Intricately women with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/H-m/2.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
    {
      image: "/H-m/5.png",
      title: "Anarkali Suits",
      des: "Intricately women  with rich zari work, perfect for weddings and festive occasions ",
      price: "6,499",
    },
  ];

  const CustomerReviews = [
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xyz",
      profile: "Bridal",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xym",
      profile: "Bridal",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xyz",
      profile: "Bridal",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xyz",
      profile: "Bridal",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xyz",
      profile: "Bridal",
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quas quod nam, ipsam, tempore placeat exercitationem deserunt pariatur iste odit non.",
      image:
        "https://th.bing.com/th/id/OIP.1IWM8igolZ_DeFjnAAoKagHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
      name: "xyz",
      profile: "Bridal",
    },
  ];

  return (
    <>
      <div className="  relative">
        {/*  Hero section  */}

        <section
          className="relative    
          h-[40vh]
          sm:h-[65vh] 
         xl:h-[85vh] w-[100vw] border border-red-600 bg-red-500 "
        >
          <div className=" absolute">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              className="h-full"
            >
              <div
                className=" h-[40vh]
          sm:h-[65vh] 
         xl:h-[85vh]"
              >
                <img
                  src="H-m/7.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
              <div
                className=" h-[50vh]
          sm:h-[70vh] 
         xl:h-[85vh]"
              >
                <img
                  src="H-m/9.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
              <div
                className=" h-[50vh]
          sm:h-[70vh] 
         xl:h-[85vh]"
              >
                <img
                  src="H-m/20.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
            </Carousel>
          </div>

          <div className="z-30 top-0 absolute  xl:w-[50%] md:w-[75%] text-white xl:p-10  p-2   h-full  items-center flex flex-col justify-center ">
            <h2 className="xl:text-[90px] md:text-[50px] font-bold text-[25px]">
              Unfolding the Beauty
              <span className="text-[#7E1518]"> of Indian</span> Heritage
            </h2>
            <p className="xl:text-[30px] md:text-[20px] text-[12px] "></p>
          </div>
        </section>
        {/* shop category  */}

        <section
          className="
         mt-5  mb-3 p-2 bg-red-50 "
        >
          <h2 className="text-[#7E1518] text-[25px] sm:text-[30px] md:text-[35px] xl:text-[40px] text-center font-semibold ">
            {" "}
            Our Package
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
                <h2 className=""></h2>
                <h4 className=""></h4>
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
            Special Package
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
                  className="z-0   xl:w-[24vw] w-[48vw] h-[24vw] "
                />
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
