var btnSearch = document.querySelector('.search-box_btn')

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling); 
    this.previousElementSibling.focus();
})