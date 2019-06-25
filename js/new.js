(function() {
	'use strict';

	const markdownSourceElement = document.querySelector('#markdown-source');
	const markdownResultElement = document.querySelector('#markdown-result');
	const saveArticleButton = document.querySelector('#save-article-button');
	const articleTitleElement = document.querySelector('#article-title');

	markdownSourceElement.addEventListener('keyup', function(event) {
		const result = marked(markdownSourceElement.value);
		markdownResultElement.innerHTML = result;
	});

	saveArticleButton.addEventListener('click', function() {
		const newArticle = {
			id: 0,
			title: articleTitleElement.value,
			content: markdownSourceElement.value
		};

		const json = localStorage.getItem('articles');
		const articles = JSON.parse(json);

		newArticle.id = articles.length + 1;
		articles.push(newArticle);
		localStorage.setItem('articles', JSON.stringify(articles));
	});
})();
