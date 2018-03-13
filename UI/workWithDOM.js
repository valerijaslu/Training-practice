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
            temp.getElementsByClassName('iconButton').item(0).style.display = 'inline-block';
            temp.getElementsByClassName('iconButton').item(2).style.display = 'inline-block';
            temp.getElementsByClassName('iconButton').item(3).style.display = 'inline-block';
        }
        if(post.likes && post.likes.length){
            temp.getElementsByClassName('postLikes').item(0).innerHTML = post.likes.length + ' likes';
        }
        else {
            temp.getElementsByClassName('postLikes').item(0).innerHTML = 0 + ' likes';
        }
        var date = post.createdAt;
        temp.getElementsByClassName('postDate').item(0).innerHTML = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        temp.getElementsByClassName('name').item(0).innerHTML = post.author;
        temp.getElementsByClassName('description').item(0).innerHTML = post.description;
        if(typeof post.hashTags !== 'undefined'){
            temp.getElementsByClassName('hashTags').item(0).innerHTML = '#: ' + post.hashTags.toString();
            // forming hashtags datalist fo filters
            for(var i = 0; i < post.hashTags.length; i++) {
                var hasBeenHashtag = false;
                var optionHashtag = document.createElement('option');
                optionHashtag.value = post.hashTags[i];
                optionHashtag.innerHTML = post.hashTags[i];
                for(var j = 0; j < document.getElementById('hashtags').childNodes.length; j++) {
                    if (document.getElementById('hashtags').childNodes.item(j).value === post.hashTags[i]) {
                        hasBeenHashtag = true;
                        break;
                    }
                }
                if(!document.getElementById('hashtags').childNodes.length || !hasBeenHashtag){
                    document.getElementById('hashtags').appendChild(optionHashtag);
                }
            }
        }
        document.getElementById('posts').appendChild(temp);

        // forming authors datalist fo filters
        var hasBeenAuthor = false;
        var optionAuthor = document.createElement('option');
        optionAuthor.value = post.author;
        optionAuthor.innerHTML = post.author;
        for(var i = 0; i < document.getElementById('name').childNodes.length; i++) {
            if (document.getElementById('name').childNodes.item(i).value === post.author) {
                hasBeenAuthor = true;
                break;
            }
        }
        if(!document.getElementById('name').childNodes.length || !hasBeenAuthor){
            document.getElementById('name').appendChild(optionAuthor);
        }
    }

    function like(postID) {
        var post = module.getPhotoPost(postID);
        if(post.likes && post.likes.indexOf(user) === -1) {
            post.likes.push(user);
        }
        else{
            post.likes.pop(user);
        }
        getPhotoPosts();
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
        removePhotoPost: removePhotoPost,
        like: like
    }
}());

dom.getPhotoPosts();
