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
   document.getElementById('input').innerHTML = makeid();


})

  