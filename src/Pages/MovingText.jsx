import React from 'react'

function MovingText(props) {
  return (
    <div
            ref={props.abc}
            className="content  overflow-y-hidden relative leading-[34px] flex flex-col  "
          >
            <p className="mov1cont text-white w-[500px] font-extrabold text-[2.75rem]">
              I AM <span className="text-[#00ff16]  "> DARK MODE</span>
            </p>
            <p className="mov1cont text-white ml-[-6px] font-extrabold text-8xl">
              DEVELOPER
            </p>
            <p className="text-white mov1cont font-extrabold text-[2.75rem]">TO HIRE</p>
          </div>
  )
}

export default MovingText