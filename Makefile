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