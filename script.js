var btn = document.getElementById('button');



btn.addEventListener('click', () => {
  
  // gets the value from the selected element and stores it as a variable
  var sel = document.getElementById('select');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  
  // this function picks a random number,letter,character form the possible list, 
  // the password lenght is depending on the above
  function makeid() {  
      var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < opt.value; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
      
  // pushes the resulting funcion to HTML h1 
   document.getElementById('input').innerHTML = 'Password -  ' + makeid();


})


var btn = document.getElementById('select');
btn.style.border = 'none';
btn.style.fontFamily = 'Poppins';
btn.style.fontSize = '1em';
btn.style.height = '50px';
btn.style.color = 'rgb(36, 157, 249)';
btn.style.fontWeight = '500';
btn.style.border = 'solid rgb(36, 157, 249) 1px';
btn.style.backgroundColor = 'none';
//

btn.addEventListener('mouseover', () => {
  btn.style.background = 'rgb(36, 157, 249)';
  btn.style.color = 'rgb(246, 245, 246)'
  btn.style.transitionProperty = 'background, color'
  btn.style.transitionDuration = '1s';

})
btn.addEventListener('mouseleave', () => {
  btn.style.background = 'rgb(246, 245, 246)';
  btn.style.color = 'rgb(36, 157, 249)';
})


  