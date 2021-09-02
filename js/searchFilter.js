function myFunction() {
    var input, filter, blocks, block, title, author;

    input = document.querySelector('#searchId');
    filter = input.value.toUpperCase();
    blocks = document.querySelector('.projectBlocks');
    block = blocks.querySelectorAll('.project-block');
    console.log(block);
    for(let i = 0; i < block.length; i++){
        title = block[i].querySelector('.project-name-main');
        author = block[i].querySelector('.author-main');
        // console.log(title, author);
        if (title.innerText.toUpperCase().indexOf(filter) > -1 || author.innerText.toUpperCase().indexOf(filter) > -1) {
            block[i].style.display = "";
          } else {
            block[i].style.display = "none";
          }
    }
}

// document.querySelector('#searchId').addEventListener('keyup', function(e) {
//   let name = document.getElementsByClassName('project-name-main');

//   let search = searchInput.value.toUpperCase();

//   for(let i = 0; i < name.length; i++){
//     const projName = name[i].textContent.toUpperCase();

//     if(projName.includes(search)){
//       name[i].style.display = 'block';
//     }else {
//       name[i].style.display = 'none';
//     }
//   }
// })