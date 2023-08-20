import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';

const PrevArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} inline-block bg-[#979797] text-white flex items-center justify-center w-16 h-16 rounded-full cursor-pointer`}
        // style={{ ...style, display: "inline-block", background: "red" }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft/>
      </div>
    );
}

export default PrevArrows