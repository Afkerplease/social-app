import "./App.css";
import star from "./images/icon-star.svg";
import colton from "./images/image-colton.jpg";
import Irene from "./images/image-irene.jpg";
import Anne from "./images/image-anne.jpg";

function App() {
  return (
    <main className="  h-[100vh]  bg-bg-desktop bg-no-repeat ">
      <div className="container w-[375px] md:w-[1440px] mx-auto h-[100vh] ">
        {/* Header part */}
        <div className="grid gap-5 md:grid-cols-2 md:pt-20  ">
          {/* first div */}
          <div className=" flex flex-col items-start justify-start">
            <h1 className=" text-[3rem] leading-[2.5rem] pt-10 md:text-[3.5rem] md:w-[60%] text-VeryDarkMagenta font-[700] font-League md:text-start text-center">
              10,000+ of our users love our products.
            </h1>
            <p className=" md:w-[65%] text-DarkGrayishMagenta font-League font-[500] md:text-start  mt-4 text-center text-[19px]">
              {" "}
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          {/*End of first div  */}
          {/* second div */}
          <div className=" md:mt-10">
            <div className=" flex flex-col md:flex-row md:justify-around items-center md:w-[60%] md:py-2  bg-LightGrayisMagenta p-5">
              <div className=" flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h3 className=" text-VeryDarkMagenta font-League font-[700] text-[1.2rem] mt-2 ">
                Rated 5 Stars in Reviews
              </h3>
            </div>
            <div className=" flex flex-col items-center md:w-[60%] md:py-2 md:flex-row md:justify-evenly md:ml-[10%] bg-LightGrayisMagenta mt-4 p-5">
              <div className=" flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h3 className=" text-VeryDarkMagenta font-League font-[700] text-[1.2rem] mt-2 ">
                Rated 5 Stars in Report Guru
              </h3>
            </div>
            <div className=" flex flex-col items-center md:flex-row md:justify-evenly md:w-[60%] md:py-2 md:ml-[20%] bg-LightGrayisMagenta mt-4 p-5">
              <div className=" flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h3 className=" text-VeryDarkMagenta font-League font-[700] text-[1.2rem] mt-2 ">
                Rated 5 Stars in BestTech
              </h3>
            </div>
          </div>
          {/* End of 2nd div */}
        </div>
        {/* End of header */}
        {/*Cards  */}
        <div className=" md:h-[400px] pt-5 relative flex flex-col gap-5 md:flex-row md:mt-[10rem] ">
          {/* 1st card */}
          <div className=" bg-VeryDarkMagenta md:h-[70%] rounded-[15px] p-10">
            <div className="flex gap-5 mb-5">
              <img
                src={colton}
                alt="colton-profilepic"
                className=" w-[50px] rounded-full "
              />
              <div className=" flex flex-col">
                <h2 className=" text-white font-League text-[1.1rem]">
                  Colton Smith
                </h2>
                <p className="text-SoftPink font-League ">Verified Buyer</p>
              </div>
            </div>
            <p className=" text-white font-League text-[18px]">
              "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!"
            </p>
          </div>
          {/* End of 1st Card */}
          {/* 2nd card */}
          <div className=" bg-VeryDarkMagenta md:h-[70%] md:mt-5  rounded-[15px] p-10">
            <div className="flex gap-5 mb-5">
              <img
                src={Irene}
                alt="Irene-profilepic"
                className=" w-[50px] rounded-full "
              />
              <div className=" flex flex-col">
                <h2 className=" text-white font-League text-[1.1rem]">
                  Irene Roberts
                </h2>
                <p className="text-SoftPink font-League ">Verified Buyer</p>
              </div>
            </div>
            <p className=" text-white font-League text-[18px]">
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery."
            </p>
          </div>
          {/* End of 2nd Card */}
          {/* 3rd card */}
          <div className=" bg-VeryDarkMagenta md:h-[70%] md:mt-10 rounded-[15px] p-10">
            <div className="flex gap-5 mb-5">
              <img
                src={Anne}
                alt="Irene-profilepic"
                className=" w-[50px] rounded-full "
              />
              <div className=" flex flex-col">
                <h2 className=" text-white font-League text-[1.1rem]">
                  Irene Roberts
                </h2>
                <p className="text-SoftPink font-League ">Verified Buyer</p>
              </div>
            </div>
            <p className=" text-white font-League text-[18px]">
              "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </div>
          {/* End of 3rd Card */}
        </div>
      </div>
    </main>
  );
}

export default App;
