(function() {
	'use strict';

	const markdownArticleElement = document.querySelector('#markdown-article');
	const lastArticlesListElement = document.querySelector('#last-articles');
	const allArticlesListElement = document.querySelector('#all-articles');
	const readArticleButton = document.querySelector('#read-article');

	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);
	const lastArticle = articles[articles.length - 1];

	// Опубликовать 200 символов последней из добавленных статей
	markdownArticleElement.innerHTML = marked(lastArticle.content.substr(0, 200) + '...');

	// Вывести список статей
	let str = '';

	for (let i = 0; i < articles.length; i++) {
		const currentArticle = articles[i];
		str += `<li class="other-list__item"><a class="other-list__link" href="#">${currentArticle.title}</a></li>`
	}

	allArticlesListElement.innerHTML = str;
})();
