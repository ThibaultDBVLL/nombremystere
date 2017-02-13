$(document).ready(function(){

nbMyst = (Math.floor((9)*Math.random()+1));
console.log(nbMyst);

$(".button").click(function(){
    var essai = $(".input").children("input").val();
    console.log(essai);
  });

var essai = $(".input").children("input").val();
for(var i = 1; i<=3; i++){
  console.log(essai);
  if($(".button").onclick){
    console.log(essai);
     if (essai < nbMyst){
      $("#ok").html('Jen ai plus que ça!');
     } if (essai > nbMyst) {
      $("#ok").html('Un peu moins!');
     } if (essai == nbMyst) {
       console.log('bravo!');
      $("#ok").html("Tu as gagné, tiens, prends ces anneaux, tu les as bien mérités");
       break;
     }
   }

}
});
