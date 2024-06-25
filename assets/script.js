// 下からふわっ

$(function () {
    $(window).on('scroll', function () {
        $('.fadeUpTrigger').each(function () {
            var elemTop = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollPos > elemTop - windowHeight && scrollPos < elemTop + $(this).height()) {
                $(this).addClass('fadeUp');
            }
        });
    });
});

// スライドイン
// $(function () {
//     var cpPcElement = document.querySelector('.cp_pc');
//     setTimeout(function() {
//         cpPcElement.classList.add('animate');
//     }, 0); // アニメーションの開始を遅らせます
// });

$(function () {
    var images = document.querySelectorAll('.fv_img_wrapper img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('animate');
        }, index * 500); // 500ミリ秒ごとに次の画像を表示
    });
});


// バナーのスライド
$(function () {
    $('.banner_slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20%",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0%",
                    centerMode: false,
                },
            },
        ],
    });
});

$(function () {
    // 左側のスライダー（上から下にスライド）
    new Swiper('.top_catalog_slide_left', {
        direction: 'vertical',
        centeredSlides: true,
        allowTouchMove: false, // スワイプ無効
        slidesPerView: 2.3,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        loop: true,
        speed: 8000,
    });

    // 右側のスライダー（下から上にスライド）
    new Swiper('.top_catalog_slide_right', {
        direction: 'vertical',
        centeredSlides: true,
        allowTouchMove: false, // スワイプ無効
        slidesPerView: 2.3,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 8000,
    });
});


// 追従
$(function () {
    var followElement = document.querySelector('.follow');
    var banner = document.getElementById('banner');
    var footer = document.querySelector('footer'); // フッター要素を取得

    if (banner && footer) {
        var bannerOffsetTop = banner.offsetTop + banner.offsetHeight;
        var footerOffsetTop = footer.offsetTop; // フッターの位置を取得

        window.addEventListener('scroll', function () {
            var scrollPos = window.scrollY;
            var windowHeight = window.innerHeight;

            if (scrollPos > bannerOffsetTop && scrollPos + windowHeight < footerOffsetTop) {
                followElement.style.display = 'block';
            } else {
                followElement.style.display = 'none';
            }
        });
    }
});


// 工場のモーダル
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// イベントリスナーを追加
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.kojo_inner button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });
});

// アバウトのスライド
$(function () {
    $('.about_slide_01').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });
});


// アバウトのループ
$(function () {
    $('.about_roop img:even').addClass('even-slide');

    $('.about_roop').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        infinite: true,
        // pauseOnHover: false,
        // pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 5.2,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数右から
        // centerMode: true,
        // centerPadding: '10',
        responsive: [
            {
                breakpoint: 600, // 399px以下のサイズに適用
                settings: {
                    slidesToShow: 1.5,
                },
            },
        ],
    });
});

$(function () {
    const win = window;
    const dis = 2; // 要素が距離が画面の半分まで到達したらアニメーションを開始
    const els = document.querySelectorAll(".target"); // 対象の要素名
    let winHeight, scrollY;

    function scrollAnime() {
        winHeight = win.innerHeight;
        scrollY = win.scrollY;
        els.forEach(el => {
            let elOffset = el.getBoundingClientRect().top + scrollY;
            if (scrollY >= elOffset - (winHeight / dis)) {
                el.classList.add('show'); // 要素が見えたらshowというclass属性を与える
            } else {
                el.classList.remove('show'); // 要素が見えなくなったらshowクラスを削除
            }
        });
    }

    win.addEventListener('scroll', scrollAnime);
    win.addEventListener('resize', scrollAnime);
    document.addEventListener('DOMContentLoaded', scrollAnime); // ページ読み込み時に一度実行して初期状態を設定
});


// バナーのスライド
// $(function () {
//     $('.item_slide').slick({
//         arrows: true, // スライド矢印を有効にする
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         speed: 3000,
//         centerMode: true,
//         centerPadding: "0px",
//         slidesToShow: 1, // 表示するスライド数
//         variableWidth: true, // スライドの幅を可変にする
//         prevArrow: '<img src="./images/item_slide_previous.svg" class="slide-arrow prev-arrow">',
//     nextArrow: '<img src="./images/item_slide_next.svg" class="slide-arrow next-arrow">',
//     });
// });


//   ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function () {
    // クラスを取得
    const openbtn = document.querySelector('.openbtn');
    const globalNav = document.querySelector('.menu');
  
    if (openbtn && globalNav) {
      // クリックイベントのリスナーを設定
      openbtn.addEventListener('click', function () {
        // .activeクラスの付け替え
        openbtn.classList.toggle('active');
        globalNav.classList.toggle('active');
      });
  
      // メニュー外をクリックした時にメニューを閉じる
      document.addEventListener('click', function (e) {
        if (!globalNav.contains(e.target) && !openbtn.contains(e.target)) {
          openbtn.classList.remove('active');
          globalNav.classList.remove('active');
        }
      });
  
      const globalNavCate = document.querySelector('.menu_cate');
      const spMegaMenu = document.querySelector('.sp_mega_menu');
  
      if (globalNavCate && spMegaMenu) {
        globalNavCate.addEventListener('click', function () {
          spMegaMenu.classList.toggle('active');
        });
      }
  
      const globalNavicon = document.querySelector('.menu_cate');
      const arrowIcon = document.querySelector('.arrow-icon');
  
      if (globalNavicon && arrowIcon) {
        globalNavicon.addEventListener('click', function () {
          arrowIcon.classList.toggle('active');
        });
      }
    }
  });
  
//   const globalNavicon = document.querySelector('.menu_cate');
//   const arrowIcon = document.querySelector('.arrow-icon');
  
//   globalNavicon.addEventListener('click', function() {
//     arrowIcon.classList.toggle('active');
//   }
//   );
  

//   ソデイカの製造工程
// $(function () {
//     function initSlick() {
//         if ($(window).width() <= 600) {
//             if (!$('.about_box_wrap').hasClass('slick-initialized')) {
//                 $('.about_box_wrap').slick({
//                     arrows: true,
//                     dots: true, // ドットを無効にする
//                     infinite: false,
//                     autoplay: false,
//                     speed: 1500,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     nextArrow: '<img src="./images/about_arrow.svg" class="slide-arrow next-arrow">',
//                     beforeChange: function(event, slick, currentSlide, nextSlide) {
//                         var totalSlides = slick.slideCount;
//                         var progress = ((nextSlide + 1) / totalSlides) * 100;
//                         $('.progress-bar .progress').css('width', progress + '%');
//                     },
//                     afterChange: function(event, slick, currentSlide) {
//                         var totalSlides = slick.slideCount;
//                         var progress = ((currentSlide + 1) / totalSlides) * 100;
//                         $('.progress-bar .progress').css('width', progress + '%');
//                     }
//                 });
//             }
//         } else {
//             if ($('.about_box_wrap').hasClass('slick-initialized')) {
//                 $('.about_box_wrap').slick('unslick');
//             }
//         }
//     }

//     initSlick();
//     $(window).on('resize', initSlick);
// });




// 業務内容
// $(function () {
//     function initSlick() {
//         if ($(window).width() <= 600) {
//             if (!$('.about_02_flex').hasClass('slick-initialized')) {
//                 $('.about_02_flex').slick({
//                     arrows: false,
//                     dots: true,
//                     infinite: false,
//                     autoplay: false,
//                     speed: 1500,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 });
//             }
//         } else {
//             if ($('.about_02_flex').hasClass('slick-initialized')) {
//                 $('.about_02_flex').slick('unslick');
//             }
//         }
//     }

//     initSlick();
//     $(window).on('resize', initSlick);
// });


// sp取扱商品_上
$(function () {
    $('.catalog_sp_01').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        speed: 10000,
        infinite: true,
    });
    
});