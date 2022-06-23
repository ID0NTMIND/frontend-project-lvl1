instal: # Инизилизация 
	npm ci
brain-games: #
	node bin/brain-games.js
publish: #Отладка публикации 
	npm publish --dry-run
lint: #Запуск линтера
	npx eslint .