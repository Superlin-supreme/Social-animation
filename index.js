window.onload = function() {
	var bubble =  document.getElementById('bubble');
	var time = 3;
	function play(){
		setTimeout(function(){
			bubble.setAttribute('class', 'bubble fadein');
			setTimeout(function(){
				bubble.setAttribute('class', 'bubble');
				time--;
				if (time) {
					play();
				}				
			}, 3000)			
		}, 2000);
	}
	// play();
	// 
	setTimeout(function(){
		document.getElementById('voiceover1').setAttribute('class', 'FadeOut');
	}, 3500)
}