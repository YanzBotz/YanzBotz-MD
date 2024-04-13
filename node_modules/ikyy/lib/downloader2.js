const got = require("got");
const vm = require("vm");

module.exports = async (url) => {
  let status = 200;
  let scriptJS = await got("https://worker.sf-tools.com/savefrom.php", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      origin: "https://id.savefrom.net",
      referer: "https://id.savefrom.net/",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
    },
    form: {
      sf_url: encodeURI(url),
      sf_submit: "",
      new: 1,
      lang: "id",
      app: "",
      country: "id",
      os: "Windows",
      browser: "Chrome",
      channel: "main",
      "sf-nomad": 1,
    },
  }).text();
  const executeCode = '[]["filter"]["constructor"](b).call(a);';
  if (scriptJS.indexOf(executeCode) === -1) status = 503;
  scriptJS = scriptJS.replace(
    executeCode,
    `
try {const script = ${
      executeCode.split(".call")[0]
    }.toString();if (script.includes('function showResult')) scriptResult = script;else (${executeCode.replace(
      /;/,
      ""
    )});} catch {}
`
  );
  const context = {
    scriptResult: "",
    log: console.log,
  };
  vm.createContext(context);
  new vm.Script(scriptJS).runInContext(context);
  const data =
    context.scriptResult.split("window.parent.sf.videoResult.show(")[1] ||
    context.scriptResult.split("window.parent.sf.videoResult.showRows(")[1];
  if (!data) status = 404;
  let json;
  try {
    if (context.scriptResult.includes("showRows")) {
      const splits = data.split('],"');
      const lastIndex = splits.findIndex((v) =>
        v.includes("window.parent.sf.enableElement")
      );
      json = JSON.parse(splits.slice(0, lastIndex).join('],"') + "]");
    } else {
      json = JSON.parse(data.split(");")[0]);
    }
  } catch (e) {
    json = null;
  }
  if (!json) status = 404;
  result = {};
  result.creator = "rzkyfdlh";
  result.status = status;
  result.url = json ? json.meta.source : undefined;
  result.title = json ? json.meta.title : undefined;
  result.image = json ? json.thumb : undefined;
  result.durasi = json ? json.meta.duration : undefined;
  result.source = json ? json.hosting : undefined;
  result.quality = json ? json.video_quality : null;
  result.mp4 = json ? json.url.filter((a) => a.ext == "mp4") : undefined;
  result.mp3 = json ? json.url.filter((a) => a.ext == "mp3") : undefined;

  return result;
};