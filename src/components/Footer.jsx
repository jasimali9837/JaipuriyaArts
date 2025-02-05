import { Buttons } from "./Buttons";
import "./Components.css";
const Footer = () => {
  return (
    <footer className="w-[98vw] bg-[#7E1518] xl:flex items-center justify-between min-h-[50vh] text-white p-2">
      <div className=" xl:w-[30vw]">
        <h1 className="footer">Logo</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          maxime numquam beatae nesciunt ex vitae?
        </p>
        <div className="flex">
          <input type="text" className="outline-none" />
          <Buttons
            Text={"Sumbit"}
            CSS={"bg-[#FF5733] p-3 text-white w-[100%] border w-[100px]"}
          />
        </div>
      </div>
      <section className="grid  sm:grid-cols-3  grid-cols-2  mt-[5vh]">
        <div className="footerLinkCenter">
          <h2 className="footer">Follow us</h2>
          <ul>
            <li>Facebook</li>
            <li>Linkdin</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className=" xl:footerLinkCenter">
          <h2 className="footer">Company</h2>
          <ul>
            <li>About us </li>
            <li>About Our shop</li>
            <li>Contact us</li>
            <li>Testimonials</li>
            <li>Term And Condictions</li>
            <li>Privecy And Policy</li>
            <li>Refund And Cancellation</li>
            <li>Shipping</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footerLinkCenter">
          <h2 className="footer">Contact us</h2>
          <ul>
            <li>
              Manjeet singh And Company,Arya Samaj Rd,Bhadurpur,Ballia
              ,UttarPredesh,277001{" "}
            </li>

            <li>Phone:9936538429 </li>
            <li>Email:contact@manjeetrestrauntandsweet.com</li>
            <li>Hours:7 Days a week from 10:00 am</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
