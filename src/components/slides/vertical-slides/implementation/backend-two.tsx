function BackendTwo(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
          Architectural Style
          <br/><br/>
To provide communication between the frontend and backend, one could
take advantage of the websockets that WebUI utilizes. However, this reduces
the flexibility, i.e. it would get harder to extend the application, it would
get harder to incorporate the backend into some other project that uses
a different frontend, it would make it harder to be transformed into a
deployable application, etc. An architectural style that has capabilities to
enable these features should have been chosen, meaning that it should have
been well-established and also future-proof.
<br/><br/>
Due to these reasons, REST was employed as the main backend architectural style which is stateless and resource-oriented. As Pautasso et al. illustrated the conceptual and technological differences between RESTful web services and WSDL/SOAP-based web services in their research, it was clear that REST comparatively is simpler and it is better in terms of flexibility and control.
<br/><br/>
Since the architectural style was decided, it was time to pick a framework
to structure the code. Flask which is a lightweight unopinionated Python
web-framework, was chosen to power the backend.
        </small></p>
  <p><small>
C. Pautasso, O. Zimmermann, and F. Leymann, “Restful web services
vs. ”big”’ web services: Making the right architectural decision”, in
Proceedings of the 17th International Conference on World Wide Web
  </small></p>
</div>
</div>
)
}

export default BackendTwo 
