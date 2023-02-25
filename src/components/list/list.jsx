
import React, { useState, useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listitem/listItem';
import './list.scss';


// =======================function start=======================1.05.47
const List = () => {
    const [slideNumber, setslideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const ListRef = useRef();

    const handelClick = (dir) => {
        setIsMoved(true);
        let distance = ListRef.current.getBoundingClientRect().x - 50;
        if (dir == "left" && slideNumber > 0) {
            setslideNumber(slideNumber - 1);
            ListRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (dir == "right" && slideNumber < 5) {
            setslideNumber(slideNumber + 1)
            ListRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <>
            <div className='list'>
                <span className='listTitle'>Abhishek</span>
                <div className='wrapper'>
                    <ArrowBackIosNewIcon className='sliderArrow left'
                        onClick={() => handelClick("left")}
                        style={{ display: !isMoved && "none" }} />
                    <div className="container" ref={ListRef}>
                        <ListItem index={0} />
                        <ListItem index={1} />
                        <ListItem index={2} />
                        <ListItem index={3} />
                        <ListItem index={4} />
                        <ListItem index={5} />
                        <ListItem index={6} />
                        <ListItem index={7} />
                        <ListItem index={8} />
                        <ListItem index={9} />
                        <ListItem index={10} />
                        <ListItem index={11} />
                        <ListItem index={12} />
                        <ListItem index={13} />
                        <ListItem index={14} />
                        <ListItem index={15} />
                        <ListItem index={16} />
                        <ListItem index={17} />

                    </div>
                    <ArrowForwardIosIcon className='sliderArrow right' onClick={() => handelClick("right")} />
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default List;