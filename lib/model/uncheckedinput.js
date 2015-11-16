'use strict';

var inherits = require('inherits');

var Bitcore = require('bitcore-lib');

/**
 * Represents a special kind of input of UncheckedInput kind.
 * @constructor
 */
function UncheckedInput() {
  Bitcore.Transaction.Input.apply(this, arguments);
}
inherits(UncheckedInput, Bitcore.Transaction.Input);

UncheckedInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype) {
  return [];
};

UncheckedInput.prototype.addSignature = function(transaction, signature) {
  return this;
};

UncheckedInput.prototype.clearSignatures = function() {
  return this;
};

UncheckedInput.prototype.isFullySigned = function() {
  return true;
};

module.exports = UncheckedInput;
