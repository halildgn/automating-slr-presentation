import {useEffect, useRef} from "react";
import Countdown from "react-countdown";
import hljs from 'highlight.js';
import  "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Reveal from 'reveal.js';
import "reveal.js/plugin/highlight/monokai.css";
import {SlideZero,SlideOne,SlideTwo,SlideThree,SlideFour,SlideFive, ExtraSlideOne} from "./components/slides/index";

function App() {
    const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance
    const timerRef = useRef<Countdown| null>(null);

    useEffect(() => {
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
        });

        deckRef.current.initialize({
      plugins:[
    ],
   dependencies: [
        {src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad();}}
    ],
      autoPlayMedia: true,
    }).then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
    <>
        <Countdown autoStart={false} ref={timerRef} date={Date.now() + 900000} renderer={
({minutes, seconds }) => {
          return (
     <span className="timer" onClick={
()=>{
  if(timerRef.current && timerRef.current.api){
              timerRef.current.api.start()
                    } 
          }
            }>{minutes}:{seconds}</span>
          )
}
      }

  /> 
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <SlideZero />
                <SlideOne />             
                <SlideTwo />
                <SlideThree />
                <SlideFour />
                <ExtraSlideOne />
                <SlideFive />
            </div>
        </div>
        </>
    );
}

export default App;
