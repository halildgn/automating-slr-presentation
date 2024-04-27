import downloadGui from '../../../../assets/download-gui.gif'

function DownloadGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<h5>Download</h5>
<img src={downloadGui} className="full-screen-content"/>
</div>
</div>
)
}

export default DownloadGui 
