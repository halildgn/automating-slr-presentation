function GeneratingQueries(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
The ”Query Generator” component displays all added fields to generate the
query in one view. To repeat again, the advantage that it provides over the CLI is that during
the query generation process of the CLI application, the fields could not be
reverted or modified. 

”Ebsco” and ”Scopus” query generation was also added to the
application. However, these are only prototypes that were not extensively
tested and evaluated like the other three. Nevertheless, the tests that were
conducted showed that they worked as intended.

The query generator also provides tooltips that guide users on how to
extract associated meta-data for the literature scope in each digital library
that is included in query generation. This is also expected to make a positive
contribution to user experience and productivity.
        </small></p>
</div>
</div>
)
}

export default GeneratingQueries 
