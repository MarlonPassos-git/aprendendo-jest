"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
it('should sum 2 and 2 and the result  must be 4', () => {
    expect((0, calculator_1.sum)(2, 2)).toBe(4);
});
