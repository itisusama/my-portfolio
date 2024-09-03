"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({btnStyle}) => {
  const swiper = useSwiper()
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      <button  className={btnStyle} onClick={() => swiper.slidePrev()}><PiCaretLeftBold/></button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}><PiCaretRightBold/></button>
    </div>
  )
}

export default WorkSliderBtns
