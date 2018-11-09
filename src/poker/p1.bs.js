'use strict';


function parseAndRenderSuit(suitStr) {
  switch (suitStr) {
    case "C" : 
        return "Club";
    case "D" : 
        return "Diamond";
    case "H" : 
        return "Heart";
    case "S" : 
        return "Spade";
    default:
      return "[UNKNOWN SUIT]";
  }
}

function parseAndRenderNum(num) {
  switch (num) {
    case "1" : 
        return "One";
    case "10" : 
        return "Ten";
    case "2" : 
        return "Two";
    case "3" : 
        return "Three";
    case "4" : 
        return "Four";
    case "5" : 
        return "Five";
    case "6" : 
        return "Six";
    case "7" : 
        return "Seven";
    case "8" : 
        return "Eight";
    case "9" : 
        return "Nine";
    case "A" : 
        return "Ace";
    case "J" : 
        return "Joker";
    case "K" : 
        return "King";
    case "Q" : 
        return "Queen";
    default:
      return "[UNKONWN NUM]";
  }
}

function parseAndRenderCard(cardStr) {
  var length = cardStr.length;
  var suitStr = cardStr.slice(length - 1 | 0);
  var numStr = cardStr.slice(0, length - 1 | 0);
  var parsedNumStr = parseAndRenderNum(numStr);
  var parsedSuitStr = parseAndRenderSuit(suitStr);
  return parsedNumStr + (" of " + parsedSuitStr);
}

console.log(parseAndRenderCard("3H"));

exports.parseAndRenderSuit = parseAndRenderSuit;
exports.parseAndRenderNum = parseAndRenderNum;
exports.parseAndRenderCard = parseAndRenderCard;
/*  Not a pure module */
