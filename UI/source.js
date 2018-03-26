var module = (function () {
    var users = [
        {
            name: 'Alex',
            password: '1111'
        },
        {
            name: 'Julia',
            password: '1111'
        },
        {
            name: 'Jess',
            password: '1111'
        },
        {
            name: 'Robin',
            password: '1111'
        },
        {
            name: 'Regina',
            password: '1111'
        },
        {
            name: 'Cece',
            password: '1111'
        },
        {
            name: 'Lexie',
            password: '1111'
        },
        {
            name: 'Nick',
            password: '1111'
        },
        {
            name: 'Joe',
            password: '1111'
        },
        {
            name: 'Barney',
            password: '1111'
        }
    ];
    //localStorage.setItem('users', JSON.stringify(users));

    var posts = [
        {
            id:'1',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2019-03-01T17:30:00'),
            author: 'Alex',
            photoLink: 'image/photo1.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'2',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:31:00'),
            author: 'Julia',
            photoLink: 'image/photo2.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'3',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:32:00'),
            author: 'Jess',
            photoLink: 'image/photo3.jpeg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'4',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:33:00'),
            author: 'Robin',
            photoLink: 'image/photo4.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#style'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'5',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:34:00'),
            author: 'Regina',
            photoLink: 'image/photo5.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'6',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:35:00'),
            author: 'Cece',
            photoLink: 'image/photo6.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'7',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:36:00'),
            author: 'Alex',
            photoLink: 'image/photo7.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'8',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:37:00'),
            author: 'Lexie',
            photoLink: 'image/photo8.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'9',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:38:00'),
            author: 'Nick',
            photoLink: 'image/photo9.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'10',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-03-01T17:39:00'),
            author: 'Nick',
            photoLink: 'image/photo10.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'11',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-04-01T17:30:00'),
            author: 'Joe',
            photoLink: 'image/photo11.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'12',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-05-01T17:30:00'),
            author: 'Barney',
            photoLink: 'image/photo12.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'13',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-06-01T17:30:00'),
            author: 'Alex',
            photoLink: 'image/photo13.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'14',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-07-01T17:30:00'),
            author: 'Julia',
            photoLink: 'image/photo14.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'15',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-08-01T17:30:00'),
            author: 'Jess',
            photoLink: 'image/photo15.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'16',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-09-01T17:30:00'),
            author: 'Regina',
            photoLink: 'image/photo16.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'17',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-10-01T17:30:00'),
            author: 'Barney',
            photoLink: 'image/photo17.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'18',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-11-01T17:30:00'),
            author: 'Robin',
            photoLink: 'image/photo18.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'19',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-11-01T17:30:00'),
            author: 'Lexie',
            photoLink: 'image/photo19.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'20',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2017-12-01T17:30:00'),
            author: 'Lexie',
            photoLink: 'image/photo20.jpg',
            state: 'active',
            hashTags: ['#summer', '#love', '#book'],
            likes: ['Robin', 'Regina', 'Cece', 'Nick']
        }
    ];

    if(!localStorage.getItem('posts')){
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    var photoPosts = JSON.parse(localStorage.getItem('posts'));

    var schema = {
        id: 'String',
        description: 'String',
        createdAt: 'Date',
        author: 'String',
        photoLink: 'String',
        state: 'String'
    };

    //comparator
    function compareTo(a, b){
        if(a.createdAt > b.createdAt){
            return -1;
        }
        if(a.createdAt < b.createdAt){
            return 1;
        }
        else{
            return 0;
        }
    }

    function saveChanges() {
        localStorage.setItem('posts', JSON.stringify(photoPosts));
    }

    //get post from array
    function getPhotoPost(postID){
        return photoPosts.find(function (x) { return x.id === postID; });
    }

    //remove post from array
    function removePhotoPost(postID) {
        var post = getPhotoPost(postID);
        if(post.state === 'active') {
            post.state = 'deleted';
            saveChanges();
            return true;
        }
        return false;
    }

    //validate
    function validatePhotoPost(post){
        for(var item in schema){
            if(!post.hasOwnProperty(item)){
                return false;
            }
            if(schema[item] !== "Date" && post[item].constructor.name !== schema[item]){
                return false;
            }
        }
        return true;
    }

    //add post to array
    function addPhotoPost(post) {
        if(validatePhotoPost(post)){
            photoPosts.push(post);
            saveChanges();
            return true;
        }
        return false;
    }

    //edit post
    function editPhotoPost(postID, editPost) {
        var post = getPhotoPost(postID);
        if(post != null && post.state === 'active'){
            if(editPost.description){
                post.description = editPost.description;
            }
            if(editPost.photoLink){
                post.photoLink = editPost.photoLink;
            }
            if(editPost.hashTags){
                post.hashTags.splice(0, post.hashTags.length);
                for(var i = 0; i < editPost.hashTags.length; i++){
                    post.hashTags[i] = editPost.hashTags[i];
                }
            }
            saveChanges();
            return true;
        }
        return false;
    }

    //get posts
    function getPhotoPosts(skip, top, filterConfig) {
        var toShow = photoPosts.filter(function (x) { return x.state !== 'deleted'; });

        skip = skip || 0;
        top = top || 10;

        if(!filterConfig){
            toShow.sort(compareTo);
            return toShow.slice(skip, skip + top);
        }

        if(filterConfig){
            if(filterConfig.author){
                toShow = toShow.filter(function (x) { return x.author === filterConfig.author; });
            }
            if(filterConfig.createdAt){
                toShow = toShow.filter(function (x) { return (x.createdAt.substr(0, 10) === filterConfig.createdAt); });
            }
            if(filterConfig.hashTags){
                toShow = toShow.filter(function (x) {
                    return x.hashTags.indexOf(filterConfig.hashTags) !== -1;
                    /*
                    for(var i = 0 ; i < filterConfig.hashTags.length; i++){
                        if(x.hashTags.indexOf(filterConfig.hashTags[i]) === -1){
                            return false;
                        }
                    }
                    return true;
                    */
                });
            }
            toShow.sort(compareTo);
            return toShow.slice(skip, skip + top);
        }
    }

    return {
        users: users,
        photoPosts: photoPosts,
        saveChanges: saveChanges,
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }
}());