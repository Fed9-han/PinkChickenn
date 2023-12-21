const btnAssist = document.getElementById('assistant-button')
const menuAssist = document.querySelector('.chat__assistant-menu')

function showMenuAssist() {
	btnAssist.addEventListener('click', function () {
		btnAssist.classList.toggle('assistant-button--active')
    menuAssist.classList.toggle('chat__assistant-menu--active')
	})
}

export default showMenuAssist
