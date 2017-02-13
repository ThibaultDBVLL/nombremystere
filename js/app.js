$(document).ready(function(){

nbMyst = (Math.floor((9)*Math.random()+1));
console.log(nbMyst);

$(".button").click(function(){
    var essai = $(".input").children("input").val();
    console.log(essai);
  });

for(var i = 1; i<=3; i++){
var essai = $(".input").children("input").val();
console.log(essai);
  if($(".button").click){
     if (essai < nbMyst){
      $("#ok").html('Vise un peu plus haut!');
     } if (essai > nbMyst) {
      $("#ok").html('Un peu moins!');
     } if (essai == nbMyst) {
      $("#ok").html("Bravo!");
       break;
     }
   }

}
});
