import MapCollection from "../../components/MapCollection";

const About = () => {
  const ChooseData = [
    {
      data: " Immersive Exploration: Experience your campus like never before, uncovering hidden gems, iconic landmarks, and secret study spots. ",
    },
    {
      data: "Meaningful Connections: Engage with students, professors, and alumni, fostering friendships and networking opportunities that last a lifetime.",
    },
    {
      data: " Enriching Experiences: Participate in interactive challenges that enhance your knowledge, creativity, and leadership skills while having fun.",
    },
    {
      data: "Memorable Adventures: Capture and share your journey through photos, videos, and stories, making every moment unforgettable.",
    },
  ];
  return (
    <section>
      <header className="relative  border border-red-500 ">
        <img
          src="/Sarees/H-m/AboutUs.png"
          alt=""
          className="min-h-[50vh]  object-cover"
        />
        <div
          className=" absolute  top-[10%] left-[5%]  md:top-[20%] md:left-[10%]    xl:top-[40%]  xl:w-[60%] 
          xl:left-[5%] 
          md:w-[80%]  text-white "
        >
          <h1 className="text-white text-[30px]  sm:text-[36px]  md:text-[45px] font-semibold">
            Weaving <span className="text-[#7E1518]">Traditions , Draping</span>{" "}
            Elegance
          </h1>
          <p className="text-[13px] sm:text-[15px] md:text-[20px]">
            At Manjeet Saree, we take pride in being one of the leading saree
            retailers in India, offering a diverse range of traditional and
            contemporary sarees. Founded over three decades ago, our journey
            began with a simple mission: to celebrate the beauty of Indian
            craftsmanship and provide our customers with sarees that reflect
            elegance, tradition, and timelessness.
          </p>
        </div>
      </header>
      <section className="bg-[#7E1518] text-white p-2 sm:p-4 md:p-5">
        <h1 className="text-[25px] sm:text-[30px] md:text-[35px] xl:text-[40px] font-semibold ">
          Our Vision
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[20px] xl:text-[25px]">
          {" "}
          Campus Safari is on a mission to empower students by fostering
          exploration, meaningful connections, and immersive experiences within
          their university environment. Our goal is to transform everyday spaces
          into hubs of discovery, learning, and community engagement
        </p>
      </section>
      <section className="relative bg-red-50 ">
        <img
          src="/Sarees/H-m/WhyChoose.png"
          alt=""
          className="min-h-[70vh]  object-cover"
        />
        <section
          className="  absolute top-0 text-white 
          p-1 sm:p-3 md:p-5    flex justify-center "
        >
          <div
            className="  text-white 
         h-[70%] p-1 sm:p-3 md:p-5 xl:w-[80%] md:w-[95%]  w-full   "
          >
            <h1 className=" font-semibold text-[20px] sm:text-[30px] md:text-[35px] xl:text-[40px]">
              Why Choose Us?
            </h1>
            {ChooseData.map((Data, i) => (
              <li
                key={i}
                className="text-[13px] sm:text-[15px] md:text-[20px] xl:text-[25px] sm:mt-3 mt-1"
              >
                {Data.data}
              </li>
            ))}
            <div className="bg-white p-5 text-black rounded-md mt-[3vh]">
              <h1 className="text-[15px] sm:text-[17px] md:text-[20px] xl:text-[25px] text-[#7E1518] font-semibold">
                Our Commitment
              </h1>
              <h3>
                At the heart of Manjeet Saree is our commitment to quality. We
                work with skilled artisans and weavers from across India to
                bring you sarees that are made with passion, precision, and
                love. Every saree in our collection is a testament to the rich
                textile heritage of India, and we take pride in supporting
                traditional craftsmanship.
              </h3>
              <p>
                We believe that sarees are more than just garments; they are
                expressions of art and culture. By bringing these beautiful
                creations to our customers, we hope to keep the traditions of
                Indian weaving and draping alive for generations to come.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className=" mt-[8vh]">
        <MapCollection />
      </section>
    </section>
  );
};

export default About;
