type cardSuit =
  | S
  | H
  | D
  | C;

type cardNum =
  | J
  | Q
  | K
  | A
  | Num(int);

type card =
  | Card(cardSuit, cardNum);

let cardSuitToString = (theSuit: cardSuit) =>
  switch (theSuit) {
  | S => "S"
  | H => "H"
  | D => "D"
  | C => "C"
  };

let cardNumToString = (theNum: cardNum) =>
  switch (theNum) {
  | J => "J"
  | Q => "Q"
  | K => "K"
  | A => "A"
  | Num(num) => string_of_int(num)
  };

let cardToString = theCard =>
  switch (theCard) {
  | Card(suit, num) =>
    cardNumToString(num) ++ " Of " ++ cardSuitToString(suit)
  };

let cardNumJ = J;
let cardSuitH = H;
let card = Card(cardSuitH, cardNumJ);

card |> cardToString |> Js.log;