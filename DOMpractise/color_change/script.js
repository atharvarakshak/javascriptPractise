const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('mouseover', (e) => {
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case "grey":
        body.style.background = 'grey';
        break;
      case "white":
        body.style.background = 'white';
        break;
      case "blue":
        body.style.background = 'blue';
        break;
      case "yellow":
        body.style.background = 'yellow';
        break;
      case "purple":
        body.style.background = 'purple';
        break;

      

    }
  });
});
