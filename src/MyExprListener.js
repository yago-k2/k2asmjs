import ExprListener from "./grammar/ExprListener.js";

export default class MyExprListener extends ExprListener {
  #stack = []
  #result = null

  constructor() {
    super()
  }

  getResult() { return this.#result }

  enterProg(ctx) { }
  exitProg(ctx) {
    if (this.#stack.length < 1) {
      throw Error("nothing on stack")
    }
    if (this.#stack.length > 1) {
      throw Error("too many values on stack")
    }

    this.#result = this.#stack.pop()
  }

  enterNumber(ctx) { }
  exitNumber(ctx) {
    this.#stack.push(+ctx.getText())
  }

  exitPlusMinus(ctx) {
    let op = ctx.children[1].getText()
    let right = this.#stack.pop()
    let left = this.#stack.pop()
    switch (op) {
      case "+":
        this.#stack.push(left + right)
        break
      case "-":
        this.#stack.push(left - right)
        break
      default: throw Error("unknown operator:" + op)
    }
  }

  exitMulDiv(ctx) {
    let op = ctx.children[1].getText()

    let right = this.#stack.pop()
    let left = this.#stack.pop()
    switch (op) {
      case "*":
        this.#stack.push(left * right)
        break
      case "/":
        this.#stack.push(left / right)
        break
      default: throw Error("unknown operator:" + op)
    }
  }

}
