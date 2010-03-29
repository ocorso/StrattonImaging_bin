$.fn.prepStart = function (options){
  var defaults = {
    visibility: 'visible',
    opacity: 0.0,
    zIndex:1000,
    'filter':'alpha(opacity=0)'
  };
  return this.stop(true).css($.extend(defaults,options));
}

$.fn.prepEnd = function (options){
  var defaults = {
    opacity: 1.0,
    zIndex:100,
    'filter':'alpha(opacity=100)'
  };
  return this.stop(true).css($.extend(defaults,options));
}


Fuel.PageController.add_page_transition(1, function(callback){
	$layer1.prepStart().animate({opacity: 1.0, top: 0}, 500, "easeInOutQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
	
}, function(callback){
	$layer1.prepEnd().animate({opacity: 0.0, top: -200 }, 500, "easeInOutQuint", function(){
	  $(this).css({visibility:'hidden'});
	  callback()
	});
}, "#18597f");

Fuel.PageController.add_page_transition(2, function(callback){
	$companyLogos.prepStart().animate({opacity: 1.0, top: '10%'}, 500, "easeInOutQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
}, function(callback){
	$companyLogos.prepEnd().animate({opacity: 0.0, top:'1%' }, 500, "easeInOutQuint", function(){
	  $(this).css({visibility:'hidden'});
	  callback()
	});
}, "#8a0651");




Fuel.PageController.add_page_transition(3, function(callback){
	$core.prepStart().animate({opacity: 1.0}, 500, "easeInOutQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
}, function(callback){
	$core.prepEnd().animate({opacity: 0.0 }, 500, "easeInOutQuint", function(){
	  $(this).css({visibility:'hidden'});
	  callback()
	});
}, "#dc9d10");

Fuel.PageController.add_page_transition(4, function(callback){
	$press.prepStart().animate({opacity: 1.0}, 500,"easeInQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
}, function(callback){
	$press.prepEnd().animate({opacity: 0.0 }, 500, "easeInOutQuint", function(){
	  $(this).css({visibility:'hidden'});
	  callback()
	});
}, "#1f8311");

Fuel.PageController.add_page_transition(5, function(callback){
	$news.prepStart().animate({opacity: 1.0}, 500,"easeInQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
}, function(callback){
	$news.prepEnd().animate({opacity: 0.0}, 500,"easeOutQuint", function(){
	  $(this).css({'visibility':'hidden'});
	  callback();
	});
}, "#8f3333");

Fuel.PageController.add_page_transition(6, function(callback){
	$engage.prepStart().animate({opacity: 1.0}, 500,"easeInQuint", function(){
	  $(this).css({'filter':'none'});
	  callback();
	});
}, function(callback){
	$engage.prepEnd().animate({opacity: 0.0 }, 500, "easeInOutQuint", function(){
	  $(this).css({visibility:'hidden'});
	  callback()
	});
}, "#1c6e7a");


// DOM Ready
jQuery(function($){			

	$.getJSON(
		'http://www.fuelbrandnetwork.com/json_feed.php?callback=?',
		{ no: 15 },
		function(data){
			var $nf = $("#news-feed");
			$.each(data, function(){
				var $li = $([
				'<li>',
					'<div class="news-container">',
						'<h3>', this.title, '</h3>',
					'</div>',
					'<p class="news-date">', this.time, '</p>',
					'<a class="news-link" href="', this.permalink, '">View Article</a>',
				'</li>'
				].join('')).appendTo($nf);
			})
			
			$nf.fuelNews({nav: $("#news-nav > span")}).find('h3').center();;	
		})
	

	
  // $layer1 = $("#layer1").css({
  //  opacity: 0.0, display:"block", top: -200
  // });
	
	$home = $("#layer1").css({display: 'block', visibility: 'hidden', top: -200});
	$learn = $("#core").css({display: 'block', visibility: 'hidden'});
	$craft = $("#news").css({display: 'block', visibility: 'hidden'});
	$credits = $("#press").css({display: 'block', visibility: 'hidden'});
	$connect = $("#engage").css({display: 'block', visibility: 'hidden'});

	var timer = null;
	$(window).resize(function(){
		if(timer) window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			timer = null;
			fix_tweets();
		}, 500);
	})

	
	$("#goal div.inline-link").each(function(){
		var $this = $(this),
				$popup = $this.find('.popup');
				
				$popup.css({right: -425}).hide();
				
				$this.bind('mouseover', function(e){
					if(e.target !== this) return;
					$popup.show().stop(true).animate({ opacity: 1.0, right: -414}, 200)
				}).bind('mouseout',function(e){
					if(e.target !== this) return;
					$popup.animate({ opacity: 0.0, right: -425}, 200, function(){
						$(this).hide();
					})							
				});
	});
	
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g,"");
	};
	
	var submitonce = false;
	var $email   = $("#email").blur(function(){
		var email   = $email.val().trim();
		$email.addError(!email || !/^.*@.*\..*$/.test(email));
	}),
	    $name    = $("#name").blur(function(){
				var name    = $name.val().trim();
		$name.addError(!name);
	}),
	    $message = $("#message").blur(function(){
				var message = $message.val().trim();
		$message.addError(!message);
	});
	
	$.fn.addError = function(test){
		if(submitonce && test){
			this.closest('p').addClass('error');
		} else if(submitonce) {
			this.closest('p').removeClass('error');
		}
		return test;
	}
	 
	$('form').submit(function(e){
		submitonce = true;
		var email   = $email.val().trim(),
		    name    = $name.val().trim(),
		    message = $message.val().trim(),
				error   = false;
		
		
		if( $email.addError(!email || !/^.*@.*\..*$/.test(email))) error = true;
		if( $name.addError(!name) ) error = true;
		if( $message.addError(!message) ) error = true;
		
		
		if(!error){
			$.post('/email.php',{
				email: email,
				message: message,
				name: name
			}, function(data){
				if(data == true){
					$("#engage-success").fadeIn(200, function(){
						submitonce = false;
						$message.val('').blur();
						
						window.setTimeout(function(){
							$("#engage-success").fadeOut(200);
						}, 3000)
					});
				}
			}, 'json');
		}
		
		
		e.preventDefault();
	})
	$('#submit-a').click(function(e){
		$('form').submit();
		e.preventDefault();
	})
	
	$.History.bind(function(fragment){
		
		var page = fragment.split('/');
		if(page.length > 1){
			var p = 0;
			switch(page[1]){
				case 'home':
				p = 1;
				break;
				case 'learn':
				p = 2;
				break;
				case 'craft':
				p = 3;
				break;
				case 'credits':
				p = 4;
				break;
				case 'connect':
				p = 5;
				break;
		}
			if(p > 0){
				Fuel.PageController.changePage( p );
				$("#show-nav").trigger('mouseover');
			}
		}
	})
})