setTimeout (() => {
    if(modal.classList.contains('d-none')) {
        modal.classList.toggle('d-none');
        mask.classList.toggle('d-none');
    }
}, 5000);