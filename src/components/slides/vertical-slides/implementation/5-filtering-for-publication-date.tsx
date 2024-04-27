import filterViaPub from '../../../../assets/filter-for-publication-year.gif'

function FilteringForPublicationDate(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={filterViaPub} className="full-screen-content"/>
<p><small>
After picking the files, to only filter via "end year", i.e. to set a maximum publication limit while filtering, one has to go through all these steps
</small></p>
</div>
</div>
)
}

export default FilteringForPublicationDate


