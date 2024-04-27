function BackendSeven(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
          Automating Downloads
  <br/><br/>
To automate the downloads of citations, ”playwright-python”, which is
the Python fork of the ”Playwright” framework was utilized. Playwright is an open-source framework for web testing and automation. It supports headless execution, i.e. execution that runs in the
background without exposing the graphical browser interaction. One of its advantages is the channels feature that enables playwright to operate against the Chrome and Edge browsers available on the host machine.
Since it only supports Chrome and Edge, Chrome web browser is added to the application as a run-time dependency. This can be omitted if one decides not to use the ”download” feature.
        </small></p>
</div>
</div>
)
}

export default BackendSeven 
