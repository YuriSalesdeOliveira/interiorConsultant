(function() {

    let invisible_button = document.querySelector('.main_header_nav_invisible_button')
    let visible_button = document.querySelector('.main_header_nav_visible_button')

    function toggle(elementClass)
    {   
        let element = document.querySelector(`.${elementClass}`)    

        if (element.classList.contains('visible')) {
            
            element.classList.remove('visible')

            return
        }

        element.classList.add('visible')
    }

    invisible_button.addEventListener('click', () => toggle('main_header_nav'))
    visible_button.addEventListener('click', () => toggle('main_header_nav'))

})()