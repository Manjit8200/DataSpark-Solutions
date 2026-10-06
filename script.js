document.getElementById("quote").addEventListener("submit",function(e){e.preventDefault();const d=new FormData(this);const m=document.getElementById("message");m.value=`Hi DataLink Solutions,

Name: ${d.get("name")}
Contact: ${d.get("contact")}
Service: ${d.get("service")}

Project Details:
${d.get("details")}

Please let me know the next steps and provide a quote if possible.`;m.hidden=false;m.select();});
