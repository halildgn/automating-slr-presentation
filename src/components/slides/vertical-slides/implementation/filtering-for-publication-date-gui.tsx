import filterViaPub from '../../../../assets/filter-for-publication-year-gui.gif'

function FilteringForPublicationDateGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={filterViaPub} className="full-screen-content"/>
<p><small>
Just need to pick the date
</small></p>
</div>
</div>
)
}

export default FilteringForPublicationDateGui


