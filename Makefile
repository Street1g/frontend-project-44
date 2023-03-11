install: #установка окружения
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #процесс публикации пакета
	npm publish --dry-run

lint: #запуск линт
	npx eslint .

brain-even: #запуск игры с проверкой на четность
	node bin/brain-even.js

brain-calc: #запуск игры калькулятор
	node bin/brain-calc.js

brain-gcd: #запуск игры НОД
	node bin/brain-gcd.js

brain-progression: #запуск игры прогрессия
	node bin/brain-progression.js

brain-prime: #запуск игры "простое ли число"
	node bin/brain-prime.js

	