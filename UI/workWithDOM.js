window.dom = (function() {
    var user = 'Lexie';

    // forming authors datalist fo filters
    for(var k = 0; k < module.users.length; k++) {
        var optionAuthor = document.createElement('option');
        optionAuthor.value = module.users[k].name;
        optionAuthor.innerHTML = module.users[k].name;
        document.getElementById('name').appendChild(optionAuthor);
    }

    //forming user info
    var signBtn = document.getElementById('sign');
    var signInModal = document.getElementById('signInModal');
    signBtn.addEventListener('click', function () {
        signInModal.style.display = 'block';
    });
    var logOutBtn = document.getElementById('logOut');
    logOutBtn.addEventListener('click', function () {
        user = null;
        getPhotoPosts();
    });
    var signINBtn = document.getElementById('signIN');
    signINBtn.addEventListener('click', function () {
        var userName = document.getElementById('login').value;
        var userPassword = document.getElementById('password').value;
        var tempUser = {name: userName, password: userPassword};
        if(module.users.find(function (x) { return (x.name === userName && x.password === userPassword);})){
            document.getElementById('wrongData').style.display = 'none';
            user = userName;
            signInModal.style.display = 'none';
            getPhotoPosts();
        }
        else{
            document.getElementById('wrongData').style.display = 'block';
        }
    });

    function getPhotoPosts(skip, top, filterConfig) {
        var posts = document.getElementById('posts');
        while (posts.firstChild) {
            posts.removeChild(posts.firstChild);
        }

        document.getElementsByClassName('userInfo').item(0).getElementsByTagName('h3').item(0).innerHTML = user;
        if(user){
            document.getElementById('logOut').style.display = 'inline-block';
            document.getElementById('sign').style.display = 'none';
            document.getElementById('addPost').style.display = 'inline-block';
        }
        if(!user){
            document.getElementById('logOut').style.display = 'none';
            document.getElementById('sign').style.display = 'inline-block';
            document.getElementById('addPost').style.display = 'none';
        }

        //forming posts
        var photoPosts = module.getPhotoPosts(skip, top, filterConfig);
        for(var i = 0; i < photoPosts.length; i++){
            appendPost(photoPosts[i]);
        }

        // forming hashtags datalist fo filters
        for(var k = 0; k < module.photoPosts.length; k++) {
            if (typeof module.photoPosts[k].hashTags !== 'undefined') {
                for (var i = 0; i < module.photoPosts[k].hashTags.length; i++) {
                    var hasBeenHashtag = false;
                    var optionHashtag = document.createElement('option');
                    optionHashtag.value = module.photoPosts[k].hashTags[i];
                    optionHashtag.innerHTML = module.photoPosts[k].hashTags[i];
                    for (var j = 0; j < document.getElementById('hashtags').childNodes.length; j++) {
                        if (document.getElementById('hashtags').childNodes.item(j).value === module.photoPosts[k].hashTags[i]) {
                            hasBeenHashtag = true;
                            break;
                        }
                    }
                    if (!document.getElementById('hashtags').childNodes.length || !hasBeenHashtag) {
                        document.getElementById('hashtags').appendChild(optionHashtag);
                    }
                }
            }
        }
    }

    var idToDelete;
    var idToEdit;
    var editOrAdd;
    var editModal = document.getElementById('editModal');
    var deleteModal = document.getElementById('deleteModal');
    function appendPost(post) {
        if(post.state !== 'active'){
            return;
        }
        var template = document.getElementById('template');
        var temp = template.cloneNode(true);
        temp.style.display = 'inline-block';
        temp.getElementsByClassName('item').item(0).id = post.id;
        temp.getElementsByClassName('photo').item(0).src = post.photoLink;
        if(isLiked(user, post.id)){
            temp.getElementsByClassName('like').item(0).style.display = 'inline-block';
            temp.getElementsByClassName('unlike').item(0).style.display = 'none';
        }
        else{
            temp.getElementsByClassName('unlike').item(0).style.display = 'inline-block';
            temp.getElementsByClassName('like').item(0).style.display = 'none';
        }
        if(user == null){
            temp.getElementsByClassName('unlike').item(0).style.display = 'none';
        }
        if(user === post.author) {
            temp.getElementsByClassName('editPencil').item(0).style.display = 'inline-block';
            temp.getElementsByClassName('deleteTrash').item(0).style.display = 'inline-block';
        }
        else{
            temp.getElementsByClassName('editPencil').item(0).style.display = 'none';
            temp.getElementsByClassName('deleteTrash').item(0).style.display = 'none';
        }
        if(post.likes && post.likes.length){
            temp.getElementsByClassName('postLikes').item(0).textContent = post.likes.length + ' likes';
        }
        else {
            temp.getElementsByClassName('postLikes').item(0).textContent = 0 + ' likes';
        }
        var date = new Date(post.createdAt);
        // '${date.getDate()} . ${date.getMonth()} . ${date.getFullYear()}}'
        temp.getElementsByClassName('postDate').item(0).textContent = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        temp.getElementsByClassName('name').item(0).textContent = post.author;
        temp.getElementsByClassName('description').item(0).textContent = post.description;
        if(typeof post.hashTags !== 'undefined'){
            temp.getElementsByClassName('hashTags').item(0).textContent = post.hashTags.toString();
        }
        //post listeners
        temp.addEventListener('click', function(event){
            var target = event.target;

            //like post
            if(target.className === 'iconButton like'){
                target.parentNode.getElementsByClassName('unlike').item(0).style.display = 'inline-block';
                target.style.display = 'none';
                dom.like(temp.getElementsByClassName('item').item(0).id);
            }
            if(target.className === 'icon heart'){
                target.parentNode.parentNode.getElementsByClassName('unlike').item(0).style.display = 'inline-block';
                target.parentNode.style.display = 'none';
                dom.like(temp.getElementsByClassName('item').item(0).id);
            }
            //unlike post
            if(target.className === 'iconButton unlike'){
                target.parentNode.getElementsByClassName('like').item(0).style.display = 'inline-block';
                target.style.display = 'none';
                dom.like(temp.getElementsByClassName('item').item(0).id);
            }
            if(target.className === 'icon unheart'){
                target.parentNode.parentNode.getElementsByClassName('like').item(0).style.display = 'inline-block';
                target.parentNode.style.display = 'none';
                dom.like(temp.getElementsByClassName('item').item(0).id);
            }

            var decription = this.getElementsByClassName('descrOfPost').item(0);

            //hide post description
            if(target.className === 'iconButton hideAngle'){
                decription.style.display = 'none';
                target.parentNode.getElementsByClassName('showAngle').item(0).style.display = 'inline-block';
                target.style.display = 'none';
            }
            if(target.className === 'icon angleUp'){
                decription.style.display = 'none';
                target.parentNode.parentNode.getElementsByClassName('showAngle').item(0).style.display = 'inline-block';
                target.parentNode.style.display = 'none';
            }

            //show post description
            if(target.className === 'iconButton showAngle'){
                decription.style.display = 'inline-block';
                target.parentNode.getElementsByClassName('hideAngle').item(0).style.display = 'inline-block';
                target.style.display = 'none';
            }
            if(target.className === 'icon angleDown'){
                decription.style.display = 'inline-block';
                target.parentNode.parentNode.getElementsByClassName('hideAngle').item(0).style.display = 'inline-block';
                target.parentNode.style.display = 'none';
            }

            //edit post
            if(target.className === 'iconButton editPencil' || target.className === 'icon pencil'){
                document.getElementById('photoModal').src = this.getElementsByClassName('photo').item(0).src;
                document.getElementById('nameModal').innerText = this.getElementsByClassName('name').item(0).innerHTML;
                document.getElementById('dateModal').innerText = this.getElementsByClassName('postDate').item(0).innerHTML;
                document.getElementById('shortDescrModal').innerText = this.getElementsByClassName('description').item(0).innerHTML;
                document.getElementById('hashTagsModal').innerText = this.getElementsByClassName('hashTags').item(0).innerHTML;
                editModal.style.display = 'block';
                idToEdit = temp.getElementsByClassName('item').item(0).id;
                editOrAdd = 'edit';
            }

            //delete post
            if(target.className === 'iconButton deleteTrash' || target.className === 'icon trash'){
                idToDelete = temp.getElementsByClassName('item').item(0).id;
                deleteModal.style.display = 'block';
            }
        })
        document.getElementById('posts').appendChild(temp);
    }

    //like post
    function like(postID) {
        var post = module.getPhotoPost(postID);
        if(post.likes && post.likes.indexOf(user) === -1) {
            post.likes.push(user);
            document.getElementById(postID).getElementsByClassName('postLikes').item(0).textContent = (post.likes.length) + ' likes';
            module.saveChanges();
        }
        else{
            post.likes.pop(user);
            document.getElementById(postID).getElementsByClassName('postLikes').item(0).textContent = (post.likes.length) + ' likes';
            module.saveChanges();
        }
    }

    function isLiked(user, postID) {
        var post = module.getPhotoPost(postID);
        if(post.likes && post.likes.indexOf(user) === -1) {
            return false;
        }
        return true;
    }

    //add post
    function addPhotoPost(post){
        module.addPhotoPost(post);
        appendPost(post);
        getPhotoPosts();
    }

    var addPostBtn = document.getElementById('addPost');
    addPostBtn.addEventListener('click', function () {
        editOrAdd = 'add';
        document.getElementById('nameModal').textContent = user;
        var now = new Date();
        document.getElementById('dateModal').textContent = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes();
        editModal.style.display = 'inline-block';
    });

    //delete post
    var yesDeleteBtn = document.getElementById('yesDelete');
    yesDeleteBtn.addEventListener('click', function () {
        dom.removePhotoPost(idToDelete);
        deleteModal.style.display = 'none';
    });

    var noDeleteBtn = document.getElementById('noDelete');
    noDeleteBtn.addEventListener('click', function () {
        deleteModal.style.display = 'none';
    });

    function removePhotoPost(postId) {
        module.removePhotoPost(postId);
        getPhotoPosts();
    }

    //edit post
    var closeEditBtn = document.getElementById('close');
    closeEditBtn.addEventListener('click', function () {
        editModal.style.display = 'none';
    });

    //ok button
    var okEditBtn = document.getElementById('okEdit');
    var editPhoto = document.getElementById('photoModal');
    var editDescr = document.getElementById('shortDescrModal');
    var editHashtags = document.getElementById('hashTagsModal');
    okEditBtn.addEventListener('click', function () {
        if(editOrAdd === 'edit') {
            if (editPhoto.src !== "") {
                editPhotoPost(idToEdit, {
                    description: editDescr.value,
                    hashTags: editHashtags.value.split(','),
                    photoLink: editPhoto.src
                });
            }
            else {
                editPhotoPost(idToEdit, {
                    description: editDescr.value,
                    hashTags: editHashtags.value.split(',')});
            }
        }
        if(editOrAdd === 'add'){
            addPhotoPost({id: (module.photoPosts.length + 1).toString(),
                description: editDescr.value,
                createdAt: new Date(),
                author: document.getElementById('nameModal').innerText,
                photoLink: editPhoto.src,
                hashTags: editHashtags.value.split(','),
                state: 'active',
                likes: []});
        }
        editModal.style.display = 'none';
    });

    //upload button
    var uploadBtn = document.getElementById('upload');
    var imgURL = document.getElementById('imageURL');
    uploadBtn.addEventListener('click', function (event) {
        document.getElementById('photoModal').src = imgURL.value;
    });

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
