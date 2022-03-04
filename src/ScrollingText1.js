import React from "react";
import Marquee from "react-fast-marquee";
import './ScrollingText.css';

function ScrollingText1(){
    return(
        <div className="scrolling__text1">
            <Marquee speed='100' direction='right'>
                <strong className="scr1">SAHARA - THE OCEAN OF GADGETS</strong>
                

            </Marquee>
        </div>
        
        

    );
}
export default ScrollingText1;