function myFunction() {
    let input, filter, blocks, title;

    input = document.querySelector('#searchId');
    filter = input.nodeValue.toUpperCase();
    blocks = document.querySelector('projBlocks');

    for(let i = 0; i < block.length; i+=1){
        title = blocks[i].querySelector('h4.project-name-main')
        if (title[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            blocks[i].style.display = "";
          } else {
            blocks[i].style.display = "none";
          }
    }
}