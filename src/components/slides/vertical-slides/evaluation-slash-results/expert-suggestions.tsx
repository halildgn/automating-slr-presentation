function ExpertSuggestions(){
return (
  <div className="full-screen-content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <p><small>
• Expert feedback was overall positive
<br/>
• The graphical user interface has lacked "overall intuitivity" and "overall user experience" from the perspective of experts
<br/><br/>
Explicit expert suggestions:
<br/><br/>
"In the query generator i would move the reset button to the bottom (below generate queries) when the queries are created add an instruction on top that lets the user know they should now copy these queries to the respective database searches (also pointing to the individual tooltips as concrete instructions per database) Add a tooltip / short instruction in filtering to tell the user that they need to pick bib files (and add the info to download these with the queries I am a bit worried that some information gets lost in the tooltips and should instead be instruction printed directly on the screen"
<br/><br/>
"I would prefer to have all features and libraries etc accessible from one application instead of manually downloading biblists etc. Also it would be great to visualise the list by parsing the bib file instead of generating a new bib every time."
        </small></p>
</div>
</div>
)
}

export default ExpertSuggestions 
