import React ,{ useRef } from 'react'
import "../parallax/Parallax.css"
import {motion ,useScroll,useTransform} from "framer-motion"

const Parallax = (type) => {
    const ref=useRef();
    const {scrollYProgress}=useScroll({
      target:ref,
      offset:["start start","start end"]
    })
 

  const ytext=useTransform(scrollYProgress,[0,1],["0%","700%"]);

  const ybg=useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div className='parallax' ref={ref} >
        <motion.h1  className="parallax-text" style={{y:ytext}}>What I have made? </motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div style={{y:ybg}} className='planets'></motion.div>
        <motion.div  style={{x:ybg}}  className='stars'></motion.div>
        
        </div>
  )
}

export default Parallax