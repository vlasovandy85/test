const body = document.querySelector('body'),
      mask = document.querySelector('.mask'),
      requestStepTitles = ['Общее даные', 'Укажите сумму ваших долгов', 'Какое имущество у вас имеется?', 'Сколько времени вы не оплачиваете долги?', 'У вас есть действующая ипотека или автокредит?', 'У вас есть обязательства по выплате алиментов?'],
      requestStepTitle = document.querySelector('.request-step-title'),
      hamburger = document.querySelector('.ham'),
      navMobileMenu = document.querySelector('.nav-mobile-menu');


function singleChoise(index) {
    const checkBox = document.querySelectorAll(`.cbx-${index}`);
  
    checkBox.forEach(checkbox => {
      checkbox.addEventListener('click', function() {
        checkBox.forEach(checkbox => {
          checkbox.checked = false
        })
        this.checked = true
      })
    })
  }
  singleChoise(12);
  singleChoise(13);
  singleChoise(14);
  singleChoise(15);
  
  
  
  const formItem = document.querySelectorAll('.request-form-item');
  const nextStepRequest = document.querySelectorAll('.request-form-next');
  const prevStepRequest = document.querySelectorAll('.request-form-prev');
  const stepHTML = document.querySelector('.request-step');
  const requestClose = document.querySelector('.request-close');
  
  
  for(let i = 0; i < formItem.length - 1; i++) {
    nextStepRequest[i].addEventListener('click', function() {
      if(i === 0 && formItem[i].querySelectorAll('input')[0].value.length > 0 && formItem[i].querySelectorAll('input')[1].value.length > 0) {
        formItem[i].classList.add('d-none');
        formItem[i + 1].classList.remove('d-none')
        stepHTML.innerText = i + 2;
      }
      const cbx = Array.from(formItem[i].querySelectorAll('.cbx input'));
      if((i === 1 || i === 2 || i === 3 || i === 4) && cbx.some(item => item.checked)) {
        formItem[i].classList.add('d-none');
        formItem[i + 1].classList.remove('d-none')
        stepHTML.innerText = +stepHTML.innerText + 1;
      }
    })
  }
  
  for(let i = 1; i < formItem.length; i++) {
    prevStepRequest[i - 1].addEventListener('click', function() {
      stepHTML.innerText = +stepHTML.innerText - 1;
      formItem[i].classList.add('d-none');
      formItem[i - 1].classList.remove('d-none')
    })
  }
  
  $(document).ready(function () {
    $('#phone').inputmask('+7 (999) 999-99-99');
  });
  
  
  const cbx15 = document.querySelectorAll('.cbx-15');
  const sendBtn = document.querySelector('.send-btn');
  
  cbx15.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
      sendBtn.disabled = false
    })
  })

function toggleRequest() {
    const request = document.querySelector('.request');
    request.classList.toggle('d-none');
    mask.classList.toggle('d-none');
    body.classList.toggle('overflow-hidden');
}

function menuToggleRequest() {
  const request = document.querySelector('.request');
  request.classList.toggle('d-none');
  navMobileMenu.classList.toggle('nav-mobile-menu-active');
  hamburger.classList.toggle('active');
}

requestClose.addEventListener('click', toggleRequest);


const phoneIcon = document.querySelector('.phone-icon');

setInterval(() => {
    phoneIcon.classList.toggle('fa-shake');
}, 2900)

hamburger.addEventListener('click', () => {
    navMobileMenu.classList.toggle('nav-mobile-menu-active');
    mask.classList.toggle('d-none');
    body.classList.toggle('overflow-hidden');
})

const modalClose = document.querySelector('.modal-close');
      modal = document.querySelector('.modal');

function toggleModal() {
  modal.classList.toggle('d-none');
  mask.classList.toggle('d-none');
}

function menuToggleModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('d-none');
  navMobileMenu.classList.toggle('nav-mobile-menu-active');
  hamburger.classList.toggle('active');
}

modalClose.addEventListener('click', toggleModal);


const inputsArray = document.querySelectorAll ('.modal-form input'),
      modalBtn = document.querySelector ('.modal-btn');

modalBtn.addEventListener('click', () => {
  if (Array.from(inputsArray).every(item => item.value.trim() !== '')) {
    modalBtn.type = 'submit';
    document.querySelector('.modal-form').submit();
  }
});