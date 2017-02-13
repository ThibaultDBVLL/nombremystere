$(document).ready(function(){

    var nbMyst = (Math.floor((9)*Math.random()+1));
    console.log(nbMyst);
    var essai = $(".input").children("input").val();
    console.log(essai);

    // problème de scope, je sais ...
    $(".button").click(function(){
         essai = $(".input").children("input").val();
        console.log(essai);
      });


    $(".button").onclick(function(){
        console.log(essai);
        if (essai < nbMyst){
          $("#astuce").html('Jen ai plus que ça!');
          console.log('plus');
        } if (essai > nbMyst) {
          $("#astuce").html('Jaurais aimé en avoir autant !');
          console.log('moins');
        } if (essai == nbMyst) {
          $("#ok").html("Tu as gagné, tiens, prends ces anneaux, tu les as bien mérités");
          console.log('bravo!');
        }
      });


    for(var i = 1; i<=3; i++){
      game();
  }

});
