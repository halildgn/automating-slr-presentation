import Unwin from "./vertical-slides/related-work/cli-vs-gui/2-unwin";
import Kavakli from "./vertical-slides/related-work/cli-vs-gui/3-kavakli";
import CliGuiIntro from "./vertical-slides/related-work/cli-vs-gui/intro";
import Zhang from "./vertical-slides/related-work/systematic-literature-reviews/10-zhang";
import Tsafnat from "./vertical-slides/related-work/systematic-literature-reviews/5-tsafnat";
import Chapman from "./vertical-slides/related-work/systematic-literature-reviews/6-chapman";
import Scells from "./vertical-slides/related-work/systematic-literature-reviews/7-scells";
import Eves from "./vertical-slides/related-work/systematic-literature-reviews/8-eves";
import Marshall from "./vertical-slides/related-work/systematic-literature-reviews/9-marshall";
import KitchenhamSoftware from "./vertical-slides/related-work/systematic-literature-reviews/kitchenham-software";
import Prisma2009 from "./vertical-slides/related-work/systematic-literature-reviews/prisma-2009";
import Prisma2020 from "./vertical-slides/related-work/systematic-literature-reviews/prisma-2020";
import Quorom from "./vertical-slides/related-work/systematic-literature-reviews/quorom";
function SlideThree(){
  return (
<>
   <section>
      <section>
  <h1>Related Work</h1> 
    </section>
  <section className="full-screen-content">
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>

          <h2>Systematic Literature Reviews</h2>
<p>There had been work going on to standardize the way of conducting the literature reviews and making them more efficient</p>
</div>
</div>
        </section>
      <section className="full-screen-content"><KitchenhamSoftware/></section>
      <section className="full-screen-content"><Quorom/></section>
<section className="full-screen-content"><Prisma2009/></section>
<section className="full-screen-content"><Prisma2020/></section>
<section className="full-screen-content"><Tsafnat /></section>
<section className="full-screen-content"><Chapman/></section>
<section className="full-screen-content"><Scells/></section>
<section className="full-screen-content"><Eves/></section>
<section className="full-screen-content"><Marshall/></section>
<section className="full-screen-content"><Zhang/></section>
  <section className="full-screen-content">
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
          <h2>Command Line Interfaces versus Graphical User Interfaces</h2>
</div>
</div>
        </section>
<section className="full-screen-content"><CliGuiIntro/></section>
<section className="full-screen-content"><Unwin/></section>
<section className="full-screen-content"><Kavakli/></section>
</section>
  </>
  )
}

export default SlideThree;
