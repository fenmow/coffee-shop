let btn = document.querySelector(".btn-show")
btn.addEventListener('click', ()=> {
  let searchBar = document.querySelector('.search-bar')
  searchBar.classList.toggle('show')
})


window.addEventListener('scroll', ()=> {
  if (window.scrollY >50) {
    let searchBar = document.querySelector('.search-bar')
    searchBar.classList.remove('show')
    let header = document.querySelector('.header')
    header.classList.add('header-background')
  } else {
    let header = document.querySelector('.header')
    header.classList.remove('header-background')
  }
})