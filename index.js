// template_rlw09fi
//service_0ap1bql
// vZvjZZO-6BzLZ6Kik
let isModalOpen = false
let constrastToggle = false

function toggleContrast() {
    constrastToggle = !constrastToggle
    if (constrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_0ap1bql',
            'template_rlw09fi',
            event.target,
            'vZvjZZO-6BzLZ6Kik'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on sharathpm@yahoo.com"
        )
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}