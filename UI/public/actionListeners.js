(function() {
    //filters
    var filterBtn = document.getElementById('filter');
    filterBtn.addEventListener('click', function () {
        var nameFilter = document.getElementById('authorFilter').value;
        var dateFilter = document.getElementById('dateFilter').value;
        var hashtagFilter = document.getElementById('hashTagFilter').value;
        var filterPost = {author: nameFilter, createdAt: dateFilter, hashTags: hashtagFilter};
        dom.getPhotoPosts(0, 10, filterPost);
    });

    //load more posts
    var loadMoreBtn = document.getElementById('loadMore');
    loadMoreBtn.addEventListener('click', function () {
        var nameFilter = document.getElementById('authorFilter').value;
        var dateFilter = document.getElementById('dateFilter').value;
        var hashtagFilter = document.getElementById('hashTagFilter').value;
        var filterPost = {author: nameFilter, createdAt: dateFilter, hashTags: hashtagFilter};
        dom.getPhotoPosts(0, document.getElementById('posts').childNodes.length + 10, filterPost);
    });
}());