function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('nBtn').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('nBtn').offsetHeight);
    document.getElementById('nBtn').style.left = `${x}px`;
    document.getElementById('nBtn').style.top = `${y}px`;
}