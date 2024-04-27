import QRCode from "react-qr-code";

function SlideOne(){
  return (
    <section className="full-screen-content">
      <div  style={{"height": "40%", "width": "100%"}}>
      <div className="no-wrap">
https://halildgn.github.io/automating-slr-presentation/
      </div >
        <br />
        <div>
When viewing on mobile phone, please use landscape mode by rotating your phone sideways.
      </div>
      </div>
<div style={{ height: "60%", maxHeight: "60%",  maxWidth: "100%", width: "100%" }}>
  <QRCode
    size={256}
    style={{ height: "90%", marginBottom: "10%" , maxWidth: "100%", width: "100%" }}
    value={"https://halildgn.github.io/automating-slr-presentation/"}
    viewBox={`0 0 256 256`}
  />
</div>
</section>
  )
}

export default SlideOne;
