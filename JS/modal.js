var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var btnClose = document.querySelector('.modal_footer button')

function toggleModal(){
    modal.classList.toggle('hide')
}

function thankyou(){
    modal.classList.toggle('hide')
    alert("Cảm ơn bạn đã mua hàng")
}

btnClose.addEventListener('click', thankyou)
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
