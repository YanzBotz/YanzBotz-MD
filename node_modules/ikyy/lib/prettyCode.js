const prettier = require("prettier");

module.exports = function (code) {
  try {
    return { status: 200, creator: "Rzky", result: prettier.format(code) };
  } catch (e) {
    return { status: 500, creator: "Rzky", error: String(e) };
  }
};
