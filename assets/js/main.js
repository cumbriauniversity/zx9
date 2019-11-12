/*
 * Lazy Load Images
 */
var replaceSrc = function () {
	x = document.getElementsByClassName('lazy-load-me');
	for (i = 0; i < x.length; i++){
		if (x[i].getBoundingClientRect().top < window.innerHeight) {
			img = x[i]
			if(window.innerWidth < 850 && x[i].getAttribute('mobi-src') != null){
				lazySRC = x[i].getAttribute('mobi-src');
			}else{
				lazySRC = x[i].getAttribute('desk-src');		
			}
			if(x[i].tagName == 'VIDEO'){
				x[i].canPlayType("video/mp4");
				x[i].src = lazySRC;
				if(String(x[i].classList).indexOf('img-background') > -1 && String(navigator.appVersion).indexOf('Trident/8.0' || 'Trident/7.0' || 'Trident/6.0' || 'Trident/5.0')){
					x[i].load();
					x[i].onload = x[i].play();
				}
				x[i].classList.remove("lazy-load-me");
			}else{
				x[i].src = lazySRC;
				x[i].classList.remove("lazy-load-me");
			}
		}
	}
};
replaceSrc();
window.addEventListener('scroll', replaceSrc, false);
