// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function(){
  hamburger.toggleClass('hamburger-menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function(){
  hamburger.removeClass('hamburger-menu-active');
});

// タブ
$('#smarttab').smartTab ({
    enableUrlHash: false
})