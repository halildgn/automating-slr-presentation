import indicators from '../../../../assets/filtering-boundaries.png'

function QueryGenerationBoundaries(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={indicators} className="full-screen-content"/>
<p><small>
Other than that, there is no indicator for the limits for the filtering after
the files are picked. This can result in a user having a dilemma if they haven’t
peeked at all the entries before. E.g. user doesn't know the latest possible date in all entries to filter against.
</small></p>
</div>
</div>
)
}


export default QueryGenerationBoundaries  


