//Create array of cards

class Game{
    constructor(cards){
    this.cards=cards;
    this.matches=0;
    }



//  shuffleCards(){
//     var cards = this.cards;
//     var arraylength= cards.length;
//     var shuffledArray= [];
    
//     //get randomIndex
//     while(shuffledArray.length<arraylength){
//         var randomIndex= Math.floor(Math.random()*arraylength);
//         var randomCard =   cards[randomIndex];
//         //get random element
      
//         if(!(shuffledArray.includes(randomCard))){
//             shuffledArray.push(randomCard);
//         }
//     }
//     return shuffledArray;

// }


shuffleCards(){
    var cards = this.cards;
    var shuffled = 0;
    //get randomIndex
    while(shuffled<30){
        // extract a random card from the deck
        var randomExtractIndex= Math.floor(Math.random()*cards.length);
        var randomCard =   cards[randomExtractIndex];
        cards.splice(randomExtractIndex, 1);
        // insert a random card from the deck
        var randomInsertIndex= Math.floor(Math.random()*cards.length);
        cards.splice(randomInsertIndex,0, randomCard);
        shuffled++;
    }
    return cards;

}
isaMatch(card1,card2){
        if((card1.source===card2.source)&&(card1.name===card2.name) ){
            this.matches++;
            return true;
        }else{
            return false;
        }
}

isGameOver(){
    if(this.matches=8){
        return true;
    }
}

    loadImages(){
        var rows = document.querySelectorAll(".row");
        for (var rowIndex = 0; rowIndex <rows.length; rowIndex++){
            
            var rowDiv =rows[rowIndex];
            var columns = rowDiv.querySelectorAll(".col-3");
            for (var columnIndex = 0; columnIndex < columns.length; columnIndex++){
                //get parent div
                var columnDiv = columns[columnIndex];
                //create image element
                var img = document.createElement('img'); 
                //get the image source
                var shuffledCards = game.shuffleCards(this.cards);
                img.src = shuffledCards[(rowIndex*columns.length)+ columnIndex].source;
                //append to div
                img.class='image';
                img.style.width = '100px';
                img.style.height = '100px';
                columnDiv.appendChild(img);
            }
        }
    }

}
var cards = [
    {source: 'images/fish-clip-art-10.jpg',
    name: "fish",
    },
    {source: "images/rabbit.gif",
    name: "rabbit"
    },
    {source: "images/apple-clip-art-2.jpg",
    name: "apple"
    },
    {source: "images/tortoise.png",
    name: "tortoise"
    },
    {source: 'images/dog.jpg',
    name: "dog",
    },
    {source: "images/school-clip-art-39.jpg",
    name: "rabbit"
    },
    {source: "images/breakfast.jpg",
    name: "breakfast"
    },
    {source: "images/cat.png",
    name: "cat"
    },
    {source: 'images/fish-clip-art-10.jpg',
    name: "fish",
    },
    {source: "images/rabbit.gif",
    name: "rabbit"
    },
    {source: "images/apple-clip-art-2.jpg",
    name: "apple"
    },
    {source: "images/tortoise.png",
    name: "tortoise"
    },
    {source: 'images/dog.jpg',
    name: "dog",
    },
    {source: "images/school-clip-art-39.jpg",
    name: "rabbit"
    },
    {source: "images/breakfast.jpg",
    name: "breakfast"
    },
    {source: "images/cat.png",
    name: "cat"
    }
]

var game = new Game(cards);
console.log(game.shuffleCards());

//console.log(game.isaMatch(game.cards[0],game.cards[0]));


game.loadImages();

