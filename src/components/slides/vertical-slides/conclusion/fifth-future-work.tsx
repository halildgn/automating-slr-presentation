function FifthFutureWork(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>

<p><small>
• Query generation for SCOPUS and EBSCO libraries are prototypes and are not well tested against unlike the generation that Zhang implemented for WOS,IEEE Explore and ACM libraries. 
<br/><br/>
	&#8594; A well tested implementation of these could be implemented.
<br/><br/>
• Bundling the whole application was not consistent for all operating systems and required a lot of effort from the end user's end, hence it was aborted and could be counted as not succesful.
<br/><br/>
	&#8594; If a new method that doesn't utilize pre-compiled bootloader binaries is found, apps can be frozen and this freezing process could be automated via a CI/CD pipeline like "Github action".
<br/><br/>
&#8594; Download functionality is now available for only one library. It could be extended for others. for other libraries, extend query generation functions to other libraries
</small></p>
</div>
</div>
)
}

export default FifthFutureWork
