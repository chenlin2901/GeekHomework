import { Evaluator } from "./evaluator";
import { parse } from "./SyntaxParser";

document.getElementById("run").addEventListener("click", (event) => {
  let r = new Evaluator().evaluate(
    parse(document.getElementById("source").value)
  );
  console.log(r);
});
