/* global $ */

const postsURL = 'https://jsonplaceholder.typicode.com/posts';

function getArticles() {
    return $.ajax(postsURL, {
        method: 'GET',
        success: response => {
            return response;
        },
        error: err => {
            alert('Getting Article data failed, error: ' + err);
        }
    });
}

function getSingleArticle(id) {
    return $.ajax(postsURL + '/' + id, {
        method: 'GET',
        success: response => {
            return response;
        },
        error: err => {
            alert('Whoops' + err);
        }
    });
}

function deleteArticle(id) {
    const deleteEl = new Promise((resolve, reject) => {
        $.ajax(postsURL + '/' + id, {
            method: 'DELETE',
            error: err => {
                reject('There was an error: ' + err);
            }
        });
    });
}

function editArticle(id, title, body) {
    const editEl = new Promise((resolve, reject) => {
        $.ajax(postsURL + '/' + id, {
            method: 'PATCH',
            data: {
                title: title,
                body: body
            },
            success: response => {
                resolve(response);
            },
            error: err => {
                alert('Whoops, something happened while editing: ' + err)
            }
        })
    })
}