install: # Инизилизация 
	npm ci
brain-games: #
	node bin/brain-games.js
brain-even: #
	node bin/brain-even.js
brain-calc: #
	node bin/brain-calc.js
brain-gcd: #
	node bin/brain-gcd.js
brain-prime: #
	node bin/brain-prime.js
brain-progression: #
	node bin/brain-progression.js
publish: #Отладка публикации 
	npm publish --dry-run
lint: #Запуск линтера
	npx eslint .