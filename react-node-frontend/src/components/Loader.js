import React, { useRef } from 'react'
import './loader.css';

const Loader = (props) => {

    /* Get all props and set its default values */
    var { width, height, fontSize, duration } = props;
    if (!width)
        width = 70;
    if (!height)
        height = 70;
    if (!fontSize)
        fontSize = 16;
    if (!duration)
        duration = 6





    //Loader Refs

    var mainTimerRef = useRef(null)

    var timerRef = useRef(null)
    var timerRef2 = useRef(null)
    var timerRef3 = useRef(null)


    //Loader status
    var status = "paused";


    var progress = 0;

    //Function to display % animataion text
    var animate = () => {
        if (progress == 100) {
            clearInterval(animateGlobal)
            progress = 0;
            return;
        }
        progress++;
        timerRef3.current.textContent = progress + "%"
    }

    // setInterval(animate,600)

    var animateGlobal;

    //Pause Animation
    function stopAnimation() {
        status = "paused";
        if (animateGlobal) {
            clearInterval(animateGlobal);
        }
        timerRef.current.classList.add('paused')
        timerRef2.current.classList.add('paused')
        mainTimerRef.current.classList.add('paused')



    }

    //Start/resume animaion

    function startAnimation() {
        status = "start";
        animateGlobal = setInterval(animate, duration * 10);
        timerRef.current.classList.remove('paused')
        timerRef2.current.classList.remove('paused')
        mainTimerRef.current.classList.remove('paused')


    }

    //Reset animation
    function resetAnimation() {

        var el = timerRef.current;
        el.style.animation = 'none';


        el = timerRef2.current;
        el.style.animation = 'none';

        el = mainTimerRef.current;
        el.style.animation = 'none';
        progress = 0;


        setTimeout(() => {
            stopAnimation();

            var el = timerRef.current;

            el.style.animation = null;
            el.style.WebkitAnimationDuration = (duration) + "s";


            el = timerRef2.current;
            el.style.animation = null;

            el.style.WebkitAnimationDuration = (duration / 2) + "s"

            el = mainTimerRef.current;
            el.style.animation = null;

            el.style.WebkitAnimationDelay = (duration / 2) + "s"

        }, 10)

    }







    var clipRect = `rect(0px, ${width}px, ${width}px, ${width / 2}px)`
    var clipRectCircle = `rect(0px, ${width / 2}px, ${width}px, ${0}px)`

    return (
        <div>
            <div style={{ position: "relative", height: "fit-content", minHeight: height + "px", minWidth: width + "px", display: "flex", justifyContent: "center", transform: "rotate(180deg)" }}>
                <div ref={mainTimerRef} className='loader-main loader-animate paused' style={{ width: width + "px", height: height + "px", fontSize: fontSize + "px", zIndex: "100", clip: clipRect, WebkitAnimationDelay: (duration / 2) + "s" }} data-anim="base wrapper" >

                    <div ref={timerRef} class="loader-circle paused" style={{ width: (width - 20) + "px", height: (height - 20) + "px", fontSize: fontSize + "px", zIndex: "100", clip: clipRectCircle, borderRadius: (width / 2) + "px", WebkitAnimationDuration: duration + "s" }} data-anim="base left"></div>
                    <div ref={timerRef2} class="loader-circle paused" style={{ width: (width - 20) + "px", height: (height - 20) + "px", fontSize: fontSize + "px", zIndex: "100", clip: clipRectCircle, borderRadius: (width / 2) + "px", WebkitAnimationDuration: (duration / 2) + "s" }} data-anim="base right"></div>
                    <div style={{ position: "absolute", transform: "translate(-50)" }}>
                    </div>
                </div>
                <div className='' style={{ width: width + "px", height: height + "px", fontSize: fontSize + "px", zIndex: "100", clip: clipRect, display: "flex", justifyContent: "center", alignItems: "center" }} data-anim="base wrapper" >


                    <div style={{ position: "absolute", transform: "rotate(180deg)" }}>
                        <p ref={timerRef3}>{progress}%</p>
                    </div>
                </div>
            </div>
            <div style={{ margin: "auto" }}>
                <button className='nav-btns' onClick={() => { if (status == "paused") startAnimation(); }}>Start</button>
                <button className='nav-btns' onClick={() => { if (status == "start") stopAnimation(); }}>Pause</button>
                <button className='nav-btns' onClick={resetAnimation}>Reset</button>
            </div>

        </div>

    )
}

export default Loader