'use strict';

var Int64 = require("bs-platform/lib/js/int64.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function parseSuit(suitStr) {
  switch (suitStr) {
    case "C" : 
        return /* Clubs */2;
    case "D" : 
        return /* Diamonds */1;
    case "H" : 
        return /* Hearts */0;
    case "S" : 
        return /* Spades */3;
    default:
      return undefined;
  }
}

function parseNum(numStr) {
  var max64 = Int64.max_int[1] | 0;
  var parsed;
  try {
    parsed = Caml_format.caml_int_of_string(numStr);
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      parsed = max64;
    } else {
      throw exn;
    }
  }
  if (parsed === max64 || parsed < 2 || parsed > 10) {
    return undefined;
  } else {
    return /* Num */[parsed];
  }
}

var Parser = /* module */[
  /* parseSuit */parseSuit,
  /* parseNum */parseNum
];

function suitToString(suitValue) {
  switch (suitValue) {
    case 0 : 
        return "Hearts";
    case 1 : 
        return "Diamonds";
    case 2 : 
        return "Clubs";
    case 3 : 
        return "Spade";
    
  }
}

function numToString(numValue) {
  if (typeof numValue === "number") {
    switch (numValue) {
      case 0 : 
          return "Ace";
      case 1 : 
          return "King";
      case 2 : 
          return "Jack";
      case 3 : 
          return "Queen";
      
    }
  } else {
    return String(numValue[0]) + "";
  }
}

function cardToString(cardValue) {
  if (cardValue) {
    return numToString(cardValue[0]) + (" Of " + suitToString(cardValue[1]));
  } else {
    return "Joker";
  }
}

var RenderToString = /* module */[
  /* suitToString */suitToString,
  /* numToString */numToString,
  /* cardToString */cardToString
];

var theNumOfOpt = parseNum("3");

var theSuitOfOpt = parseSuit("Df");

console.log(theNumOfOpt !== undefined && theSuitOfOpt !== undefined ? numToString(theNumOfOpt) + (" Of " + suitToString(theSuitOfOpt)) : "UNKNOWN");

exports.Parser = Parser;
exports.RenderToString = RenderToString;
exports.theNumOfOpt = theNumOfOpt;
exports.theSuitOfOpt = theSuitOfOpt;
/* theNumOfOpt Not a pure module */
