import overview from '../../../../assets/cli_overview.png'

function CliOverview(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<img src={overview} className="full-screen-content" />

<p><small>
Existing CLI application used sequential execution of sub-module functions inside a main function, utilizing while loops to accept inputs while outputting
the instructions. This approach doesn’t provide flexibility since the end-user has to perform actions in a given order
</small></p>
</div>
</div>
)
}

export default CliOverview 


