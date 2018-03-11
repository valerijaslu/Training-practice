var module = (function () {
    var photoPosts = [
        {
            id:'1',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2019-03-01T17:30:00'),
            author: 'Alex',
            photoLink: 'image/photo1.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'book'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'2',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:31:00'),
            author: 'Julia',
            photoLink: 'image/photo2.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'book'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'3',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:32:00'),
            author: 'Jess',
            photoLink: 'image/photo3.jpeg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'4',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:33:00'),
            author: 'Marina',
            photoLink: 'image/photo4.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'5',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:34:00'),
            author: 'Regina',
            photoLink: 'image/photo5.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'6',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:35:00'),
            author: 'Cece',
            photoLink: 'image/photo6.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'7',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:36:00'),
            author: 'Alex',
            photoLink: 'image/photo7.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'8',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:37:00'),
            author: 'Lexie',
            photoLink: 'image/photo8.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'9',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:38:00'),
            author: 'Nick',
            photoLink: 'image/photo9.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'10',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-03-01T17:39:00'),
            author: 'Nick',
            photoLink: 'image/photo10.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'11',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-04-01T17:30:00'),
            author: 'Joe',
            photoLink: 'image/photo11.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'12',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-05-01T17:30:00'),
            author: 'Sam',
            photoLink: 'image/photo12.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'13',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-06-01T17:30:00'),
            author: 'Clover',
            photoLink: 'image/photo13.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'14',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-07-01T17:30:00'),
            author: 'Garry',
            photoLink: 'image/photo14.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'15',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-08-01T17:30:00'),
            author: 'Henry',
            photoLink: 'image/photo15.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'16',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-09-01T17:30:00'),
            author: 'Ivan',
            photoLink: 'image/photo16.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'17',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-10-01T17:30:00'),
            author: 'Barney',
            photoLink: 'image/photo17.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'18',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-11-01T17:30:00'),
            author: 'Robin',
            photoLink: 'image/photo18.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'19',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-11-01T17:30:00'),
            author: 'Ted',
            photoLink: 'image/photo19.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        },

        {
            id:'20',
            description: 'What is your favorite song? (Looking for inspiration 👀)',
            createdAt: new Date('2018-12-01T17:30:00'),
            author: 'Taylor',
            photoLink: 'image/photo20.jpg',
            state: 'active',
            hashTags: ['summer', 'love', 'style'],
            likes: ['Marina', 'Regina', 'Cece', 'Nick']
        }
    ];

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
    function getPhotoPost(postID){
        return photoPosts.find(function (x) { return x.id === postID; });
    }

    //remove post from array
    function removePhotoPost(postID) {
        for (var i = 0; i < photoPosts.length; i++) {
            if(photoPosts[i].id === postID){
                photoPosts[i].state = 'deleted';
                return true;
            }
        }
        return false;
    }

    //validate
    function validatePhotoPost(object){
        for(var item in schema){
            if(!object.hasOwnProperty(item)){
                return false;
            }
            if(object[item].constructor.name !== schema[item]){
                return false;
            }
        }
        return true;
    }
    
    //add post to array
    function addPhotoPost(object) {
        if(validatePhotoPost(object)){
            photoPosts.push(object);
            return true;
        }
        else {
            return false;
        }
    }

    //edit post
    function editPhotoPost(postID, object) {
        var post = getPhotoPost(postID);
        if(post != null){
            Object.assign(post, object);
            removePhotoPost(postID);
            addPhotoPost(post);
            return true;
        }
        return false;
    }

    //get posts
    function getPhotoPosts(skip, top, filterConfig) {
        var toShow = photoPosts.filter(function (x) { return x.state !== 'deleted'; });

        skip = (typeof skip !== 'undefined') ?  skip : 0;
        top = (typeof top !== 'undefined') ?  top : 10;

        if(!filterConfig){
            toShow.sort(compareTo);
            return toShow.slice(skip, skip + top);
        }

        if(filterConfig){
            if(filterConfig.author){
                toShow = toShow.filter(function (x) { return x.author === filterConfig.author; });
            }
            if(filterConfig.createdAt){
                toShow = toShow.filter(function (x) { return (x.createdAt.getTime() === filterConfig.createdAt.getTime() && x.createdAt.getDate() === filterConfig.createdAt.getDate()); });
            }
            if(filterConfig.hashTags){
                toShow = toShow.filter(function (x) {
                    for(var i = 0 ; i < filterConfig.hashTags.length; i++){
                        if(x.hashTags.indexOf(filterConfig.hashTags[i]) === -1){
                            return false;
                        }
                    }
                    return true;
                });
            }
            toShow.sort(compareTo);
            return toShow.slice(skip, skip + top);
        }
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }
}());

//tests
console.log('default view');
console.log(module.getPhotoPosts());

console.log('show first 5 posts with author Alex and date 2019-03-01T17:30:00');
console.log(module.getPhotoPosts(0,5, {author:'Alex', createdAt:new Date('2019-03-01T17:30:00')}));

console.log('show first 5 posts with author Alex and hashtags love, book');
console.log(module.getPhotoPosts(0,5, {author:'Alex', hashTags: ['love', 'book']}));

console.log('show first 5 posts with author Alex');
console.log(module.getPhotoPosts(0,5, {author:'Alex'}));

console.log('posts 10-18');
console.log(module.getPhotoPosts(10, 8));

console.log('posts 0-5');
console.log(module.getPhotoPosts(0, 5));

console.log('posts 20-21');
console.log(module.getPhotoPosts(20, 2) + 'nothing to show');

console.log('get post with id=3');
console.log(module.getPhotoPost('3'));

console.log('get post with id=23');
console.log(module.getPhotoPost('23'));

console.log('validation');
console.log(module.validatePhotoPost({id:'1', description:'cool', createdAt:new Date ('2018-12-01T17:30:00'), photoLink:'image/photo3.jpeg', author:'Me', state:'active'}));

console.log('validation (invalid post)');
console.log(module.validatePhotoPost({id:'1', description:'cool'}));

console.log('try to add post');
console.log(module.addPhotoPost({id:'21', description:'cool', createdAt: new Date ('2018-12-01T17:30:00'), photoLink:'image/photo3.jpeg', author:'Me', state:'active'}));

console.log('try to add post (invalid post)');
console.log(module.addPhotoPost({id:'22', description:'cool'}));

console.log(module.getPhotoPost('21'));

console.log('try to edit post with id=21');
console.log(module.editPhotoPost('21', {id:'21', description:'good', createdAt:new Date ('2018-12-01T17:30:00'), photoLink:'image/photo5.jpeg'}));

console.log(module.getPhotoPost('21'));

console.log('try to edit post with id=21');
console.log(module.editPhotoPost('21', {photoLink:'images/photo3.jpeg'}));

console.log(module.getPhotoPost('21'));

console.log('try to remove post with id=21');
console.log(module.removePhotoPost('21'));

console.log(module.getPhotoPost('21'));

console.log('try to remove post with id=22 (not exists)');
console.log(module.removePhotoPost('22'));
