const items = document.getElementsByClassName('project-block');

showTag = (evet, tag) => {
    console.log('showing...', tag);
    for(let i = 0; i < items.length; i++){
        if(items[i].dataset.tags.includes(tag)){
            items[i].style.display = "block";
        }else{
            items[i].style.display = "none";
        }
    }
}

document.getElementById('graphic').addEventListener('click', (event) => showTag(event, 'graphics'));
document.getElementById('webdesign').addEventListener('click', (event) => showTag(event, 'website'));
document.getElementById('UI').addEventListener('click', (event) => showTag(event, 'ui'));
document.getElementById('graphit').addEventListener('click', (event) => showTag(event, 'grapit'));