function TypeAnnotationsMissing(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
<p><small>
Type annotations are missing which would make it harder to maintain the
application, beside that, it would be harder to extend and optimize things
further for future contributors. Also there is no documentation beside the thesis manuscript. 

In GUI app,  Python type annotations were made use of as type hints (since the
Python runtime doesn’t enforce function and variable type annotations)
to make the application more maintainable. In their study, Grazia
et al. suggest Python developers to regularly use type-checkers to also
increase developer awareness. Furthermore, documentation has been
conducted in the git repository's "README" and comments were made in the necessary spots of the codebase to guide future contributors.

</small></p>
<p><small>
L. Di Grazia and M. Pradel, “The evolution of type annotations
in python: An empirical study”, in Proceedings of the 30th ACM
Joint European Software Engineering Conference and Symposium on
the Foundations of Software Engineering, ser. ESEC/FSE 2022
</small></p>
</div>
</div>
)
}

export default TypeAnnotationsMissing  




