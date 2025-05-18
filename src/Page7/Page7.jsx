import React from "react";
// import Ch1 from "./PageInnerContent/Ch1";
import Ch2 from "./PageInnerContent/Ch2";
import Ch3 from "./PageInnerContent/Ch3";
import Page5 from "../Page5/Page5"
import Page9 from "../Page9/Page9";

function Page7() {
 


  return (
    <>
    
          <div className="content">
            {/* First content */}
{/* <Ch1/> */}
           
            <section className="section w-full z-[] hero">
              {/* <Ch1 /> */}
            </section>
            {/* Second content */}
<section>
        <Page9 />
        {/* card carousel */}
</section>
            <section  className="section2  text-white relative w-[100vw]  bg-[#0C0C0C]">
              <Ch2 />
            </section>
            <section  className="">
              {/* <Page5 /> */}
            </section>
            <section className="section4 w-[100vw]  text-white bg-white">
              <Ch3 />
            </section>

            </div>
      
    </>
  );
}

export default Page7;
