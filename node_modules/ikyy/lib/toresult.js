const kapitalisasiKata = async (str) => {
  return str.replace(/\w\S*/g, function (kata) {
    const kataBaru = kata.slice(0, 1).toUpperCase() + kata.substr(1);
    return kataBaru;
  });
};
const toResult = async (json, option = {}) => {
  if (Array.isArray(json)) {
    var txt = `✵ _*${option.title || "Parse Result"}*_\n\n`;
    let no = 1;
    for (let i = 0; i < json.length; i++) {
      txt += `*❥ _No_*: ${no++}\n`;
      if (option && option.delete) {
        for (let j of option.delete) {
          delete json[i][j];
        }
      }
      for (let j of Object.entries(json[i])) {
        if (j[1] != undefined && j[1] != null && j[1] != "") {
          txt += `➤ *${await kapitalisasiKata(j[0].replace(/_/, " "))}* : ${
            j[1]
          }\n`;
        }
      }
      if (i + 1 != json.length) txt += `\n\n`;
    }
  } else {
    var txt = `✵ _*${option.title || "Parse Result"}*_\n\n`;
    if (option && option.delete) {
      for (let j of option.delete) {
        if (j == "downloader_site") continue
        delete json[j];
      }
    }
    for (let i of Object.entries(json)) {
      if (i[1] != undefined && i[1] != null && i[1] != "") {
        txt += `➤ *${await kapitalisasiKata(i[0].replace(/_/, " "))}* : ${
          i[1]
        }\n`;
      }
    }
  }
  return txt;
};

/*const toResult = async (json, options = {}) => {
  if (!json)
    return new Error(
      "Masukan result, example: {\nnama: `Rzky`,\n result: `ini result`\n}"
    );
  let { arrow, head, upper, down, line } = {
    head: "✦",
    arrow: "✧",
    body: "┃",
    upper: "┏",
    down: "┗",
    line: "━",
    wings: ["𓆩 ", " 𓆪"],
    needed: ["<", ">"],
    optional: ["(", ")"],
  };
  let opts = {
    unicode: true,
    ignoreVal: [null, undefined],
    ignoreKey: [],
    title: "Parse Result",
    headers: `*✵ %title*\n `,
    body: `➤ *%key*: %value`,
    footer: "\n",
    ...options,
  };
  let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts;

  let obj = Object.entries(json);
  let tmp = [];
  for (let [_key, val] of obj) {
    if (ignoreVal.indexOf(val) !== -1) continue;
    let key = _key[0].toUpperCase() + _key.slice(1);
    let type = typeof val;
    if (ignoreKey && ignoreKey.includes(_key)) continue;
    switch (type) {
      case "boolean":
        tmp.push([key, val ? "Ya" : "Tidak"]);
        break;
      case "object":
        if (Array.isArray(val)) {
          tmp.push([key, val.join(", ")]);
        } else {
          tmp.push([
            key,
            toResult(val, {
              ignoreKey,
              unicode: false,
            }),
          ]);
        }
        break;
      default:
        tmp.push([key, val]);
        break;
    }
  }
  if (unicode) {
    let text = [
      headers.replace(/%title/g, title),
      tmp
        .map((v) => {
          return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);
        })
        .join("\n"),
      footer,
    ];
    return text.join("\n").trim();
  }
  return tmp;
};*/

module.exports = { toResult };
