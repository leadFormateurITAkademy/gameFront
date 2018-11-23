document.querySelector('.choice-container').addEventListener('click', (el) => {
  if(el.target.dataset.action !== undefined) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    xhttp.open("GET", "http://192.168.33.10/move/" + el.target.dataset.action, true);
    xhttp.send();
  }
})
