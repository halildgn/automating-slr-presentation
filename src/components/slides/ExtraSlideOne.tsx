import FifthFutureWork from "./vertical-slides/conclusion/fifth-future-work";
import FirstConclusions from "./vertical-slides/conclusion/first-conclusions";
import FourthFutureWork from "./vertical-slides/conclusion/fourth-future-work";
import SixthFutureWork from "./vertical-slides/conclusion/sixth-future-work";
// import SecondContributions from "./vertical-slides/conclusion/second-contributions";
// import ThirdLimitations from "./vertical-slides/conclusion/third-limitations";

function ExtraSlideOne(){
  return (
<>
   <section>
      <section>
  <h1>Conclusions</h1> 
    </section> 
<section className="full-screen-content"><FirstConclusions/></section>
{/* <section className="full-screen-content"><SecondContributions/></section> */}
{/* <section className="full-screen-content"><ThirdLimitations/></section> */}
    <section>
  <h3>Limitations and Future Work</h3> 
    </section>
<section className="full-screen-content"><FourthFutureWork/></section>
<section className="full-screen-content"><FifthFutureWork/></section>
<section className="full-screen-content"><SixthFutureWork/></section>

</section>
  </>
  )
}

export default ExtraSlideOne;
