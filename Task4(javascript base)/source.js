(function () {
    var photoPosts = [
        {
            id:'1',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2019-03-01T17:30:00'),
            author: 'Alex',
            photoLink: 'image/photo1.jpg',
            hashTags: ['summer', 'love', 'book'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'2',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:31:00'),
            author: 'Julia',
            photoLink: 'image/photo2.jpg',
            hashTags: ['summer', 'love', 'book'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'3',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:32:00'),
            author: 'Jess',
            photoLink: 'image/photo3.jpeg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'4',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:33:00'),
            author: 'Marina',
            photoLink: 'image/photo4.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'5',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:34:00'),
            author: 'Regina',
            photoLink: 'image/photo5.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'6',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:35:00'),
            author: 'Cece',
            photoLink: 'image/photo6.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'7',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:36:00'),
            author: 'Alex',
            photoLink: 'image/photo7.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'8',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:37:00'),
            author: 'Lexie',
            photoLink: 'image/photo8.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'9',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:38:00'),
            author: 'Nick',
            photoLink: 'image/photo9.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'10',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:39:00'),
            author: 'Nick',
            photoLink: 'image/photo10.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'11',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-04-01T17:30:00'),
            author: 'Joe',
            photoLink: 'image/photo11.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'12',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-05-01T17:30:00'),
            author: 'Sam',
            photoLink: 'image/photo12.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'13',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-06-01T17:30:00'),
            author: 'Clover',
            photoLink: 'image/photo13.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'14',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-07-01T17:30:00'),
            author: 'Garry',
            photoLink: 'image/photo14.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'15',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-08-01T17:30:00'),
            author: 'Henry',
            photoLink: 'image/photo15.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'16',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-09-01T17:30:00'),
            author: 'Ivan',
            photoLink: 'image/photo16.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'17',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-10-01T17:30:00'),
            author: 'Barney',
            photoLink: 'image/photo17.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'18',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-11-01T17:30:00'),
            author: 'Robin',
            photoLink: 'image/photo18.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'19',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-11-01T17:30:00'),
            author: 'Ted',
            photoLink: 'image/photo19.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'20',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-12-01T17:30:00'),
            author: 'Taylor',
            photoLink: 'image/photo20.jpg',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        }
    ];

    //comparator
    function compareTo(a, b){
        if(a.createdAt < b.createdAt){
            return -1;
        }
        if(a.createdAt > b.createdAt){
            return 1;
        }
        else{
            return 0;
        }
    }

    //get post from array
    function getPhotoPost(str){
        for (var i = 0; i < photoPosts.length; i++) {
            if(photoPosts[i].id === str){
                return photoPosts[i];
            }
        }
        return null;
    }


    //remove post from array
    function removePhotoPost(str) {
        for (var i = 0; i < photoPosts.length; i++) {
            if(photoPosts[i].id === str){
                photoPosts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    //validate
    function validatePhotoPost(Object){
        if(Object.id == null || Object.description == null || Object.createdAt == null || Object.author == null || Object.photoLink == null){
            return false;
        }
        else{
            return true;
        }
    }
    
    //add post to array
    function addPhotoPost(Object) {
        if(validatePhotoPost(Object)){
            photoPosts.push(Object);
            return true;
        }
        else {
            return false;
        }
    }

    //edit post
    function editPhotoPost(str, Object) {
        var post = getPhotoPost(str);
        if(post != null){
            if(Object.description != null){
                post.description = Object.description;
            }
            if(Object.photoLink != null){
                post.photoLink = Object.photoLink;
            }
            if(Object.hashTags != null){
                post.hashTags.length = 0;
                for(var i = 0; i < Object.hashTags.length; i++){
                    post.hashTags[i] = Object.hashTags[i];
                }
            }
            if(post.description != null && post.photoLink != null){
                removePhotoPost(str);
                addPhotoPost(post);
                return true;
            }
        }
        return false;
    }

    function isCommonHashTags(object, array) {
        var flag = true;
        for(var k = 0; k < array.length; k++){
            if(object.hashTags.indexOf(array[k]) === -1){
                flag = false;
            }
        }
        return flag;
    }

    //get posts
    function getPhotoPosts(skip, top, filterConfig) {
        var toShow = [];

        if(arguments.length === 2){
            photoPosts.sort(compareTo);
            return photoPosts.slice(skip, skip + top);
        }

        if(arguments.length === 3){
            for(var i = 0; i < photoPosts.length; i++){
                if(filterConfig.author != null){
                    if(filterConfig.createdAt != null){
                        if(filterConfig.hashTags != null){
                            if(isCommonHashTags(photoPosts[i], filterConfig.hashTags) && photoPosts[i].author === filterConfig.author && photoPosts[i].createdAt.getDate() === filterConfig.createdAt.getDate() && photoPosts[i].createdAt.getTime() === filterConfig.createdAt.getTime()){
                                toShow.push(photoPosts[i]);
                            }
                        }
                        else {
                            if(photoPosts[i].author === filterConfig.author && photoPosts[i].createdAt.getDate() === filterConfig.createdAt.getDate() && photoPosts[i].createdAt.getTime() === filterConfig.createdAt.getTime()){
                                toShow.push(photoPosts[i]);
                            }
                        }
                    }
                    else if(filterConfig.hashTags != null){
                        if(isCommonHashTags(photoPosts[i], filterConfig.hashTags) && photoPosts[i].author === filterConfig.author){
                            toShow.push(photoPosts[i]);
                        }
                    }
                    else{
                        if(photoPosts[i].author === filterConfig.author){
                            toShow.push(photoPosts[i]);
                        }
                    }
                }
                else if(filterConfig.createdAt != null){
                    if(filterConfig.hashTags != null){
                        if(isCommonHashTags(photoPosts[i], filterConfig.hashTags) && photoPosts[i].createdAt.getDate() === filterConfig.createdAt.getDate() && photoPosts[i].createdAt.getTime() === filterConfig.createdAt.getTime()){
                            toShow.push(photoPosts[i]);
                        }
                    }
                    else{
                        if(photoPosts[i].createdAt.getDate() === filterConfig.createdAt.getDate() && photoPosts[i].createdAt.getTime()){
                            toShow.push(photoPosts[i]);
                        }
                    }
                }
                else if(filterConfig.hashTags != null){
                    if(isCommonHashTags(photoPosts[i], filterConfig.hashTags)){
                        toShow.push(photoPosts[i]);
                    }
                }
            }
            toShow.sort(compareTo);
            return toShow.slice(skip, skip + top);
        }
    }

    console.log('show first 5 posts with author Alex and date 2019-03-01T17:30:00');
    console.log(getPhotoPosts(0,5, {author:'Alex', createdAt:new Date('2019-03-01T17:30:00')}));

    console.log('show first 5 posts with author Alex and hashtags love, book');
    console.log(getPhotoPosts(0,5, {author:'Alex', hashTags: ['love', 'book']}));

    console.log('show first 5 posts with author Alex');
    console.log(getPhotoPosts(0,5, {author:'Alex'}));
    
    console.log('posts 10-18');
    console.log(getPhotoPosts(10, 8));

    console.log('posts 20-21');
    console.log(getPhotoPosts(20, 2) + 'nothing to show');

    console.log('get post with id=3');
    console.log(getPhotoPost('3'));

    console.log('get post with id=23');
    console.log(getPhotoPost('23'));

    console.log('validation');
    console.log(validatePhotoPost({id:'1', description:'cool', createdAt:'2018-12-01T17:30:00', photoLink:'image/photo3.jpeg', author:'Me'}));
    
    console.log('validation (invalid post)');
    console.log(validatePhotoPost({id:'1', description:'cool'}));

    console.log('try to add post');
    console.log(addPhotoPost({id:'21', description:'cool', createdAt:'2018-12-01T17:30:00', photoLink:'image/photo3.jpeg', author:'Me'}));

    console.log('try to add post (invalid post)');
    console.log(addPhotoPost({id:'22', description:'cool'}));

    console.log(getPhotoPost('21'));

    console.log('try to edit post with id=21');
    console.log(editPhotoPost('21', {id:'21', description:'good', createdAt:'2018-12-01T17:30:00', photoLink:'image/photo5.jpeg'}));

    console.log(getPhotoPost('21'));

    console.log('try to edit post with id=21');
    console.log(editPhotoPost('21', {photoLink:'images/photo3.jpeg'}));

    console.log(getPhotoPost('21'));

    console.log('try to remove post with id=21');
    console.log(removePhotoPost('21'));

    console.log('try to remove post with id=22 (not exists)');
    console.log(removePhotoPost('22'));

}());