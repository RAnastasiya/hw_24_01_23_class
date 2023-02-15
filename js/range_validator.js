class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("from must be number!");
    }
    if (value < Number.MIN_SAFE_INTEGER || value > Number.MAX_SAFE_INTEGER) {
      throw new RangeError(
        `from must be > ${Number.MIN_SAFE_INTEGER} and < ${Number.MAX_SAFE_INTEGER}`
      );
    }
    if (value >= this._to) {
      throw new Error("from must be < to");
    }
    this._from = value;
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("to must be number!");
    }
    if (value < Number.MIN_SAFE_INTEGER || value > Number.MAX_SAFE_INTEGER) {
      throw new RangeError(
        `to must be > ${Number.MIN_SAFE_INTEGER} and < ${Number.MAX_SAFE_INTEGER}`
      );
    }
    if (value <= this._from) {
      throw new Error("to must be > from");
    }
    this._to = value;
  }
  getRange() {
    return [this._from, this._to];
  }
  validate(number) {
    return number >= this._from && number <= this._to;
  }
}

try {
  const rang = new RangeValidator();
  rang.from = 9;
  console.log(rang.from);
  console.log(rang.to);
  console.log(rang.getRange());
  console.log(rang.validate(40));
} catch (error) {
  console.log(error);
}
