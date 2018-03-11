window.dom = (function() {
    //var feed = document[0].firstChild;
    var user = 'Alex';

    document.getElementsByClassName('userInfo').item(0).getElementsByTagName('h3').item(0).innerHTML = user;
    if(!user){
        document.getElementsByClassName('whiteButton').item(0).innerHTML = 'LOG IN';
        document.getElementsByClassName('whiteButton').item(1).style.display = 'none';
    }

    function getPhotoPosts(skip, top, filterConfig) {
        var posts = document.getElementById('posts');
        while (posts.firstChild) {
            posts.removeChild(posts.firstChild);
        }
        var photoPosts = module.getPhotoPosts(skip, top, filterConfig);
        for(var i = 0; i < photoPosts.length; i++){
            appendPost(photoPosts[i]);
        }
    }

    function appendPost(post) {
        if(post.state !== 'active'){
            return;
        }
        var template = document.getElementById('template');
        var temp = template.cloneNode(true);
        temp.style.display = 'inline-block';
        temp.getElementsByClassName('photo').item(0).src = post.photoLink;
        if(user === post.author) {
            temp.getElementsByClassName('iconButton').item(2).style.display = 'inline-block';
            temp.getElementsByClassName('iconButton').item(3).style.display = 'inline-block';
        }
        temp.getElementsByClassName('likes').item(0).getElementsByTagName('p').item(0).innerHTML = post.likes.length + ' likes';
        var date = post.createdAt;
        temp.getElementsByClassName('date').item(0).getElementsByTagName('p').item(0).innerHTML = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        temp.getElementsByClassName('descrOfPost').item(0).getElementsByTagName('p').item(2).innerHTML = post.author;
        temp.getElementsByClassName('descrOfPost').item(0).getElementsByTagName('p').item(3).innerHTML = post.description;
        temp.getElementsByClassName('descrOfPost').item(0).getElementsByTagName('p').item(4).innerHTML = '#: ' + post.hashTags.toString();
        document.getElementById('posts').appendChild(temp);
    }

    function addPhotoPost(post){
        module.addPhotoPost(post);
        appendPost(post);
        getPhotoPosts();
    }

    function removePhotoPost(postId) {
        module.removePhotoPost(postId);
        getPhotoPosts();
    }

    function editPhotoPost(postID, post) {
        module.editPhotoPost(postID, post);
        getPhotoPosts();
    }

    return {
        getPhotoPosts: getPhotoPosts,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }
}());

dom.getPhotoPosts();
