function BackendFive(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
          Query Generation
  <br/><br/>
As mentioned in the Technology Selection section, the core logic of the func-
tions that generate the queries for ”IEEE Explore”, ”ACM” and ”WOS”
digital libraries were kept unchanged other than receiving client’s configu-
ration from the endpoint instead of making use of Python’s native ”input”
function in loops to pipe standard input from the CLI into the variables.
Additionally, ”Ebsco” and ”Scopus” were added. However, these
are only prototypes that were not extensively tested and evaluated like the
other three. Nevertheless, the tests that were conducted showed that they
worked as intended.
        </small></p>
</div>
</div>
)
}

export default BackendFive 
