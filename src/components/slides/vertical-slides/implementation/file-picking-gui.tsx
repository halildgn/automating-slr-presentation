import filePickingGui from '../../../../assets/file-picking-gui.gif'

function FilePickingGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={filePickingGui} className="full-screen-content"/>
<p><small>
Picking files made more efficient via the usage of a file picker
</small></p>
</div>
</div>
)
}

export default FilePickingGui  
