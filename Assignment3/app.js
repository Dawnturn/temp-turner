const sidePanel = document.querySelector('aside')
const toggleBtn = document.querySelector('.bx-chevron-right')
const dim = document.querySelector('.dim')
const minimize = localStorage.getItem('side-panel')
const light = document.querySelector('.light-mode')
const dark = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const lightreload = localStorage.getItem('assignment3')

const reload = () => {
    if(minimize === 'minimize'){
        sidePanel.classList.add('minimize')
    }

    if(lightreload === 'light-mode'){
        body.classList.add('light')
    }
}

reload()

toggleBtn.addEventListener('click', () => {
    sidePanel.classList.toggle('minimize')
    toggleBtn.classList.toggle('rotate-btn')
    dim.classList.toggle('lucid')
    localStorage.setItem('side-panel', 'minimize')
})

light.addEventListener('click', (e) => {
    body.classList.add('light')
    localStorage.setItem('assignment3', 'light-mode')
    console.log(e)
})

dark.addEventListener('click', () => {
    body.classList.remove('light')
    localStorage.setItem('assignment3', 'dark-mode')
})

dim.addEventListener('click', () => {
    sidePanel.classList.add('minimize')
    dim.classList.remove('lucid')
})