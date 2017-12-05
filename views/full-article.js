$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {

    function getID(location) {
        return location.slice(location.indexOf('=') + 1);
    }

    getSingleArticle(getID(window.location.search))
        .then(response => { displaySingleArticle(response) });

    const contentArticle = document.getElementById('single-article-content');
    const singleArticleTitle = contentArticle.querySelector('.single-article-title');
    const singleArticleBody = contentArticle.querySelector('.single-article-body');

    function displaySingleArticle(article) {
        singleArticleTitle.innerHTML = article.title;
        singleArticleBody.innerHTML = article.body;
    }
}