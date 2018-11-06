let parseAndRenderSuit = suitStr =>
  switch (suitStr) {
  | "S" => "Spade"
  | "H" => "Heart"
  | "D" => "Diamond"
  | "C" => "Club"
  | _ => "[UNKNOWN SUIT]"
  };

let parseAndRenderNum = num =>
  switch (num) {
  | "0" => "Zero"
  | "1" => "One"
  | "2" => "Two"
  | "3" => "Three"
  | "4" => "Four"
  | "5" => "Five"
  | "6" => "Six"
  | "7" => "Seven"
  | "8" => "Eight"
  | "9" => "Nine"
  | "10" => "Ten"
  | "J" => "Joker"
  | "Q" => "Queen"
  | "K" => "King"
  | "A" => "Ace"
  | _ => "[UNKONWN NUM]"
  };

let parseAndRenderCard = cardStr => {
  let length = Js.String.length(cardStr);
  let suitStr = Js.String.sliceToEnd(~from=length - 1, cardStr);
  let numStr = Js.String.slice(~from=0, ~to_=length - 1, cardStr);

  let parsedNumStr = parseAndRenderNum(numStr);
  let parsedSuitStr = parseAndRenderSuit(suitStr);

  parsedNumStr ++ " of " ++ parsedSuitStr;
};

"3H" |> parseAndRenderCard |> Js.log;