document.addEventListener('DOMContentLoaded', function() {
  // смена цвета при скроле
  const header = document.querySelector('.header');
  function changeHeaderColor() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      header.classList.add('header--bgc');
    } else {
      header.classList.remove('header--bgc');
    }
  }

  window.addEventListener('scroll', changeHeaderColor);

  // вызов бургера
  const menuBurger = document.querySelector('.menu');
  const btnOpenNode = document.querySelector('.header__burger');
  const btnCloseNode = menuBurger.querySelector('.menu__close');
  
  btnOpenNode.addEventListener('click', () => {
    menuBurger.classList.add('menu--open');
  })

  btnCloseNode.addEventListener('click', () => {
    menuBurger.classList.remove('menu--open');
  })
});