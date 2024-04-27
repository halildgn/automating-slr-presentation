function Download(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p>
The ”Download” component provides the user with an interface with a drop-
down to pick the digital library and an input field to enter the query to search
against. After the user fills the fields out and clicks on the download button,
the backend downloads the meta-data in the background, and following that
frontend displays either a success alert or an error alert with the appropriate
message to guide the user. It has the potential of downloading meta-data in
a single view when extended for other libraries(at the time of writing, it only
supports ”WOS”). This should boost productivity and help automate
systematic literature reviews even further.
        </p>
</div>
</div>
)
}

export default Download 
