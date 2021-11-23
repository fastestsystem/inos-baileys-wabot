/**
 * Artinama by @Fxc7
 */
let axios = require("axios")
let cheerio = require("cheerio")

async function artiNama(nama) {
  return new Promise(async (resolve, reject) => {
    await axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const isi = $("#body").text().split("Nama:")[0]
        const result = isi.replace(/\n/gi, "").replace("ARTI NAMA", "").replace("                                ", "");
        resolve(result)
      }).catch(reject)
  });
};

module.exports = { artiNama }