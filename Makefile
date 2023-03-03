install: #установка окружения
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #процесс публикации пакета
	npm publish --dry-run