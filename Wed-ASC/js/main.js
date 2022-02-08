const btnMenu = document.querySelector('.js-btn-menu')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-btn-close')
const modalContainer = document.querySelector('.js-modal-container')


function showHomeMenu(){
      modal.classList.add('open')
}

function closeHomeMenu(){
      modal.classList.remove('open')
}

btnMenu.addEventListener("click", showHomeMenu)

modalClose.addEventListener("click", closeHomeMenu)


modalContainer.addEventListener('click', function(event){
      event.stopPropagation()
  })


  window.onclick = function(event) {
    if (event.target == modal) {
        closeHomeMenu()
    }
  }