const showMore = document.querySelectorAll('.questions-item-more'),
      descrItem = document.querySelectorAll('.questions-item-descr');

showMore.forEach((item, i) => {
    item.addEventListener('click', function() {
        descrItem.forEach((item, j) => {
            if(item.classList.contains('questions-item-descr-active') && i !== j) {
                item.classList.toggle('questions-item-descr-active');
            }
        });
        descrItem[i].classList.toggle('questions-item-descr-active');
    })
})