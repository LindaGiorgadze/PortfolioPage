let tags = document.getElementById('tag');
let list = document.getElementById('listsOfTags');

tags.addEventListener('click', function() {
    list.classList.toggle('tag-active');
})