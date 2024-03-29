import { Missile } from './Missile.js';

export class Spaceship {
	missiles = [];
	#modifier = 3;
	#leftArrow = false;
	#rightArrow = false;

	constructor(element, container) {
		this.element = element;
		this.container = container;
	}

	init() {
		this.setPosition();
		this.#eventListener();
		this.#gameLoop();
	}

	setPosition() {
		this.element.style.bottom = '0';
		this.element.style.left = `${window.innerWidth / 2 - this.#getPosition()}px`;
	}

	#getPosition() {
		return this.element.offsetLeft + this.element.offsetWidth / 2;
	}

	#eventListener() {
		window.addEventListener('keydown', ({ keyCode }) => {
			switch (keyCode) {
				case 37:
					this.#leftArrow = true;
					break;
				case 39:
					this.#rightArrow = true;
					break;
				default:
					return;
			}
		});

		window.addEventListener('keyup', ({ keyCode }) => {
			switch (keyCode) {
				case 37:
					this.#leftArrow = false;
					break;
				case 39:
					this.#rightArrow = false;
					break;
				case 32:
					this.#shot();
					break;
				default:
					return;
			}
		});
	}

	#gameLoop = () => {
		this.#whatKey();

		requestAnimationFrame(this.#gameLoop);
	};

	#whatKey() {
		if (this.#leftArrow && this.#getPosition() > 12) {
			this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#modifier}px`;
		}
		if (this.#rightArrow && this.#getPosition() + 12 < window.innerWidth) {
			this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#modifier}px`;
		}
	}

	#shot() {
		const missile = new Missile(this.#getPosition(), this.element.offsetTop, this.container);

		missile.init();
		this.missiles.push(missile);
	}
}
