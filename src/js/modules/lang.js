const btnLang = document.querySelectorAll('.footer__lang-item')

function changeLang() {
	btnLang.forEach(element => {
		element.addEventListener('click', function (e) {
			btnLang.forEach(el => {
				el.classList.remove('footer__lang-item--active')
			})
			if (e.currentTarget) {
				e.currentTarget.classList.add('footer__lang-item--active')
			}
		})
	})
}

 export default changeLang
