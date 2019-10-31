// Define function, variables
import GGMAP from './map';
import Mapping from '../../vendors/mapping';

const homeBanner = () => {
	return new Swiper('.home-banner .swiper-container', {
		slidesPerView: 1,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.home-banner .swiper-container .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		speed: 1000,
	})
}

const productSlider = () => {
	return new Swiper('.index-1 .home-product-slider .swiper-container', {
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
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: '.index-1 .home-product-slider .swiper-container .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})
}

const collectionSlider = () => {
	return new Swiper('.index-2 .swiper-container', {
		slidesPerView: 1,
		loop: true,
		observer: true,
		observerParents: true,
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
		observer: true,
		observerParents: true,
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

const checkIndexPage = () => {
	const isIndexPage = document.querySelector('#js-page-verify');
	if (isIndexPage.getAttribute('id') == 'index-page') {
		document.querySelector('body').classList.add('index-page');
	}
}

const saleMasonry = () => {
	if (document.getElementById('sale-masonry')) {
		$('#sale-masonry').imagesLoaded().done(function (instance) {
			return new Masonry('#sale-masonry', {
				itemSelector: '.grid-item',
				fitWidth: true,
				resize: true,
			});
		})
	}
}

const productDetailSlider = () => {
	
	let _thisHeightRatio;
	
	const getHeightRatio = (heightRatio) => {
		const width = Number(document.querySelector('.product-detail-slider .big-image').clientWidth);
		const height = Number(document.querySelector('.product-detail-slider .big-image').clientHeight);
		if (!isNaN(heightRatio)) {
			_thisHeightRatio = heightRatio;
		}
		_thisHeightRatio = Number(width / height);
	}
	
	const setHeight = function (ratio) {
		if (window.innerWidth >= 1025) {
			const height = document.querySelector('.product-detail-slider .big-image').clientWidth / ratio;
			document.querySelector('.product-detail-slider .small-image').style.height = height + 'px';
		}
	}
	
	const smallimageSlider = new Swiper('.product-detail-slider .small-image .swiper-container', {
		init: false,
		slidesPerView: 4,
		direction: 'vertical',
		spaceBetween: 10,
		freeMode: true,
		freeModeMomentum: true,
		freeModeSticky: true,
		observer: true,
		observerParents: true,
		speed: 900,
		breakpoints: {
			1025: {
				direction: 'horizontal',
			},
		},
		on: {
			init: function () {
				if (window.innerWidth < 1025) {
					Array.from(document.querySelectorAll('.product-detail-slider .small-image .swiper-slide')).forEach(item => {
						item.style.height = item.style.width;
					})
				}
				document.querySelector('.product-detail-slider .small-image .swiper-slide').classList.add('swiper-slide-thumb-active');
			},
			resize: function () {
				if (window.innerWidth < 1025) {
					Array.from(document.querySelectorAll('.product-detail-slider .small-image .swiper-slide')).forEach(item => {
						item.style.height = item.style.width;
					})
				}
			},
		},
	})
	
	const bigImagesSlider = new Swiper('.product-detail-slider .big-image .swiper-container', {
		slidesPerView: 1,
		watchSlidesVisibility: true,
		observer: true,
		observerParents: true,
		speed: 900,
		thumbs: {
			swiper: smallimageSlider,
		},
		on: {
			init: function () {
				getHeightRatio(_thisHeightRatio);
				setHeight(_thisHeightRatio);
				smallimageSlider.init();
				if (window.innerWidth < 1025) {
					Array.from(document.querySelectorAll('.product-detail-slider .big-image .swiper-slide')).forEach(item => {
						item.style.height = item.style.width;
					})
				}
			},
			resize: function () {
				setHeight(_thisHeightRatio);
				smallimageSlider.update();
				if (window.innerWidth < 1025) {
					Array.from(document.querySelectorAll('.product-detail-slider .big-image .swiper-slide')).forEach(item => {
						item.style.height = item.style.width;
					})
				}
			},
		},
	})
}

const onlyInputNumberProductQuantity = () => {
	let productQuantityInput = document.getElementById('quantity')
	if (productQuantityInput) {
		productQuantityInput.addEventListener('keyup', (e) => {
			if (isNaN(productQuantityInput.value)) {
				productQuantityInput.value = '';
				alert('Chỉ nhập số');
			}
		})
	}
}

const productRelatedSlider = () => {
	return new Swiper('.product .product-related .swiper-container', {
		slidesPerView: 3,
		autoplay: {
			delay: 4400,
			disableOnInteraction: false,
		},
		loop: true,
		spaceBetween: 80,
		navigation: {
			prevEl: '.product .product-related .swiper-prev',
			nextEl: '.product .product-related .swiper-next',
		},
		breakpoints: {
			1200: {
				spaceBetween: 40,
			},
			1025: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	})
}

const Header = () => {
	const buttonMenuToggle = document.querySelector('.menu-toggle');
	const headerNav = document.querySelector('.header-navs');
	const navItemButton = Array.from(document.querySelectorAll('.nav-item-toggle'));
	const navItemClose = Array.from(document.querySelectorAll('.nav-sub-close'));
	const searchToggle = document.querySelector('.header-items .item.search .icon');
	const cartToggle = document.querySelector('.header-items .item.cart .icon');
	const loginToggle = document.querySelector('.header-items .item.login .icon');
	const html = document.querySelector('html');
	
	buttonMenuToggle.addEventListener('click', function () {
		this.querySelector('.hamburger-1').classList.toggle('active')
		if (this.querySelector('.hamburger-1').classList.contains('active')) {
			headerNav.classList.add('mobile-active');
			html.classList.add('ofh');
		} else {
			headerNav.classList.remove('mobile-active');
			html.classList.remove('ofh');
		}
		navItemClose.forEach(navItem => {
			navItem.parentNode.classList.remove('mobile-active');
		})
		searchToggle.parentNode.querySelector('.search-form').classList.remove('mobile-active');
		cartToggle.parentNode.querySelector('.cart-panel').classList.remove('open');
		loginToggle.parentNode.querySelector('.login-panel').classList.remove('open');
	})
	
	navItemButton.forEach(navItem => {
		navItem.addEventListener('click', function () {
			this.parentNode.querySelector('.nav-sub').classList.add('mobile-active');
		})
	})
	
	navItemClose.forEach(navItem => {
		navItem.addEventListener('click', function () {
			this.parentNode.classList.remove('mobile-active');
		})
	})
	
	searchToggle.addEventListener('click', function () {
		this.parentNode.querySelector('.search-form').classList.toggle('mobile-active');
		headerNav.classList.remove('mobile-active');
		buttonMenuToggle.querySelector('.hamburger-1').classList.remove('active')
		cartToggle.parentNode.querySelector('.cart-panel').classList.remove('open');
		loginToggle.parentNode.querySelector('.login-panel').classList.remove('open');
	})
	
	cartToggle.addEventListener('click', function () {
		cartToggle.parentNode.querySelector('.cart-panel').classList.toggle('open');
		headerNav.classList.remove('mobile-active');
		buttonMenuToggle.querySelector('.hamburger-1').classList.remove('active');
		searchToggle.parentNode.querySelector('.search-form').classList.remove('mobile-active');
		loginToggle.parentNode.querySelector('.login-panel').classList.remove('open');
	})
	
	loginToggle.addEventListener('click', function () {
		loginToggle.parentNode.querySelector('.login-panel').classList.toggle('open');
		headerNav.classList.remove('mobile-active');
		cartToggle.parentNode.querySelector('.cart-panel').classList.remove('open');
		buttonMenuToggle.querySelector('.hamburger-1').classList.remove('active');
		searchToggle.parentNode.querySelector('.search-form').classList.remove('mobile-active');
	})
	
	const bp = window.matchMedia('(max-width: 1024px)');
	const homePageLink = document.querySelector('.nav-item.home-page');
	const firstItem = document.querySelector('.nav-item.first-item');
	const setLogoInMenuMobile = (bp) => {
		const logoMobile = document.querySelector('header .logo').cloneNode();
		logoMobile.classList.add('nav-item');
		if (bp.matches) {
			firstItem.parentNode.insertBefore(homePageLink, firstItem);
		} else {
			if (document.querySelector('.nav-item.home-page')) {
				homePageLink.parentNode.removeChild(homePageLink)
			}
		}
	}
	setLogoInMenuMobile(bp);
	bp.addListener(setLogoInMenuMobile);
}

const filterPriceSlider = () => {
	if (document.getElementById('price-slider')) {
		if (document.querySelector('#price-slider')) {
			const defaultValue = JSON.parse(document.getElementById('price-slider').getAttribute('data-default'));
			const minPrice = Number(document.getElementById('price-slider').getAttribute('data-min'));
			const maxPrice = Number(document.getElementById('price-slider').getAttribute('data-max'));
			document.getElementById('price-max').textContent = defaultValue[1].toLocaleString() + '₫';
			document.getElementById('price-min').textContent = defaultValue[0].toLocaleString() + '₫';
			$('#price-slider').slider({
				values: defaultValue,
				max: maxPrice,
				min: minPrice,
				range: true,
				step: 5000,
				slide: function (event, ui) {
					document.getElementById('price-max').textContent = ui.values[1].toLocaleString() + '₫';
					document.getElementById('price-min').textContent = ui.values[0].toLocaleString() + '₫';
				},
			});
		}
	}
}

const toggleFilterMobile = () => {
	if (document.querySelector('.product-list-page')) {
		const filterToggle = document.querySelector('.filter-toggle');
		const colFilter = document.querySelector('.col-product-filter');
		const filterCloseBtn = document.querySelector('.filter-close-btn')
		const headerItems = document.querySelector('.header-items');
		const html = document.querySelector('html');
		
		const preventScroll = () => {
			html.classList.add('ofh')
		}
		const disablePreventScroll = () => {
			html.classList.remove('ofh')
		}
		const removeActive = () => {
			colFilter.classList.remove('mobile-active');
			filterToggle.classList.remove('filter-active');
			headerItems.classList.remove('filter-active');
			disablePreventScroll();
		}
		
		window.addEventListener('scroll', () => {
			let filterTogglePosition = filterToggle.parentNode.offsetTop;
			if (window.scrollY >= filterTogglePosition) {
				filterToggle.classList.add('mobile-fixed');
			} else {
				filterToggle.classList.remove('mobile-fixed');
			}
		})
		
		filterToggle.addEventListener('click', () => {
			colFilter.classList.toggle('mobile-active');
			if (colFilter.classList.contains('mobile-active')) {
				filterToggle.classList.add('filter-active');
				headerItems.classList.add('filter-active');
				preventScroll();
			}
		})
		
		filterCloseBtn.addEventListener('click', removeActive);
	}
};

const configFancybox = () => {
	$('[data-fancybox]').fancybox({
		hash: false,
		closeExisting: true,
	})
}

const moveCartBack = () => {
	const cartBack = document.querySelector('.cart-back');
	if (cartBack) {
		return new Mapping('.cart-back', {
			mobileNode: '.cart-checkout',
			mobileMethod: 'appendTo',
			desktopMethod: 'insertAfter',
			desktopNode: '.cart-table',
			breakpoint: 1200,
		})
	}
};

const productDetailQuantity = () => {
	const quantityWrapper = document.querySelector('.product .detail .quantity');
	if (quantityWrapper) {
		const decreaseBtn = quantityWrapper.querySelector('#decrease');
		const increaseBtn = quantityWrapper.querySelector('#increase');
		const quantity = quantityWrapper.querySelector('#quantity');
		decreaseBtn.addEventListener('click', () => {
			quantity.value = Number(quantity.value) - 1 < 0 ? 0 : Number(quantity.value) - 1;
		});
		increaseBtn.addEventListener('click', () => {
			quantity.value = Number(quantity.value) + 1;
		})
	}
};

// Call functions here
document.addEventListener('DOMContentLoaded', () => {
	objectFitImages('.ofc');
	fixedHeaderActive();
	toggleGoTopButton();
	goTop();
	checkIndexPage();
	Header();
	// ----------
	configFancybox();
	homeBanner();
	collectionSlider();
	cosmeticSlider();
	saleMasonry();
	productSlider();
	productDetailSlider();
	onlyInputNumberProductQuantity();
	productRelatedSlider();
	filterPriceSlider();
	toggleFilterMobile();
	moveCartBack();
	productDetailQuantity();
	AOS.init({
		offset: 150, // offset (in px) from the original trigger point
		delay: 250, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
		easing: 'ease-in-out', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
});

window.addEventListener('scroll', () => {
	fixedHeaderActive();
	toggleGoTopButton();
})
