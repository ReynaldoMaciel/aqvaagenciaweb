jQuery(document).ready(function() {
	
	Animations();

	$('.cabecalho .fa-bars').click(function () {
		// console.log($('.list_links .item'));
		$('.list_links .item').toggle('slow');
	});

	$('.banner a').click(function() {
		var link = $(this).attr('href');
		// console.log(link);
		// console.log($(link).position().top);
		$('body').animate({scrollTop: $(link).position().top}, 1000);
		return false;
	});


	$('.main_menu a').click(function() {
		var link = $(this).attr('href');
		// console.log(link);
		// console.log($(link).position().top);
		$('body').animate({scrollTop: $(link).position().top - 50}, 1000);
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() >= $('#SEO').position().top){
			// console.log($(this).scrollTop());
			$('.main_menu').addClass('fixed fadeIn animated');
		}else{
			$('.main_menu').removeClass('fixed fadeIn animated');
		}
		if($(this).scrollTop() >= $('#analise').position().top - 100){
			$('.main_menu').removeClass('fixed fadeIn animated');
		}

		// if ($(this).scrollTop() >= $('#SEM').position().top - 300) {
		// 	$('#SEM img').addClass('fadeInLeft animated');
		// 	$('#SEM h1').addClass('fadeInLeft animated');
		// 	$('#SEM span').addClass('fadeInLeft animated');
		// 	$('#SEM .tagline').addClass('fadeInLeft animated');
		// }
		// if ($(this).scrollTop() >= $('#SMO').position().top - 300) {
		// 	$('#SMO img').addClass('fadeInRight animated');
		// 	$('#SMO h1').addClass('fadeInRight animated');
		// 	$('#SMO span').addClass('fadeInRight animated');
		// 	$('#SMO .tagline').addClass('fadeInRight animated');
		// }
		
	});

	function Animations() {
		$('.main_menu .logo').addClass('bounceInLeft animated');
		$('.main_menu .item_title').each(function(index, el) {
			if ($(el).attr('class') != 'special') {
				setTimeout(function () {
					$(el).toggleClass('bounceIn animated');
				},index * 150);
			}		
		});
		setTimeout(function () {
			$('.banner h1').addClass('bounceInDown animated');
		},100);
		setTimeout(function () {
			$('.banner .tagline').addClass('bounceInLeft animated');
		},200);
		setTimeout(function () {
			$('.banner a').addClass('bounce animated');
		},300);
		setTimeout(function(){ 
			$('.main_menu .special a').addClass('pulse animated');		
		}, 400);
	}

});
