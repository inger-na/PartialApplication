'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (arg) => ({
  args: [arg],
  press(value) {
    this.args.push(value);
    if (this.args.length < 4) return this;
    return checkPin(...this.args);
  }
});

module.exports = { press };
