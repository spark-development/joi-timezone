const Joi = require("@hapi/joi");
const moment = require("moment-timezone");

module.exports = {
  base: Joi.string(),
  type: "timezone",
  messages: {
    "string.timezone": "{{#label}} must be a valid timezone"
  },
  validate(value, helpers) {
    if (!moment.tz.zone(value)) {
      return {
        value: null,
        errors: helpers.error("string.timezone", { v: value })
      };
    }
    return value;
  }
};
