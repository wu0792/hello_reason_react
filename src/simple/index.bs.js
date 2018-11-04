'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Page$Helloreasonreact = require("./Page.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Page$Helloreasonreact.make("Hello, Reason React!", /* array */[])), "index");

/*  Not a pure module */
