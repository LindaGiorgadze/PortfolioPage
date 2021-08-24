const search = document.getElementById('clickSearch');
const input = document.getElementById('searchId');

search.addEventListener('click', function() {
    input.classList.toggle('searchActive');
})