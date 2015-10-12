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
		if (winH > 600) {
			$header.height(winH);
		}
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
			'https://www.google.co.jp/intl/ja/maps/streetview/#angkor'
		];
		var distinationLength = distination.length;
		window.open(distination[Math.floor( Math.random() * distinationLength )]);
		return false;
	});


});