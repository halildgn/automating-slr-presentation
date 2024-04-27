import havingToReset from '../../../../assets/having-to-reset.gif'

function HavingToResetScriptCli(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={havingToReset} className="full-screen-content"/>
<p><small>
While generating queries if one decides to modify or remove
some fields, this is currently not possible without restarting the script
</small></p>
</div>
</div>
)
}

export default  HavingToResetScriptCli


