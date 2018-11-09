'use strict';


function cardSuitToString(theSuit) {
  switch (theSuit) {
    case 0 : 
        return "S";
    case 1 : 
        return "H";
    case 2 : 
        return "D";
    case 3 : 
        return "C";
    
  }
}

function cardNumToString(theNum) {
  if (typeof theNum === "number") {
    switch (theNum) {
      case 0 : 
          return "J";
      case 1 : 
          return "Q";
      case 2 : 
          return "K";
      case 3 : 
          return "A";
      
    }
  } else {
    return String(theNum[0]);
  }
}

function cardToString(theCard) {
  return cardNumToString(theCard[1]) + (" Of " + cardSuitToString(theCard[0]));
}

var card = /* Card */[
  /* H */1,
  /* J */0
];

console.log(cardToString(card));

var cardNumJ = /* J */0;

var cardSuitH = /* H */1;

exports.cardSuitToString = cardSuitToString;
exports.cardNumToString = cardNumToString;
exports.cardToString = cardToString;
exports.cardNumJ = cardNumJ;
exports.cardSuitH = cardSuitH;
exports.card = card;
/*  Not a pure module */
