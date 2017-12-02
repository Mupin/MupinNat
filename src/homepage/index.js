var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx,next) {
    title('Mupiñ');
    var main = document.getElementById('main-container');

    var pictures =[
        {
            user: {
                username:'Mupiñ',
                avatar: 'logo-mupin.png'
            },
            url: 'default.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user: {
                username:'Mupiñ',
                avatar: 'logo-mupin.png'
            },
            url: 'default.jpg',
            likes: 1,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() -10)
        }
    ];
    empty(main).appendChild(template(pictures));
})


