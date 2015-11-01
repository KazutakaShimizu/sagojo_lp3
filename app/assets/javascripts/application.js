// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
	'use strict';

	/* adjust header height */

	var winH = $(window).height();
	var winW = $(window).width();
	var $header = $('header');

	$(window).on('load', function() {
		$header.height(winH);
		setTimeout(changeImage, 4000);
		if (winW < 376) {
		    /* slick (carousel) */
			$('.carousel-01').slick({
				arrows: false,
				dots: true,
			});
		}
	});

	


	/* auto bg slider */

	var $slideArea = $(document.getElementById('bg-slide'));

	var slideLength = 4;

	var i;
	var slideItem = '';
	for (i = 0; i < slideLength; i++) {
	    slideItem += '<div class="slide-item" id="slide-item-' + [i+1] + '"></div>';
	}
	$slideArea.append(slideItem).prepend('</div><div class="bg-color" id="c1"></div>');
	var $slideItem = $('div.slide-item');

	$slideItem.css('opacity', 0).first().css('opacity', 1);

	function changeImage () {
	    var $currentItem = $('div.slide-item').first();
	    var $nextItem = $('div.slide-item').eq(1);
	    var colorClass = $('div.bg-color').attr('id').split('c')[1];
	    var colorOrder = Number(colorClass);
	    $currentItem.animate({
	        'opacity': 0
	    }, 500, function() {
	        $(this).appendTo($slideArea);
	    });
	    $nextItem.animate({
	        'opacity': 1
	    }, 500);
	    $('div.bg-color').attr('id', function(){
	        if (colorOrder === slideLength) {
	            colorOrder = 1;
	        } else {
	          colorOrder += 1;
	        }
	      return 'c' + colorOrder;
	    });
	    setTimeout(changeImage, 4500);
	}

	/* lightbox */

	var $body = $('body');
	var $formArea1 = $(document.getElementById('form-area-01'));
	// var $formArea1Inner = $formArea1.find('.inner');
	// var formArea1InnerH = $formArea1Inner.innerHeight();
	// console.log(formArea1InnerH)
	// var adjustFormMargin = ((winH - formArea1InnerH) / 2);
	var $floatArea1 = $(document.getElementById('float-area-01'));
	var $btnEntry1 = $('.btn-entry-01');
	var $btnClose1 = $(document.getElementById('btn-close-01'));
	$formArea1.css({
		'position': 'fixed',
		'z-index': 11,
		'top': 0,
		'left': 0,
		'display': 'none'
	});

	// $(window).on('load resize', function() {
	// 	if (winH > formArea1InnerH) {
	// 		$formArea1Inner.css({
	// 			'margin-top': adjustFormMargin,
	// 			'margin-bottom': adjustFormMargin
	// 		});

	// 	}
	// });

	$btnEntry1.on('click', function() {
		$formArea1.fadeIn(300);
		$body.addClass('no-scroll');
		return false;
	});
	$btnClose1.on('click', function() {
		$formArea1.fadeOut(300);
		$body.removeClass('no-scroll');
		return false;
	});


    /* smooth scroll */

    // #で始まるアンカーをクリックした場合に処理
    $(document).on('click', 'a[href^=#]', function() {
        // スクロールの速度
        var speed = 500;
        // アンカーの値を変数に格納
        var href= $(this).attr('href');
        // 移動先を変数に格納
        var target = $(href === '#' || href === '' ? 'html' : href);
        // 移動先を数値化して変数に格納
        var position = target.offset().top;
        // スムーススクロール実行
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        // りたーんふぉるす
        return false;
    });

    // 「このページの先頭へ」ボタンの挙動
    function scrollEvent(){
        // #anc01のページ上部からの位置を取得
        var target = $('#section-01').offset().top;
        // スクロール量を取得
        var positionTop = $(window).scrollTop();
        // スクロール量が#anc01を超えたら
        if(positionTop >= target){
            // ボタン出現
            $floatArea1.fadeIn();
        // スクロール量が#anc01以下なら
        } else {
            // ボタンが消える
            $floatArea1.fadeOut();
        }
    }
    // scrollEvent()を実行
    $(window).on('load scroll resize', scrollEvent);


    /* earth link */
	var $earthAnchor = $(document.getElementById('earth')).find('a');
	$earthAnchor.on('click', function() {
		var distination = [
			'https://www.google.co.jp/intl/ja/maps/streetview/#niseko-tourism-zone',
			'https://www.google.co.jp/intl/ja/maps/streetview/#samburu-kenya',
			'https://www.google.co.jp/intl/ja/maps/streetview/#angkor',
			'https://www.google.co.jp/intl/ja/maps/streetview/#amazon/rio-negro-boat',
			'https://www.google.co.jp/intl/ja/maps/streetview/#taiwan-highlights/lugang-mazu-temple',
			'https://www.google.co.jp/intl/ja/maps/streetview/#fernando-de-noronha/trinta-reis',
			'https://www.google.co.jp/intl/ja/maps/streetview/#grand-canyon/colorado-river-arizona-trail-view',
			'https://www.google.co.jp/intl/ja/maps/streetview/#mongolia-highlights/13th-century-complex',
			'https://www.google.com/maps/@-20.2488314,-67.6377397,3a,75y,350.11h,93.36t/data=!3m7!1e1!3m5!1smRrOwrTrDoEAAAQJOCrdpA!2e0!3e11!7i8000!8i4000',
			'https://www.google.com/maps/@19.82297,-155.469746,3a,75y,10.02h,125.93t/data=!3m5!1e1!3m3!1sIV_Q8Mh29ggAAAGuwld96w!2e0!3e11?hl=ja',
			'https://www.google.co.jp/maps/place/Shangri-La/@48.862486,2.287839,3a,49.4y,136.25h,99.31t/data=!3m5!1e1!3m3!1sgDnMNfkr3YsAAAGuwldEQg!2e0!3e11!4m2!3m1!1s0x47e66fe438ddba07:0x11dbb8d180ab18a0',
			'https://www.google.com/maps/@37.8618112,20.6256355,3a,90y,237.96h,51.06t/data=!3m7!1e1!3m5!1sv4bqCCCXCicAAAQYEYQchw!2e0!3e11!7i8528!8i4264',
			'https://www.google.com/maps/@57.3247028,-4.4403388,3a,75y,279.48h,97.41t/data=!3m7!1e1!3m5!1s4ePSBsitVgwAAAQfDRcs2w!2e0!3e2!7i9500!8i4750?hl=ja',
 			'https://www.google.co.jp/maps/@53.2041471,107.3415817,3a,67.4y,328.23h,85.05t/data=!3m8!1e1!3m6!1s-XCWCtUgkX1g%2FVXunqgsH-pI%2FAAAAAAAAAD4%2FPalD3Y8wxsI!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-XCWCtUgkX1g%2FVXunqgsH-pI%2FAAAAAAAAAD4%2FPalD3Y8wxsI%2Fs203-k-no%2F!7i8704!8i4352'
		];
		var distinationLength = distination.length;
		window.open(distination[Math.floor( Math.random() * distinationLength )]);
		return false;
	});


});