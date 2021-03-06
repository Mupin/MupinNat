var yo = require('yo-yo');
var moment = require('moment');

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');

module.exports = function pictureCard(pic) {
    var el;
    function render(picture){
        return yo `<div class="card ${picture.liked ? 'liked' : ''}">
                <div class="card-image">
                    <img class="activator" src="${picture.url}">
                </div>
                <div class="card-content">
                    <a href="/user/${picture.user.username}" class="card-title">
                        <div class="avatar" style="background-image: url('${picture.user.avatar}');"></div>
                        <span class="username">${picture.user.username}</span>
                    </a>
                    <small class="right time">${rf.format(picture.createdAt)}</small>
                    <p>
                        <a href="#" class="left" onclick=${like.bind(null,true)}>
                            <i class="left fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="left" onclick=${like.bind(null,false)}>
                            <i class="left fa fa-heart" aria-hidden="true"></i>
                        </a>
                         <span class="left likes">${picture.likes} lo apoyo</span>
                    </p>
                </div> 
            </div>`
    }

    function like(liked) {echo "# MupinNat" >> README.md
        pic.liked = liked;
        pic.likes += liked ? 1 : -1;
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
    }

    el = render(pic);
    return el;

}

hola
