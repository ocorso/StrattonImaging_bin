/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 *//*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);
(function($){
	
    $.ExpandingBox = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el; 

		base.step = {step: 0};
        
        // Add a reverse reference to the DOM object
        base.$el.data("ExpandingBox", base);
        
        base.init = function(){
			base.options = $.extend({},$.ExpandingBox.defaultOptions, options);
           
			base.$target = base.$el.find(base.options.target);
			if(base.options.trigger == null)
				base.$trigger = base.$el;
			else
				base.$trigger = $(base.options.trigger);
		
			if(base.options.mask != null) {
				base.$mask = $(base.options.mask);
				base.hasMask = true;
				base.$target.css("opacity", 0);
			}
			
			
			if(typeof(base.options.easing) == "object"){
				base.easing = base.options.easing
			} else {
				base.easing = {
					ease_in: base.options.easing,
					ease_out: base.options.easing
				}
			}
            
			base.updateLocations();
			
			base.$trigger.hover(function(){
				base.openTransformation();
			}, function(){
				base.closeTransformation();
			})
            // Put your initialization code here
        }

		base.updateLocations = function(){
			base.locations = base.getLocations();
			base.end_locations = base.getLocations();
			
			base.end_locations.target.top = 0
			base.end_locations.target.left = 0
			
			base.end_locations.box = {
				top: base.locations.box.top + base.locations.target.top,
				left: base.locations.box.left + base.locations.target.left,
				width: base.locations.target.width,
				height: base.locations.target.height
			}
			
			base.differences = {
				box: {
					top:    base.end_locations.box.top    - base.locations.box.top,
					left:   base.end_locations.box.left   - base.locations.box.left,
					width:  base.end_locations.box.width  - base.locations.box.width,
					height: base.end_locations.box.height - base.locations.box.height
				},
				target: {
					top:    base.end_locations.target.top    - base.locations.target.top,
					left:   base.end_locations.target.left   - base.locations.target.left,
					width:  base.end_locations.target.width  - base.locations.target.width,
					height: base.end_locations.target.height - base.locations.target.height
				}
			}
		}
		
		base.getLocations = function(){
			var locations = {};
			
			locations.target = base.getDimAsHash(base.$target);
			locations.box = base.getDimAsHash(base.$el);
				
			return locations;
		}
		
		base.getDimAsHash = function($obj){
			var pos = $obj.position();
			return {
				top: pos.top,
				left: pos.left,
				width: $obj.width(),
				height: $obj.height()
			}
		}
		
		base.baseTransformation = function(value, easing){
			var animation = base.hasMask ? base.animationWithMask : base.animationWithoutMask;
			$(base.step).stop().animate({step: value}, {
				duration: base.options.speed,
				step: animation,
				complete: animation,
				easing: easing
			});	
		}

		base.openTransformation = function(){
			base.baseTransformation(base.options.time, base.easing.ease_in);
		}
		
		base.closeTransformation = function(){
			base.baseTransformation(0, base.easing.ease_out);
		}
		
		base.animationWithoutMask = function(){
			base.updateObject(base.$el, 'box');
			base.updateObject(base.$target, 'target');
		}
		
		base.animationWithMask = function(){
			var per = base.percent();
			if(per == 1) base.$mask.hide();
			else if (per < 1) base.$mask.filter(':hidden').show();
			base.$mask.css("opacity", 1 - per);
			base.$target.css("opacity", per);
			base.updateObject(base.$el, 'box');
			base.updateObject(base.$target, 'target');
		}
		

		
		base.calculateLocations = function(step){
			
		}
		
		base.percent = function(){
			return base.step.step / base.options.time;
		}
		
		base.updateObject = function($obj, key){
			var per    = base.percent();
			var top    = Math.round(base.locations[key].top    + (base.differences[key].top * per));
			var left   = Math.round(base.locations[key].left   + (base.differences[key].left * per));
			var width  = Math.round(base.locations[key].width  + (base.differences[key].width * per));
			var height = Math.round(base.locations[key].height + (base.differences[key].height * per));
			
			$obj.css({
				top:    top,
				left:   left,
				width:  width,
				height: height
			});
		}
		
       
        
    base.init();
    }

	
    $.ExpandingBox.defaultOptions = {
        mask: null,
		trigger: null,
        target: ":first",
		speed: 200,
		easing: "swing",
		time: 200
    }
	

    $.fn.expandingBox = function(options){
        return this.each(function(){
            (new $.ExpandingBox(this, options));
        });
    }

	
})(jQuery);/**
 * @author Alexandre Magno
 * @desc Center a element with jQuery
 * @version 1.0
 * @example
 * $("element").center({
 *
 * 		vertical: true,
 *      horizontal: true
 *
 * });
 * @obs With no arguments, the default is above
 * @license free
 * @param bool vertical, bool horizontal
 * @contribution Paulo Radichi
 *
 */
jQuery.fn.center = function(params) {

		var options = {

			vertical: true,
			horizontal: true

		}
		op = jQuery.extend(options, params);

   return this.each(function(){

		//initializing variables
		var $self = jQuery(this);
		//get the dimensions using dimensions plugin
		var width = $self.width();
		var height = $self.height();
		//get the paddings
		var paddingTop = parseInt($self.css("padding-top"));
		var paddingBottom = parseInt($self.css("padding-bottom"));
		//get the borders
		var borderTop = parseInt($self.css("border-top-width"));
		var borderBottom = parseInt($self.css("border-bottom-width"));
		//get the media of padding and borders
		var mediaBorder = (borderTop+borderBottom)/2;
		var mediaPadding = (paddingTop+paddingBottom)/2;
		//get the type of positioning
		var positionType = $self.parent().css("position");
		// get the half minus of width and height
		var halfWidth = (width/2)*(-1);
		var halfHeight = ((height/2)*(-1))-mediaPadding-mediaBorder;
		// initializing the css properties
		var cssProp = {
			position: 'absolute'
		};

		if(op.vertical) {
			cssProp.height = height;
			cssProp.top = '50%';
			cssProp.marginTop = halfHeight;
		}
		if(op.horizontal) {
			cssProp.width = width;
			cssProp.left = '50%';
			cssProp.marginLeft = halfWidth;
		}
		//check the current position
		if(positionType == 'static') {
			$self.parent().css("position","relative");
		}
		//aplying the css
		$self.css(cssProp);


   });

};/*
 * In-Field Label jQuery Plugin
 * http://fuelyourcoding.com/scripts/infield.html
 *
 * Copyright (c) 2009 Doug Neiner
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 0.1
 */
(function($){
	
    $.InFieldLabels = function(label,field, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of each element
        base.$label = $(label);
        base.label = label;

 		base.$field = $(field);
		base.field = field;
        
		base.$label.data("InFieldLabels", base);
		base.showing = true;
        
        base.init = function(){
			// Merge supplied options with default options
            base.options = $.extend({},$.InFieldLabels.defaultOptions, options);

			// Check if the field is already filled in
			if(base.$field.val() != ""){
				base.$label.hide();
				base.showing = false;
			};
			
			base.$field.focus(function(){
				base.fadeOnFocus();
			}).blur(function(){
				base.checkForEmpty(true);
			}).bind('keydown.infieldlabel',function(e){
				// Use of a namespace (.infieldlabel) allows us to
				// unbind just this method later
				base.hideOnChange(e);
			}).change(function(e){
				base.checkForEmpty();
			}).bind('onPropertyChange', function(){
				base.checkForEmpty();
			});
        };

		// If the label is currently showing
		// then fade it down to the amount
		// specified in the settings
		base.fadeOnFocus = function(){
			if(base.showing){
				base.setOpacity(base.options.fadeOpacity);
			};
		};
		
		base.setOpacity = function(opacity){
		  var color = "#aaaaaa";
		  if(opacity == base.options.fadeOpacity){
		    color = "#dddddd";
		  } else if (opacity > 0){
		    color = "#ffffff";
		  }
			base.$label.stop().animate({ color: color }, base.options.fadeDuration);
			base.showing = (opacity > 0.0);
		};
		
		// Checks for empty as a fail safe
		// set blur to true when passing from
		// the blur event
		base.checkForEmpty = function(blur){
			if(base.$field.val() == ""){
				base.prepForShow();
				base.setOpacity( blur ? 1.0 : base.options.fadeOpacity );
			} else {
				base.setOpacity(0.0);
			};
		};
		
		base.prepForShow = function(e){
			if(!base.showing) {
				// Prepare for a animate in...
				base.$label.css('color','#aaaaaa').show();
				
				// Reattach the keydown event
				base.$field.bind('keydown.infieldlabel',function(e){
					base.hideOnChange(e);
				});
			};
		};

		base.hideOnChange = function(e){
			if(
				(e.keyCode == 16) || // Skip Shift
				(e.keyCode == 9) // Skip Tab
			  ) return; 
			
			if(base.showing){
				base.$label.hide();
				base.showing = false;
			};
			
			// Remove keydown event to save on CPU processing
			base.$field.unbind('keydown.infieldlabel');
		};
      
		// Run the initialization method
        base.init();
    };
	
    $.InFieldLabels.defaultOptions = {
        fadeOpacity: 0.5, // Once a field has focus, how transparent should the label be
		fadeDuration: 300 // How long should it take to animate from 1.0 opacity to the fadeOpacity
    };
	

    $.fn.inFieldLabels = function(options){
        return this.each(function(){
			// Find input or textarea based on for= attribute
			// The for attribute on the label must contain the ID
			// of the input or textarea element
			var for_attr = $(this).attr('for');
			if( !for_attr ) return; // Nothing to attach, since the for field wasn't used
			
			
			// Find the referenced input or textarea element
			var $field = $(
				"input#" + for_attr + "[type='text']," + 
				"input#" + for_attr + "[type='password']," + 
				"textarea#" + for_attr
				);
				
			if( $field.length == 0) return; // Again, nothing to attach
			
			// Only create object for input[text], input[password], or textarea
            (new $.InFieldLabels(this, $field[0], options));
        });
    };
	
})(jQuery);/**
 * jQuery History Plugin (balupton edition) - Simple History Handler/Remote for Hash, State, Bookmarking, and Forward Back Buttons
 * Copyright (C) 2008-2009 Benjamin Arthur Lupton
 * http://www.balupton.com/projects/jquery_history/
 *
 * This file is part of jQuery History Plugin (balupton edition).
 * 
 * jQuery History Plugin (balupton edition) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * jQuery History Plugin (balupton edition) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with jQuery History Plugin (balupton edition).  If not, see <http://www.gnu.org/licenses/>.
 *
 * @name jqsmarty: jquery.history.js
 * @package jQuery History Plugin (balupton edition)
 * @version 1.1.0-final
 * @date July 14, 2009
 * @category jquery plugin
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2008-2009 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License - {@link http://www.gnu.org/licenses/agpl.html}
 * @example Visit {@link http://jquery.com/plugins/project/jquery_history_bal} for more information.
 * 
 * 
 * I would like to take this space to thank the following projects, blogs, articles and people:
 * - jQuery {@link http://jquery.com/}
 * - jQuery UI History - Klaus Hartl {@link http://www.stilbuero.de/jquery/ui_history/}
 * - Really Simple History - Brian Dillard and Brad Neuberg {@link http://code.google.com/p/reallysimplehistory/}
 * - jQuery History Plugin - Taku Sano (Mikage Sawatari) {@link http://www.mikage.to/jquery/jquery_history.html}
 * - jQuery History Remote Plugin - Klaus Hartl {@link http://stilbuero.de/jquery/history/}
 * - Content With Style: Fixing the back button and enabling bookmarking for ajax apps - Mike Stenhouse {@link http://www.contentwithstyle.co.uk/Articles/38/fixing-the-back-button-and-enabling-bookmarking-for-ajax-apps}
 * - Bookmarks and Back Buttons {@link http://ajax.howtosetup.info/options-and-efficiencies/bookmarks-and-back-buttons/}
 * - Ajax: How to handle bookmarks and back buttons - Brad Neuberg {@link http://dev.aol.com/ajax-handling-bookmarks-and-back-button}
 *
 **
 ***
 * CHANGELOG
 **
 * v1.1.0-final, July 14, 2009
 * - Rewrote IE<8 hash code
 * - Cut down format to accept all hash types
 * 
 * v1.0.1-final, July 11, 2009
 * - Restructured a little bit
 * - Documented
 * - Cleaned go/request
 *
 * v1.0.0-final, June 19, 2009
 * - Been stable for over a year now, pushing live.
 * 
 * v0.1.0-dev, July 24, 2008
 * - Initial Release
 * 
 */

// Start of our jQuery Plugin
(function($)
{	// Create our Plugin function, with $ as the argument (we pass the jQuery object over later)
	// More info: http://docs.jquery.com/Plugins/Authoring#Custom_Alias
	
	// Debug
	if (typeof console === 'undefined') {
		console = typeof window.console !== 'undefined' ? window.console : {};
	}
	console.log			= console.log 			|| function(){};
	console.debug		= console.debug 		|| console.log;
	console.warn		= console.warn			|| console.log;
	console.error		= console.error			|| function(){var args = [];for (var i = 0; i < arguments.length; i++) { args.push(arguments[i]); } alert(args.join("\n")); };
	console.trace		= console.trace			|| console.log;
	console.group		= console.group			|| console.log;
	console.groupEnd	= console.groupEnd		|| console.log;
	console.profile		= console.profile		|| console.log;
	console.profileEnd	= console.profileEnd	|| console.log;
	
	// Declare our class
	$.History = {
		// Our Plugin definition
		
		// -----------------
		// Options
		
		options: {
			debug: false
		},
		
		// -----------------
		// Variables
		
		state:		'',
		$window:	null,
		$iframe:	null,
		handlers:	{
			generic:	[],
			specific:	{}
		},
		
		// --------------------------------------------------
		// Functions
		
		/**
		 * Format a hash into a proper state
		 * @param {String} hash
		 */
		format: function ( hash ) {
			// Format the hash
			hash = hash
				.replace(/^.*#/g, '') /* strip anything before the anchor in case we were passed a url */
				;
			
			// Return the hash
			return hash;
		},
		
		/**
		 * Get the current state of the application
		 */
        getState: function ( ) {
			var History = $.History;
			
			// Get the current state
			return History.state;
        },
		/**
		 * Set the current state of the application
		 * @param {String} hash
		 */
		setState: function ( state ) {
			var History = $.History;
			// Format the state
			state = History.format(state)
			
			// Apply the state
			History.state = state;
			
			// Return the state
			return History.state;
		},
		
		/**
		 * Get the current hash of the browser
		 */
		getHash: function ( ) {
			var History = $.History;
			
			// Get the hash
			var hash = History.format(window.location.hash || location.hash);
			
			// Return the hash
			return hash;
		},
		
		/**
		 * Set the current hash of the browser and iframe if present
		 * @param {String} hash
		 */
		setHash: function ( hash ) {
			var History = $.History;
			
			// Prepare hash
			hash = History.format(hash);
			
			// Write hash
			if ( typeof window.location.hash !== 'undefined' ) {
				if ( window.location.hash !== hash ) {
					window.location.hash = hash;
				}
			} else if ( location.hash !== hash ) {
				location.hash = hash;
			}
			
			// Done
			return hash;
		},
		
		/**
		 * Go to the specific state - does not force a history entry like setHash
		 * @param {String} to
		 */
		go: function ( to ) {
			var History = $.History;
			
			// Format
			to = History.format(to);
			
			// Get current
			var hash = History.getHash();
			var state = History.getState();
			
			// Has the hash changed
			if ( to !== hash ) {
				// Yes, update the hash
				// And wait for the next automatic fire
				History.setHash(to);
			} else {
				// Hash the state changed?
				if ( to !== state ) {
					// Yes, Update the state
					History.setState(to);
				}
				
				// Trigger our change
				History.trigger();
			}
			
			// Done
			return true;
		},
		
		/**
		 * Handle when the hash has changed
		 * @param {Event} e
		 */
		hashchange: function ( e ) {
			var History = $.History;
			
			// Get Hash
			var hash = History.getHash();
			
			// Handle the new hash
			History.go(hash);
			
			// All done
			return true;
		},
		
		/**
		 * Bind a handler to a hash
		 * @param {Object} state
		 * @param {Object} handler
		 */
		bind: function ( state, handler ) {
			var History = $.History;
			
			// 
			if ( handler ) {
				// We have a state specific handler
				// Prepare
				if ( typeof History.handlers.specific[state] === 'undefined' )
				{	// Make it an array
					History.handlers.specific[state] = [];
				}
				// Push new handler
				History.handlers.specific[state].push(handler);
			}
			else {
				// We have a generic handler
				handler = state;
				History.handlers.generic.push(handler);
			}
			
			// Done
			return true;
		},
		
		/**
		 * Trigger a handler for a state
		 * @param {String} state
		 */
		trigger: function ( state ) {
			var History = $.History;
			
			// Prepare
			if ( typeof state === 'undefined' ) {
				// Use current
				state = History.getState();
			}
			var i, n, handler, list;
			
			// Fire specific
			if ( typeof History.handlers.specific[state] !== 'undefined' ) {
				// We have specific handlers
				list = History.handlers.specific[state];
				for ( i = 0, n = list.length; i < n; ++i ) {
					// Fire the specific handler
					handler = list[i];
					handler(state);
				}
			}
			
			// Fire generics
			list = History.handlers.generic;
			for ( i = 0, n = list.length; i < n; ++i ) {
				// Fire the specific handler
				handler = list[i];
				handler(state);
			}
			
			// Done
			return true;
		},
		
		// --------------------------------------------------
		// Constructors
		
		/**
		 * Construct our application
		 */
		construct: function ( ) {
			var History = $.History;
			
			// Modify the document
			$(document).ready(function() {
				// Prepare the document
				History.domReady();
			});
			
			// Done
			return true;
		},
		
		/**
		 * Configure our application
		 * @param {Object} options
		 */
		configure: function ( options ) {
			var History = $.History;
			
			// Set options
			History.options = $.extend(History.options, options);
			
			// Done
			return true;
		},
		
		domReadied: false,
		domReady: function ( ) {
			var History = $.History;
			
			// Runonce
			if ( History.domRedied ) {
				return;
			}
			History.domRedied = true;
			
			// Define window
			History.$window = $(window);
			
			// Apply the hashchange function
			History.$window.bind('hashchange', this.hashchange);
			
			// Force hashchange support for all browsers
			setTimeout(History.hashchangeLoader, 200);
			
			// All done
			return true;
		},
		
		/**
		 * Enable hashchange for all browsers
		 */
		hashchangeLoader: function () {
			var History = $.History;
			
			// More is needed for non IE8 browsers
			if ( !($.browser.msie && parseInt($.browser.version) >= 8) ) {	
				// We are not IE8
			
				// State our checker function, it is used to constantly check the location to detect a change
				var checker;
				
				// Handle depending on the browser
				if ( $.browser.msie ) {
					// We are still IE
					// IE6, IE7, etc
				
					// Append and $iframe to the document, as $iframes are required for back and forward
					// Create a hidden $iframe for hash change tracking
					History.$iframe = $('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0];
					
					// Create initial history entry
					History.$iframe.contentWindow.document.open();
					History.$iframe.contentWindow.document.close();
					
					// Define the checker function (for bookmarks)
					var iframeHit = false;
					checker = function ( ) {
						
						// Fetch
						var hash = History.getHash();
						var state = History.getState();
						var iframeHash = History.format(History.$iframe.contentWindow.document.location.hash);
						
						// Check if the browser hash is different
						if ( state !== hash ) {
							// Browser hash is different
							
							// Check if we need to update the iframe
							if ( !iframeHit ) {
								// Write a iframe/history entry in the browsers back and forward
								// alert('update iframe entry');
								History.$iframe.contentWindow.document.open();
								History.$iframe.contentWindow.document.close();
								// alert('update iframe entry.');
								
								// Update the iframe hash
								// alert('update iframe hash');
								History.$iframe.contentWindow.document.location.hash = hash;
								// alert('update iframe hash.');
							}
							
							// Reset
							iframeHit = false;
							
							// Fire
							// alert('hashchange');
							History.$window.trigger('hashchange');
							// alert('hashchange.');
						}
						else {
							// Browser hash is not different
							
							// Check if the iframe hash is different from the iframe state
							if ( state !== iframeHash ) {
								// Specify we were hit from the iframe
								iframeHit = true;
								
								// Update the browser hash
								// alert('set hash from iframe');
								History.setHash(iframeHash);
								// alert('set hash from iframe.');
							}
						}
						
					};
				}
				else {
					// We are not IE
					// Firefox, Opera, Etc
				
					// Define the checker function (for bookmarks, back, forward)
					checker = function ( ) {
						var hash = History.getHash();
						var state = History.getState();
						// Check
						if ( state !== hash ) {
							// State change
							History.$window.trigger('hashchange');
						}
					};
				}
				
				// Apply the checker function
				setInterval(checker, 200);
			}
			else {
				// We are IE8
				
				// Fire the initial
				var hash = History.getHash();
				if ( hash ) {
					History.$window.trigger('hashchange');
				}
			}
			
			// Done
			return true;
		}
	
	}; // We have finished extending/defining our Plugin
	
	// --------------------------------------------------
	// Finish up
	
	// Instantiate
	$.History.construct();

// Finished definition

})(jQuery);/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);(function($){
	if( typeof(Fuel) == "undefined" ) Fuel = {};
	
	// Reference for Protected Function
	var page_controller_init;
	
	Fuel.PageController = function(){
		var current_page = -1,
		    pages        = {},
			  $d           = null,
			  $navigation  = null,
			base           = this;
	
		// Public Functions:
		this.add_page_transition = function(page, transition_in, transition_out, color){
			var transition = {
				 page: page,
				  _in: transition_in ? transition_in : function(callback){ callback() },
				 _out: transition_out ? transition_out : function(callback){ callback() },
				color: color
			};
			pages[page] = transition;
		}
		
		var $nav_a;
		
		// Protected Functions
		var init = function(){
			$d = $(document.body);
			$navigation = $("#navigation");
			
			$nav_a = $navigation.find("a");
			
			
			
			$nav_a.click(function(e){
        $.History.setHash( $(this).attr('href'));
        return false;
			});
			
			$navigation.find('li').click(function(){
			  $(this).find('a').click();
			})
		};
		page_controller_init = init;

		// Private Functions

		this.changePage = function(page, callback){
			if(page == current_page) return;
			
			$nav_a.removeClass('selected');
			$nav_a.eq(page - 1).addClass('selected');
			
			if(typeof(callback) != "function") callback = function(){};
			if(pages[page]){
				hidePage(page, function(){
					pages[page]._in(callback);	
				});
				changeColor(pages[page].color, 1000);
			} else {
				hidePage(page, callback);
			}
		}

		var hidePage = function(new_page, callback){
			if(pages[current_page]){
				pages[current_page]._out(callback);
			} else {
				callback();
			}
			current_page = new_page;
		}
		
		var changeColor = function(color, speed){
			$d.animate({backgroundColor: color}, speed);
		}
	}
	
	Fuel.PageController = new Fuel.PageController();
	
	// Some of the init requires the DOM to be ready;
	$(function(){ page_controller_init(); });
	
})(jQuery);(function($){
	$.fn.fuelNews = function(){
		return this.each(function(){
			var $news_feed = $(this),
			    $news_items = $news_feed.find('li'),
			    $news_nav   = $("#news-nav"),
				$news_prev  = $news_nav.find('#news-prev').hide(),
				$news_next  = $news_nav.find('#news-next');
			
			$news_prev.click(function(){
				update_current( $current.prev() );
				return false;
			});
			
			$news_next.click(function(){
				update_current( $current.next() );
				return false;
			})
			
			$news_nav.click(function(){
			  if ($current && $current.length == 1){
			    $current.click();
			  }
			})
			
			$news_items.click(function(){
				if ($current[0] === this ){
					window.open( $(this).find('a').attr('href'), '_blank' );
				} else {
					update_current( $(this) );
				}
			}).find('a').text('Click Again To View Article').click(function(e){
			  $(this).closest('li').click();
			  return false;
			});//.css({opacity: 0})
			
			var $current = null;
			
			var update_current = function($new , speed){
				var easing = "easeInOutQuint";
				if(!speed) speed = 700;

				var left = $new.position().left;
				left = (left + 150 - 3) * -1;
				
				if($current){
					//$current.find('a').animate({opacity: 0}, speed);
					$news_nav.stop().fadeTo(speed / 3, 0, function(){
						var index = $new.prevAll().length;
						if(index == 0){
							$news_prev.hide();
						} else {
							$news_prev.show();
						}

						if(index == ($news_items.length - 1)){
							$news_next.hide();
						} else {
							$news_next.show();
						}
					});
				}
				

				
				$news_feed.animate({marginLeft: left }, speed, easing, function(){
					
					$news_nav.stop().fadeTo(speed / 3, .75);
				});
				//$new.find('a').animate( {opacity: 1.0}, speed);
				$new.animate({opacity: 1.0}, speed, easing );
				
				// Left and right of new current item
				var $prev = $new.prev().animate({opacity:0.50, top: 0 }, speed, easing); 
				var $next = $new.next().animate({opacity:0.50, top: 0 }, speed, easing);
				
				// Left and right, once removed from the new current item
				$prev = $prev.prev().animate({opacity:0.25, top: 0}, speed, easing);
				$next = $next.next().animate({opacity:0.25, top: 0}, speed, easing);
				
				// All other items
				$prev.prevAll().animate({opactiy: 0.15, top: 0}, speed, easing);
				$next.nextAll().animate({opactiy: 0.15, top: 0}, speed, easing);
				
				// Store reference to the current item
				$current = $new;
			}
			
			update_current( $($news_items[0]) );
		});
	}
})(jQuery);(function($){
	$(function(){
		var $navigation = $("#navigation");
		var showNav = function(e){
			$(this).animate({ bottom: -50 }, 700);
			$navigation.fadeIn(500);
			e.preventDefault();
		};
		
		// On mouseover or click, should the click somehow
		// happen faster than mouseover
		$("#show-nav").click(showNav).mouseover(showNav);
	});
})(jQuery);/*
 * timeago: a jQuery plugin, version: 0.8.1 (2010-01-04)
 * @requires jQuery v1.2.3 or later
 *
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008-2010, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) return inWords(timestamp);
    else if (typeof timestamp == "string") return inWords($.timeago.parse(timestamp));
    else return inWords($.timeago.datetime(timestamp));
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        ago: null, // DEPRECATED, use suffixAgo
        fromNow: null, // DEPRECATED, use suffixFromNow
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years"
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo || $l.ago;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow || $l.fromNow;
        }
        distanceMillis = Math.abs(distanceMillis);
      }

      var seconds = distanceMillis / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 48 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.floor(days)) ||
        days < 60 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.floor(days / 30)) ||
        years < 2 && substitute($l.year, 1) ||
        substitute($l.years, Math.floor(years));

      return $.trim([prefix, words, suffix].join(" "));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      var isTime = $(elem).get(0).tagName.toLowerCase() == 'time'; // $(elem).is('time');
      var iso8601 = isTime ? $(elem).attr('datetime') : $(elem).attr('title');
      return $t.parse(iso8601);
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (element.data("timeago") === undefined) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0) element.attr("title", text);
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  function substitute(stringOrFunction, value) {
    var string = $.isFunction(stringOrFunction) ? stringOrFunction(value) : stringOrFunction;
    return string.replace(/%d/i, value);
  }

  // fix for IE6 suckage
  document.createElement('abbr');
  document.createElement('time');
})(jQuery);(function($){ 
  $.fn.twitterFeed = function(username, callback){
    var $base = this; 
    if(!username || username == "") return this;   // username required
    
    var url = "http://twitter.com/statuses/user_timeline.json?callback=?"; 
    
    $.getJSON( url, { count: 20, screen_name: username }, function(data){
      if(data && data.length >= 1){ 
        try{
          var tweets = [];
          for(var i = 0; i < data.length; i++){
            if(/^@/i.test(data[i].text)) continue; 
            tweets.push(data[i]);
          } 
          $.each(tweets, function(i, el){
            if(i > 10) return false;
            var $tweet = $("<p></p>").text(this.text); 
            $tweet.html($tweet.html()
              .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
              .replace(/(^|\s)#(\w+)/g,'$1<a target="_blank" href="http://search.twitter.com/search?q=%23$2">#$2</a>')
              .replace(/(^|\s|\()@(\w+)/g,'$1<a target="_blank" href="http://twitter.com/$2">@$2</a>')
            );
            if(!$.browser.msie){
            $tweet.append(
              [' <a class="time" href="https://twitter.com/', username, '/statuses/', this.id, '/" target="_blank">',
                jQuery.timeago( new Date(this.created_at)),
               '</a>'].join('')
             );
            }
            $base.append( $tweet );
          });
        } catch (e) {
          
        };
      };
      if( $.isFunction( callback ) ) callback(); 
    });
    return this; // Don't break the chain 
  };
})(jQuery);