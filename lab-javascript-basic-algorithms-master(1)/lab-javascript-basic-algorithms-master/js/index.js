var hacker1 = "Bernie";

console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Bernie";

console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length>hacker2.length){
  var length=hacker1.length;
  console.log(`The driver has the longest name, it has ${length} characters`);
}else if(hacker2.length>hacker1.length){
  var length=hacker2.length;
  console.log(`It seems that the navigator has the longest name, it has ${length} characters.`);
}else{
  var length=hacker2.length;
  console.log(`Wow, you both have equally long names, ${length}  characters!`);
}

var newString="";
for(x of hacker1){
  var cap = x.toUpperCase();
  newString += cap;
  newString += " ";
}
console.log(newString);

var newString2="";
for (var i = hacker1.length; i >= 0; i--) {
    var letter = hacker1.charAt(i);
     newString2+=letter;
}
console.log(newString2);

if(hacker1<hacker2){
 console.log("The driver's name goes first.");
}else if(hacker2<hacker1){
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}

var longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum enim eget quam porta, quis dictum felis tincidunt. Vestibulum ultrices, diam nec semper sagittis, mi risus eleifend metus, id pellentesque massa orci ac urna. Etiam iaculis vel augue sed egestas. Vivamus ornare vel risus ut cursus. Phasellus tellus velit, vestibulum eget felis sed, tempor cursus turpis. Aenean vel lectus luctus, fermentum urna eu, eleifend risus. Suspendisse accumsan tincidunt odio, at venenatis dolor molestie in. Cras lacus diam, varius in fermentum id, auctor nec massa. Donec efficitur ullamcorper neque. Nulla tellus ex, suscipit in purus a, ultricies finibus orci. Curabitur facilisis turpis quis iaculis tempor. Sed interdum felis eu sem volutpat pretium. Nam blandit risus sit amet nisi varius, vel viverra dui porttitor. Cras finibus mauris elit, hendrerit iaculis dolor rutrum eu. Mauris ac quam molestie, sagittis enim vel, lacinia libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras at porttitor eros. Praesent dignissim nisi sit amet nibh ullamcorper lacinia. Vestibulum facilisis dui eu felis facilisis tempus. Aliquam erat volutpat. Etiam efficitur, lacus quis placerat consequat, purus risus dictum sem, hendrerit rhoncus lacus nunc ac quam. Maecenas aliquam nisi tellus, vitae fermentum neque eleifend quis. Quisque est dolor, interdum ut mi at, molestie fermentum diam. Duis varius vehicula hendrerit. Aenean mauris augue, suscipit convallis dolor a, imperdiet bibendum dolor. Morbi justo quam, tempor in tortor sit amet, feugiat egestas ipsum. Duis velit felis, vehicula in condimentum in, pellentesque et orci. Maecenas scelerisque, lectus vel tincidunt ornare, dolor mauris laoreet ante, in venenatis elit odio iaculis nisl. Aliquam ac arcu a odio consectetur efficitur. Nunc vel risus ac lorem semper egestas id quis nisi. Etiam aliquam gravida nunc vitae egestas. Morbi congue, nunc at efficitur fringilla, sapien odio posuere enim, sit amet condimentum nisi lectus ac sem. Nullam eu fermentum dui, a fringilla erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce suscipit ex sed velit tincidunt, nec sodales massa congue. Nulla sit amet tellus euismod, aliquam neque nec, congue turpis. Vestibulum metus leo, ornare ac turpis vitae, vestibulum tempor ipsum. ";

//count number of words in string
console.log("The number of words in the string are: "+ longtext.split(" ").length);

var wordsarray = longtext.split(" "); 

//occurences of "et"
var count=0;
for (var i =0; i < wordsarray.length;i++){
    if (wordsarray[i]==="et"){
      count++;
    }
}
console.log("The number of appearances of 'et' is: " + count);