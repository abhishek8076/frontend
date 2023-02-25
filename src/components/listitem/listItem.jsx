
import React, { useState, useEffect } from 'react';
import './listItem.scss';
// import axios from  "axios";
import ADAM from "./../../assets/images/adam.jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// =======================function start=======================
const ListItem = ({index}) => {
  const [isHovered,setHovered]=useState(false)
  return (
    <>
      <div className='listItem' 
       style={{
        left: isHovered && index*150 -20+index*2.5   
       }}
      onMouseEnter={()=>setHovered(true)} 
      onMouseLeave={()=>setHovered(false)}>
        <div  >
          <img src={ADAM} alt="img" />
        </div>
        <div className='itemInfo'>
          <div className='icon'>
            <PlayArrowIcon />
            <AddOutlinedIcon />
            <ThumbUpOutlinedIcon />
            <ThumbDownOffAltOutlinedIcon />
          </div>
          <div className='itemInfo'>
            <span className='time'>
              1 hour 14 min
            </span>
            <span className='ageLimit'>
              13+
            </span>
            <span className='year'>2022</span>
          </div>
            <div className='desc'>
            Time-travelling fighter pilot Adam Reed teams up
             with his 12-year-old self for a mission to save
            the future after unintentionally crash landing in 2022.
            </div>
        </div>
      </div>

    </>
  )

}
export default ListItem;