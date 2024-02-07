const advantagesTitleBtn = document.querySelectorAll('.advantages-title-item'),
      advantagesTitle = document.querySelectorAll('.advantages-title'),
      advantagesDivider = document.querySelectorAll('.advantages-title-divider'),
      advantagesItem = document.querySelectorAll('.advantages-item-wrapper');

advantagesTitleBtn.forEach((title, i) => {
    title.addEventListener('click', function() {
        advantagesTitle.forEach((title, i) => {
            title.classList.remove('advantages-title-active');
            advantagesDivider[i].classList.remove('advantages-title-divider-active');
            advantagesItem[i].classList.add('d-none');
        })
        advantagesTitle[i].classList.add('advantages-title-active');
        advantagesDivider[i].classList.add('advantages-title-divider-active');
        advantagesItem[i].classList.remove('d-none');
    })
})