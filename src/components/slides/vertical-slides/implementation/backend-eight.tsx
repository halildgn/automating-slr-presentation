function BackendEight(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
          <p><small>
Persisting the Query Builds
  <br/><br/>
Query structures are kept in a file called ”config.db” that is persisted in the
same directory as the main Python script, ”automating-slr.py”. This file is
managed by pickleDB which is a simple key-value database.
        </small></p>
</div>
</div>
)
}

export default BackendEight 
