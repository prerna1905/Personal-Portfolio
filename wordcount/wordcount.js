let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){
    // this text contain all words and character which is input by users
   var text = this.value;
// char contain length of text
   let char = text.length;
   document.getElementById("char").innerHTML = char;
//    trim function remove all start and end space
   text = text.trim();
//    split funtion splitted words from gap
   let word = text.split(" ");
//    every words pass in this elm and then it return which is not equal to blank means there should be any word
   let cleanlist = word.filter(function(elm){
      return elm != "";
   });
   document.getElementById("word").innerHTML = cleanlist.length;
});