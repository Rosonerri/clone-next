// import React from 'react'
import img from "../assets/beam.png";
import img2 from "../assets/teacher1.jpg";
const HomeScreen = () => {
  return (
    <div className="w-full min-h-screen rounded-md bg-purple-50 p-5">
      <div className="grid w-full lg:grid-col-3 gap-2 xl:grid-cols-3 md:grid-cols-1 grid-col-1 bg-black min-h-screen">
        <div className="shadow-md rounded-md grid lg:col-span-2 lg:grid-cols-2 gap-3 h-[550px] md:w-full">
          <div className="bg-white rounded-md">
            <img src={img} alt="" />
          </div>
          <div className="rounded-md grid-rows-2 gap-3 grid">
            <div className="rounded-md grid lg:grid-cols-2 md:grid-cols-1 gap-3">
              <div className="rounded-md bg-blue-950">
                {/* <img src={img} alt="" className="h-[100%]" /> */}
              </div>
              <div className="rounded-md bg-blue-950">
                {/* <img src={img2} alt="" className="h-[100%]" /> */}
              </div>
            </div>
            <div className="rounded-md bg-blue-950">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              tenetur? i am cool
            </div>
          </div>
        </div>
        <div className="border shadow-md rounded-md bg-[crimson] h-[600px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          molestias dolorem culpa perspiciatis praesentium. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Hic, ad. Lorem ipsum dolor
          sit.
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
