let links = document.querySelector('.links')
let nav = document.querySelector('nav > div')
let button = document.querySelector('.nav')

function ToggleNavBar () {
  if (links.classList.contains('linksNotHidden')) {
    links.classList.remove('linksNotHidden')
    links.classList.add('linksHidden')
  } else {
    links.classList.add('linksNotHidden')
    links.classList.remove('linksHidden')
  }
}

function backgroundColorChng () {
  if (scrollY) {
    nav.style.backgroundColor = '#000000'
  } else {
    nav.style.backgroundColor = ''
  }
}

button.addEventListener('click', () => {
  ToggleNavBar()
})

document.addEventListener('scroll', () => {
  backgroundColorChng()
})
