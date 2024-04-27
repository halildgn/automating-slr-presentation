import myBuildsGui from '../../../../assets/my-builds-gui.gif'

function MyBuildsGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<h5>My Builds</h5>
<img src={myBuildsGui} className="full-screen-content"/>
</div>
</div>
)
}

export default MyBuildsGui  
