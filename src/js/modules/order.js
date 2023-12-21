const btnQuestion = document.querySelectorAll('.question-btn')
const textarea = document.getElementById('textarea')

function makeOrder() {
	btnQuestion.forEach(item => {
		item.addEventListener('click', function (e) {
			if (e.currentTarget === btnQuestion[0]) {
				textarea.innerHTML = 'Здравствуйте, я хочу заказать у Вас Медиаплан'
			}
			if (e.currentTarget === btnQuestion[1]) {
				textarea.innerHTML = 'Здравствуйте, я хочу заказать у Вас Отчет'
			}
		})
	})
}
export default makeOrder