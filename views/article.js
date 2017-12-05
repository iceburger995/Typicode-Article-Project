/* global $ */
/* global Article */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {

    function shortenBody(string) {
        const maxLength = 65;
        let shortBody = string.substr(0, maxLength);
        shortBody = shortBody.substr(0, Math.min(shortBody.length, shortBody.lastIndexOf(" ")));
        return shortBody + "...";
    }

    const contentEl = document.getElementById('content');

    getArticles()
        .then(response => { displayArticles(response) })
        .then(hoverElements);

    function displayArticles(articles) {
        const template = document.getElementById('template');
        for (let i = 0; i < articles.length; i++) {
            const currentArticle = template.cloneNode(true);
            currentArticle.id = articles[i].id;
            const articleTitle = currentArticle.querySelector('.article-title');
            articleTitle.innerHTML = articles[i].title;

            articleTitle.addEventListener('click', function() {
                this.parentNode.href += '?id=' + currentArticle.id;
            });

            const deleteBtn = currentArticle.querySelector('.article-delete');
            deleteBtn.id = articles[i].id;
            deleteBtn.addEventListener('click', function() {
                deleteArticle(deleteBtn.id)
                console.log('Beep Beep Boop, Article with ID number ' + deleteBtn.id + ' has been deleted! ' +
                    "Don't believe me, Beep Boop? Check the Network tab!");
            });

            const editBtn = currentArticle.querySelector('.article-edit');
            editBtn.addEventListener('click', () => {
                document.location.href = 'file:///C:/Users/siegf/Dropbox/sublimeWork/OOP-Homework/pages/edit-article.html?id=' + currentArticle.id;
            });

            const articleBody = currentArticle.querySelector('.article-body');
            articleBody.innerHTML = shortenBody(articles[i].body);

            contentEl.appendChild(currentArticle);
        }
        template.style.display = 'none';
    };

    function hoverElements() {
        const articleElements = document.querySelectorAll('.article-element');
        for (let i = 1; i < articleElements.length; i++) {
            articleElements[i].addEventListener('mouseover', function() { this.style.background = '#d1d0d9' });
            articleElements[i].addEventListener('mouseout', function() { this.style.background = '#e3e3e3' });
        }
    };
}