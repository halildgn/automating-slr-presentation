function FrontendTechnicalDetailsTwo(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
As the application grows, it gets harder to manage the state sustainably.
Therefore, as the state management tool of the application, ”Zustand” was chosen.
<br/><br/>
The build tool of the choice is ”Vite” which is both a build tool and
a bundler that is fast and provides really fast ”Hot Module Replacement”
which in simple terms means that during the development cycle, the code changes are being reflected to the frontend in milliseconds most of the time,
so that the developer can see the implications of the code immediately.
To consume the build from the backend, ”vite-plugin-single-file”
was used to bundle everything into a single html file. This is helpful when
launching the application from the Python script.
<br/><br/>
The design components are provided via ”Material UI”.
        </small></p>
</div>
</div>
)
}

export default FrontendTechnicalDetailsTwo 
