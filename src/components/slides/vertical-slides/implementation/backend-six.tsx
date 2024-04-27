function BackendSix(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
         Filtering
  <br/><br/>
After picking the files in the frontend, as mentioned in the previous section,
the limits of the filtering parameters are displayed. Following this, it is
not desirable to require the user to pick files again since it would have a
detrimental effect on the user experience and productivity. To save user from
this chore, an in memory caching strategy has been introduced. After filtering,
files are saved as a CSV file to host operating system’s ”Downloads” directory
with the following format, ”filtered results availableNumber.csv”. As with
the ”Query Generation”, ”Filtering” also receives the client’s configuration
from the endpoint instead of making use of Python’s native ”input” function
in loops to pipe standard input into the variables as it was done with the
CLI.
        </small></p>
</div>
</div>
)
}

export default BackendSix 
