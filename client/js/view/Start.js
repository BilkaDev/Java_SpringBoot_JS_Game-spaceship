export class Start {
	#htmlElements = {
		container: document.querySelector('[data-modal-start-view]'),
		buttonStart: document.querySelector('[data-button-start-game]'),
		buttonRanking: document.querySelector('[data-button-start-ranking]'),
		buttonUserStats: document.querySelector('[data-button-start-user-stats]'),
		modalRanking: document.querySelector('[data-modal-ranking]'),
		modalUserStats: document.querySelector('[data-modal-user-stats]'),
	};
	constructor(init) {
		this.#htmlElements.buttonStart.addEventListener('click', () => {
			init();
			this.#hide();
		});

		this.#htmlElements.buttonRanking.addEventListener('click', (e) => {
			this.#htmlElements.modalRanking.classList.remove('hide');
			this.#hide();
		});
		this.#htmlElements.buttonUserStats.addEventListener('click', (e) => {
			this.#htmlElements.modalUserStats.classList.remove('hide');
			this.#hide();
		});
	}

	#hide() {
		this.#htmlElements.container.classList.add('hide');
	}
}
