var divMain = window.document.querySelector("div#main")
divMain.innerHTML = "Olá DIV"

divMain.style.color = "orange"

divMain.className = "otherClass"


function actMouseClick(){
  divMain.innerText = "MouseClick"
}

function actMouseEnter(){
  divMain.innerText = "MouseEnter"
}

var divListener = window.document.querySelector("div#listener")
divListener.innerHTML = "Olá Listener"
divListener.addEventListener('mouseenter', function(){
  divListener.innerText = 'Entrou'
})
divListener.addEventListener('mouseout', function(){
  divListener.innerText = 'Saiu'
})

divListener.onclick = (event) => {
  divListener.innerText = 'Clicada'
}
