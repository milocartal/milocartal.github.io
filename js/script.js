
if (document.getElementById("tel")) {
  document.getElementById("tel").addEventListener('click', () => {
    navigator.clipboard.writeText("+33649572160");
    showToast();

  });
}

async function copyTel() {
  await navigator.clipboard.writeText("+33649572160")
  alert("Numero de téléphone copié")
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showToast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}