import filteringGui from '../../../../assets/filtering-gui.gif'

function FilteringGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<h5>Filtering</h5>
<img src={filteringGui} className="full-screen-content"/>
</div>
</div>
)
}

export default FilteringGui  
