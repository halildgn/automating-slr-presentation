import havingToReset from '../../../../assets/having-to-reset-gui.gif'

function HavingToResetScriptGui(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={havingToReset} className="full-screen-content"/>
<p><small>
In GUI, modifying and removing fields is possible, so one doesn't have to reset everything
</small></p>
</div>
</div>
)
}

export default  HavingToResetScriptGui


