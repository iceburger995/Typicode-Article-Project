$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {

    function getID(location) {
        return location.slice(location.indexOf('=') + 1);
    }

    const editForm = document.getElementById('edit-form');
    const saveBtn = document.querySelector('[type=submit]');
    const titleName = document.querySelector('[name=title]');
    const content = document.querySelector('[name=content]');

    getSingleArticle(getID(window.location.search))
        .then(response => {
            titleName.value = response.title;
            content.value = response.body;
        });

    saveBtn.addEventListener('click', function(event) {
        event.preventDefault();

        editArticle(getID(window.location.search), titleName.value, content.value);
    })
}