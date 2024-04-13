const axios = require("axios");
const cheerio = require("cheerio");
const baseUrl = "https://moddroid.co";

const search = (query) => {
    return new Promise(async (resolve) => {
      try {
        let html = await (
          await axios.get(baseUrl + "/search/?s=" + query)
        ).data;
        let $ = cheerio.load(html);
        let data = [];
        $('div[class="col-12 col-md-6 mb-4"]').each((i, e) =>
          data.push({
            name: $(e).find("h3").text().trim(),
            version: $($(e).find("span.align-middle")[0]).text().trim(),
            mod: /Mod:/.test($($(e).find("span.align-middle")[2]).text().trim())
              ? $($(e).find("span.align-middle")[2])
                  .text()
                  .replace(/Mod[:]/gi, "")
                  .replace(/  /gi, " ")
                  .trim()
              : "" || "Premium Unlocked",
            url: baseUrl + $(e).find("a").attr("href"),
          })
        );
        if (data.length == 0)
          return resolve({
            creator: global.creator,
            status: false,
          });
        resolve({
          creator: "RzkyFdlh",
          status: true,
          data,
        });
      } catch (e) {
        console.log(e);
        return resolve({
          creator: "RzkyFdlh",
          status: false,
        });
      }
    });
  };

const thumbnail = (url) => {
    return new Promise(async (resolve, reject) => {
      let html = await (await axios.get(url + "/download")).data;
      let $ = cheerio.load(html);
      resolve(
        $('div[class="d-flex align-items-center px-0 px-md-3 mb-3 mb-md-4"]')
          .find("img")
          .attr("src")
      );
    });
  };

const download = (url) => {
    return new Promise(async (resolve) => {
      try {
        let html = await (await axios.get(url)).data;
        let $ = cheerio.load(html);
        let info = {
          thumbnail: (await thumbnail(url)) || false,
          name: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[0]
          )
            .text()
            .trim(),
          category: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[1]
          )
            .text()
            .trim(),
          size: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[2]
          )
            .text()
            .trim(),
          version: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[3]
          )
            .text()
            .trim(),
          mod: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[4]
          )
            .text()
            .trim(),
          rating: $(
            $(
              'table[class="table table-striped table-borderless"] > tbody > tr > td'
            )[6]
          )
            .text()
            .replace(/\n/g, ""),
          publish: $($("main.content-area").find("time")[0]).text().trim(),
        };
        let file = {
          filename: info.name + ".apk",
          url: url + "download/1",
        };
        resolve({
          creator: "RzkyFdlh",
          status: true,
          info,
          file,
        });
      } catch (e) {
        return resolve({
          creator: "RzkyFdlh",
          status: false,
          message: e,
        });
      }
    });
  }

module.exports = { download, search };
