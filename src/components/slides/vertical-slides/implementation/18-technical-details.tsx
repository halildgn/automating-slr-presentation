function FrontendTechnicalDetails(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
Since a web-based approach has been chosen, a decision needs to be made
about the implementation language. There are choices other than Javascript,
but in the end, they all compile to Javascript code, with a few experimental
exceptions that are not supported by all runtimes. In Javascript, types
are only known at runtime. This makes it harder to catch bugs, as no
static analysis is performed. However, the main concern in our case is
maintainability. The lack of types and type definitions makes it hard for
contributors to work on a project. Typescript is a superset of the Javascript
language that allows both static analysis and gradual typing, which would
help future contributors understand the codebase better. Any Javascript
code is executable by Typescript, but not vice versa.
<br></br>
G. Bierman, M. Abadi, and M. Torgersen, “Understanding typescript”,
vol. 8586, Jul. 2014, pp. 257–281
<br/><br/>
Writing plain Javascript causes unstructured code which is hard to maintain,
hence "React" which is a declarative Javascript library that helps to write
structured code in an intuitive way, was utilized.
        </small></p>
</div>
</div>
)
}

export default FrontendTechnicalDetails 
