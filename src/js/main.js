// Define function, variables
const homeBanner = () => {
	return new Swiper('.home-banner .swiper-container', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,
	})
}

const productSlider = () => {
	return new Swiper('.index-1 .swiper-container', {
		slidesPerView: 4,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.index-1 .swiper-prev',
			nextEl: '.index-1 .swiper-next',
		},
		spaceBetween: 15,
		speed: 1000,
	})
}

const collectionSlider = () => {
	return new Swiper('.index-2 .swiper-container', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.index-2 .swiper-prev',
			nextEl: '.index-2 .swiper-next',
		},
		speed: 1000,
	})
}

const cosmeticSlider = () => {
	return new Swiper('.index-3 .swiper-container', {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.index-3 .swiper-prev',
			nextEl: '.index-3 .swiper-next',
		},
	})
}

const fixedHeaderActive = () => {
	if (window.scrollY > 50) {
		document.querySelector('header').classList.add('active')
	} else {
		document.querySelector('header').classList.remove('active')
	}
}

const toggleGoTopButton = () => {
	let currentScroll = document.querySelector('body').clientHeight - (window.innerHeight + 200);
	if (window.scrollY >= currentScroll) {
		document.getElementById('go-top').style.display = 'flex';
		setTimeout(() => {
			document.getElementById('go-top').classList.add('show');
		}, 0);
	} else {
		document.getElementById('go-top').style.display = 'none';
		document.getElementById('go-top').classList.remove('show');
	}
}

const goTop = () => {
	let goTopButton = document.getElementById('go-top')
	goTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}

// Call functions here
document.addEventListener("DOMContentLoaded", () => {
	objectFitImages('.ofc');
	fixedHeaderActive();
	toggleGoTopButton();
	goTop();
	// ----------
	homeBanner();
	productSlider();
	collectionSlider();
	cosmeticSlider();
})
window.addEventListener('scroll', () => {
	fixedHeaderActive();
	toggleGoTopButton();
})