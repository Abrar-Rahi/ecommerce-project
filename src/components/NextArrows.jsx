import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const NextArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} inline-block bg-[#979797] text-white flex items-center justify-center w-16 h-16 rounded-full cursor-pointer`}
        // style={{ ...style, display: "inline-block", background: "red" }}
        onClick={onClick}
      >
        <FaLongArrowAltRight/>
      </div>
    );
}

export default NextArrows