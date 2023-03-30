class LikedFacts
{
constructor(list)
{

this.list =list;
}


AddLikedFact(f){
this.list.push(f);
}

toString()
{
return this.list;
}





}

class DislikedFacts
{
constructor(list)
{

this.list =list;
}



AddDislikedFact(f){
this.list.push(f);
}

}
class Fact
{
constructor(fact)
{

this.fact =fact;
}
Fact()
{
    return this.fact;
}

}
        let list = [];
        let likedFacts = new LikedFacts(list);
        let list1 = [];
        let dislikedFacts = new DislikedFacts(list1);
        let fact = new Fact();

$(document).ready(function() {
    $("#like").click(function() {
        
        likedFacts.AddLikedFact(fact);
        console.log(likedFacts);
        likedFacts.toString();


    });
});

$(document).ready(function() {
    $("#dislikelike").click(function() {
        dislikedFacts.AddDislikedFact(fact);
        console.log(dislikedFacts);

    });
});

$(document).ready(function() {
    $("#dislikelike").click(function() {
        dislikedFacts.AddDislikedFact(fact);
        console.log(dislikedFacts);

    });
});

$(document).ready(function() {
    $("#dislikelike").click(function() {
        dislikedFacts.AddDislikedFact(fact);
        console.log(dislikedFacts);

    });
});




const p = document.createElement("p");

$(document).ready(function() {

    $( "#like" ).hide();
    $( "#dislike" ).hide();
    $( "#generateNew" ).hide();
    $( "#showDisliked" ).hide();
    $( "#showLiked" ).hide();
    $("#generate").click(function() {
        $.ajax({
        url: "https://dog-api.kinduff.com/api/facts",
       method: "GET",
        dataType: "json",
        success: function(data) {
                      
         console.log(data.facts);
         
         const factNode = document.createTextNode(data.facts);
         p.appendChild(factNode);
         document.getElementById("facts").appendChild(p);
         fact.Fact(data.facts);
         $("#generate").animate({
            height: 'toggle'
          });;
         $( "#like" ).show();
         $( "#dislike" ).show();
         $( "#generateNew" ).show();
         $( "#showDisliked" ).show();
         $( "#showLiked" ).show();

         console.log(fact.Fact());
        
         
        
        }
        });
    });

    $("#generateNew").click(function() {
        


        $.ajax({
            url: "https://dog-api.kinduff.com/api/facts",
           method: "GET",
            dataType: "json",
            success: function(data) {
                          
             console.log(data.facts);
             
            factNode = document.createTextNode(data.facts);
             p.appendChild(factNode);
             document.getElementById("facts").appendChild(p);
             fact.Fact(data.facts);
             $("#generateNew").animate({left: '250px'});

            
             
            
            }
            });

        
    });



});

