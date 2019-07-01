(function() {
	'use strict';

	const articleElement = document.querySelector('#article');
	const lastArticlesListElement = document.querySelector('#last-articles');
	const editArticleButton = document.querySelector('#edit-article');

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

	// Вывести список 3-х последних статей статей
	let str = '';

	for (let i = articles.length - 3; i < articles.length; i++) {
		const currentArticle = articles[i];
		str += `<li class="articles-list-item"><a href="article.html?id=${currentArticle.id}" class="articles-list-link">${
			currentArticle.title
		}</a></li>`;
	}

	lastArticlesListElement.innerHTML = str;

	// Редактирование статьи
	editArticleButton.addEventListener('click', function() {
		location.replace('new.html?id=' + id);
	});
})();
