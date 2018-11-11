type suit =
  | Hearts
  | Diamonds
  | Clubs
  | Spades;

type num =
  | Ace
  | King
  | Jack
  | Queen
  | Num(int);

type card =
  | OrdinaryCard(num, suit)
  | Joker;

module Parser = {
  let parseSuit = suitStr =>
    switch (suitStr) {
    | "S" => Some(Spades)
    | "H" => Some(Hearts)
    | "D" => Some(Diamonds)
    | "C" => Some(Clubs)
    | _ => None
    };

  let parseNum = numStr => {
    let max64 = Int64.max_int |> Int64.to_int;
    let parsed =
      try (numStr |> int_of_string) {
      | Failure(_) => max64
      };

    if (parsed == max64 || parsed < 2 || parsed > 10) {
      None;
    } else {
      Some(Num(parsed));
    };
  };
};

module RenderToString = {
  let suitToString = suitValue =>
    switch (suitValue) {
    | Spades => "Spade"
    | Hearts => "Hearts"
    | Diamonds => "Diamonds"
    | Clubs => "Clubs"
    };

  let numToString = numValue =>
    switch (numValue) {
    | Num(num) => string_of_int(num) ++ ""
    | Ace => "Ace"
    | Jack => "Jack"
    | Queen => "Queen"
    | King => "King"
    };

  let cardToString = cardValue =>
    switch (cardValue) {
    | OrdinaryCard(num, suit) =>
      numToString(num) ++ " Of " ++ suitToString(suit)
    | Joker => "Joker"
    };
};

let theNumOfOpt = Parser.parseNum("3");
let theSuitOfOpt = Parser.parseSuit("Df");

(
  switch (theNumOfOpt, theSuitOfOpt) {
  | (Some(theNum), Some(theSuit)) =>
    RenderToString.numToString(theNum)
    ++ " Of "
    ++ RenderToString.suitToString(theSuit)
  | _ => "UNKNOWN"
  }
)
|> Js.log;