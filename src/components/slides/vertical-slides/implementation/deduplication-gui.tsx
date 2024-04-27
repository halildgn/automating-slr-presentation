import deduplicationGui from '../../../../assets/deduplication-gui.gif'

function DeduplicationGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={deduplicationGui} className="full-screen-content"/>
<p><small>
Removing the duplicates in GUI is as easy as just clicking on the filter button 
</small></p>
</div>
</div>
)
}

export default DeduplicationGui  


