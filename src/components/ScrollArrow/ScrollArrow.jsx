import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./ScrollArrow.scss";

function ScrollArrow() {
  const [ showArrow, setShowArrow ] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            setShowArrow(true)
        } else {
            setShowArrow(false);
        }
    })
  }, [])

  const handleScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
  }

  return (
    <div className="scroll-arrow">
        {showArrow && (
            <BsFillArrowUpCircleFill className="scroll-arrow__icon" onClick={handleScroll}/>
        )}
    </div>
  )
}

export default ScrollArrow;