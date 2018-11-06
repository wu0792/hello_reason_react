let component = ReasonReact.statelessComponent("Page");

let handleClick = (_event, _self) => Js.log("clicked!");

let make = (~message, _children) => {
  ...component,
  render: self =>
  <div>
    <span>(ReasonReact.string("hello "++message))</span>
    <button onClick=(self.handle(handleClick))>
      (ReasonReact.string(message))
    </button>
  </div>
};