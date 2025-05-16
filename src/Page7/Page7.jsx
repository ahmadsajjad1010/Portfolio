import React from "react";
import Ch1 from "./PageInnerContent/Ch1";
import Ch2 from "./PageInnerContent/Ch2";
import Ch3 from "./PageInnerContent/Ch3";

import Page9 from "../Page9/Page9";

function Page7() {
 


  return (
    <>
    
          <div className="content">
            {/* First content */}

           
            <section className="section w-full z-[] hero">
              <Ch1 />
            </section>
            {/* Second content */}
<section>
        <Page9 />
        {/* card carousel */}
</section>
            <section  className="section2  relative w-[100vw]  bg-white">
              <Ch2 />
            </section>
            <section className="section4 w-[100vw]  text-black  bg-white">
              <Ch3 />
            </section>

            </div>
      
    </>
  );
}

export default Page7;
