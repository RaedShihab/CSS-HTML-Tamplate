
if(localStorage.getItem('name') == null) {
    const name = prompt('Add name');
    localStorage.setItem('name', name)
}

const getName = localStorage.getItem('name')

 document.getElementById('id').innerHTML = getName

