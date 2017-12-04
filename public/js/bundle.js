(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {

	var tl = new TimelineMax();

	setTimeout(function () {
		tl.staggerTo('.is-slideUp', 1, {
			opacity: 1,
			delay: .8,
			y: 0
		}, .5);
	});

	var $Element = $('.Service'); // 追従する要素
	var basePoint = $Element.offset().top; // 追従する要素の初期位置
	var fixClass = 'is-bg'; // 追従時に付与するclass

	// 要素が追従する処理
	function fixFunction() {
		var windowScrolltop = $(window).scrollTop();
		// スクロールが初期位置を通過しているとき
		if (windowScrolltop >= basePoint) {
			$('.Header').addClass(fixClass);
		} else {
			$('.Header').removeClass(fixClass);
		}
	}

	$(window).on('load scroll', function () {
		fixFunction();
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc3JjL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7O0FBRVosS0FBTSxLQUFLLElBQUksV0FBSixFQUFYOztBQUVBLFlBQVcsWUFBVztBQUNyQixLQUFHLFNBQUgsQ0FBYSxhQUFiLEVBQTRCLENBQTVCLEVBQStCO0FBQzlCLFlBQVMsQ0FEcUI7QUFFOUIsVUFBTyxFQUZ1QjtBQUc5QixNQUFHO0FBSDJCLEdBQS9CLEVBSUcsRUFKSDtBQUtBLEVBTkQ7O0FBUUEsS0FBSSxXQUFXLEVBQUUsVUFBRixDQUFmLENBWlksQ0FZa0I7QUFDOUIsS0FBSSxZQUFZLFNBQVMsTUFBVCxHQUFrQixHQUFsQyxDQWJZLENBYTJCO0FBQ3ZDLEtBQUksV0FBVyxPQUFmLENBZFksQ0FjWTs7QUFFeEI7QUFDQSxVQUFTLFdBQVQsR0FBdUI7QUFDdEIsTUFBSSxrQkFBa0IsRUFBRSxNQUFGLEVBQVUsU0FBVixFQUF0QjtBQUNBO0FBQ0EsTUFBSSxtQkFBbUIsU0FBdkIsRUFBa0M7QUFDakMsS0FBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixRQUF0QjtBQUNBLEdBRkQsTUFFTztBQUNOLEtBQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsUUFBekI7QUFDQTtBQUNEOztBQUVELEdBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxhQUFiLEVBQTRCLFlBQVc7QUFDdEM7QUFDQSxFQUZEO0FBR0EsQ0E5QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpIHtcblxuXHRjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dGwuc3RhZ2dlclRvKCcuaXMtc2xpZGVVcCcsIDEsIHtcblx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRkZWxheTogLjgsXG5cdFx0XHR5OiAwXG5cdFx0fSwgLjUpXG5cdH0pO1xuXG5cdGxldCAkRWxlbWVudCA9ICQoJy5TZXJ2aWNlJyk7IC8vIOi/veW+k+OBmeOCi+imgee0oFxuXHRsZXQgYmFzZVBvaW50ID0gJEVsZW1lbnQub2Zmc2V0KCkudG9wOyAvLyDov73lvpPjgZnjgovopoHntKDjga7liJ3mnJ/kvY3nva5cblx0bGV0IGZpeENsYXNzID0gJ2lzLWJnJzsgLy8g6L+95b6T5pmC44Gr5LuY5LiO44GZ44KLY2xhc3NcblxuXHQvLyDopoHntKDjgYzov73lvpPjgZnjgovlh6bnkIZcblx0ZnVuY3Rpb24gZml4RnVuY3Rpb24oKSB7XG5cdFx0bGV0IHdpbmRvd1Njcm9sbHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHQvLyDjgrnjgq/jg63jg7zjg6vjgYzliJ3mnJ/kvY3nva7jgpLpgJrpgY7jgZfjgabjgYTjgovjgajjgY1cblx0XHRpZiAod2luZG93U2Nyb2xsdG9wID49IGJhc2VQb2ludCkge1xuXHRcdFx0JCgnLkhlYWRlcicpLmFkZENsYXNzKGZpeENsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLkhlYWRlcicpLnJlbW92ZUNsYXNzKGZpeENsYXNzKTtcblx0XHR9XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ2xvYWQgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG5cdFx0Zml4RnVuY3Rpb24oKTtcblx0fSk7XG59KTtcbiJdfQ==
