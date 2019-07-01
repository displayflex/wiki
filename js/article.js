(function() {
	'use strict';

	const articleElement = document.querySelector('#article');

	const id = parseInt(location.search.substr(4));
	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);

	let article = null;

	for (let i = 0; i < articles.length; i++) {
		if (articles[i].id === id) {
			article = articles[i];
		}
	}

	articleElement.innerHTML = `<h1>${article.title}</h1>` + marked(article.content);
})();
