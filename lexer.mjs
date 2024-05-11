import { Token, TokenType } from "./token.mjs";

class Lexer {
    input="";
    cur;
    peek;
    cursor=-1;
    /**
     * @type {Array<Token>}
     */
    tokens=[];
    /**
     * 
     * @param {String} input 
     */
    constructor(input = "") {
        this.cur=input[this.cursor]
    }

    next() {
        this.cur = this.input[this.cursor]
        this.peek = this.input[this.cursor+1]
        this.cursor += 1
    }

    tokenize() {
        while (this.cursor == this.input.length) {
            switch (this.cur) {
                case "+":
                    this.tokens.push(new Token(TokenType.plus, "+"))
                    break;
                case "-":
                    this.tokens.push(new Token(TokenType.minus, "-"))
                    break;
                default:
                    let numberText = this.cur
                    while (isNaN(this.cur) || this.cursor == this.input.length) {
                        this.next()
                        numberText = numberText.concat(this.cur)
                    }
                    this.tokens.push(new Token(TokenType.number, this.input))
            }
            this.next()
        }
    }
}