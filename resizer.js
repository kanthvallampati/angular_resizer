angular.module('ng.resizer', []).directive('resizer', function($document) {

	return function($scope, $element, $attrs) {

		$element.on('mousedown', function(event) {
			event.preventDefault();

			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {
			
			// Handles vertical resizer
			if ($attrs.resizer == 'vertical') {	
				
				var x = event.pageX;

				if ($attrs.resizerMax && x > $attrs.resizerMax) {
					x = parseInt($attrs.resizerMax);
				}
				
				if ($attrs.resizerMin && x < $attrs.resizerMin) {
					x = parseInt($attrs.resizerMin);
				}

				$element.css({
					left: x + 'px'
				});

				$($attrs.resizerLeft).css({
					width: x + 'px'
				});
				$($attrs.resizerRight).css({
					left: (x + parseInt($attrs.resizerWidth)) + 'px'
				});

			} else {	// Handle horizontal resizer									
				
				var y = window.innerHeight - event.pageY;
				
				if ($attrs.resizerMax && y > $attrs.resizerMax) {
					y = parseInt($attrs.resizerMax);
				}
				
				if ($attrs.resizerMin && y < $attrs.resizerMin) {
					y = parseInt($attrs.resizerMin);
				}
				
				$element.css({
					bottom: y + 'px'
				});

				$($attrs.resizerTop).css({
					bottom: (y + parseInt($attrs.resizerHeight)) + 'px'
				});
				$($attrs.resizerBottom).css({
					height: y + 'px'
				});
			}
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});
