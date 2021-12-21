(function() {

    let toggle_button = document.querySelector('.main_header_nav_toggle_button')

    function toggle(element)
    {       
        if (element.classList.contains('visible')) {
            
            element.classList.remove('visible')

            return
        }

        element.classList.add('visible')
    }

    toggle_button.addEventListener('click', () => {
        
        let nav = document.querySelector('.main_header_nav')
        
        toggle(nav)

    })

})()