(function() {
	'use strict';

	const markdownArticleElement = document.querySelector('#markdown-article');

	const article = `
# Мейн-кун

__Мейн-ку́н__ ([англ.](https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA) maine coon) — порода [кошек](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0), которая произошла от кошек [штата Мэн](https://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D0%BD_(%D1%88%D1%82%D0%B0%D1%82)) в Северо-Восточной Америке. Аборигенная порода кошек Северной Америки. Название "maine coon" переводится как "Мэнский енот", отсюда происходит второе название этой породы - мэнская енотовая кошка.
`;

	markdownArticleElement.innerHTML = marked(article);
})();
