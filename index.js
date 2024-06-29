document.querySelectorAll('#toggle-icon').forEach(icon => {
    icon.addEventListener('click', ()=> {
        const accordionItem = icon.closest('.msg-option-acordion');
        const content = accordionItem.querySelector('.show-msg-text');
        accordionItem.classList.toggle('active');
        content.style.display = 'none';

        if(accordionItem.classList.contains('active')) {
            content.style.display = 'block'
            icon.src = '/assets/images/icon-minus.svg';
        } else 
            icon.src = '/assets/images/icon-plus.svg';
    })
})