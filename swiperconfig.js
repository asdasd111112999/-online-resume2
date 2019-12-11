const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    pagination: {//分页器
        el: '.swiper-pagination',
    },
    navigation: {//前进后退
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
