/**
 * @enum {string}
 */
export const TokenType = {
    number: "number",
    string: "string",

    plus: "plus",
    minus: "minus",
    multiply: "multiply",
    divide: "divide"
}

export class Token {
    /**
     * @type {TokenType}
     */
    type;
    /**@type {string} */
    literal;
    /**
     * 
     * @param {TokenType} type 
     * @param {string} literal 
     */
    constructor(type, literal) {
        this.type = type
        this.literal = literal
    }
}