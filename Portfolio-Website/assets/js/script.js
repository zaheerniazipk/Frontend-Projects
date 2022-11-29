// Hide Close/Cross
document.querySelector('.close').style.display = 'none'

// Hide/Show Hamburger Menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-go')

    if (document.querySelector('.sidebar').classList.contains('sidebar-go')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.close').style.display = 'inline'
        }, 300)
    }
})