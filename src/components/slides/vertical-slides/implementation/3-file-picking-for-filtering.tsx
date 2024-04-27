import filePicking from '../../../../assets/file-picking.gif'

function FilePickingCli(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={filePicking} className="full-screen-content"/>
<p><small>
To be able to pick files for filtering, CLI requires the user to go through
some steps that take requires manual work and time since one would have to
perform the steps
</small></p>
</div>
</div>
)
}

export default FilePickingCli  
