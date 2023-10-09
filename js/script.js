if (document.getElementById('work-link')) {
  document.getElementById('work-link').addEventListener('click', () => {
    document.getElementById('work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('contact-link')) {
  document.getElementById('contact-link').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('cv-link')) {
  document.getElementById('cv-link').addEventListener('click', () => {
    document.getElementById('cv-section').scrollIntoView({behavior: "smooth"})
  })
}

if(document.getElementById("tel")){
  document.getElementById("tel").addEventListener('click',()=>{
    navigator.clipboard.writeText("+33649572160")
  });
}

async function copyTel(){
  await navigator.clipboard.writeText("+33649572160")
  alert("Numero de téléphone copié")
}