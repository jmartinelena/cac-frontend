function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function GetData() {
  let loadingData = true;
  while (loadingData) {
    $.ajax({
      type: "GET",
      url: "https://coronavirus.m.pipedream.net/",
      dataType: "json",
      success: function (data) {
        loadingData = false;
        let casosGlobales = data.summaryStats.global.confirmed;
        let globalDate = new Date(data.cache.lastUpdatedTimestamp);
        let ultimaActualizacionGlobal = `${globalDate.getFullYear()}-${globalDate.getMonth()}-${globalDate.getDate()} ${globalDate.getHours()}:${globalDate.getMinutes()}:${globalDate.getSeconds()}`;
        let casosArgentina = data.rawData[7].Confirmed;
        let ultimaActualizacionArgentina = data.rawData[7].Last_Update;

        document.getElementById("covid-data").innerHTML = `<b>Casos globales:</b> ${casosGlobales} - <b>Última actualización:</b> ${ultimaActualizacionGlobal}<br>
          <b>Casos en Argentina:</b> ${casosArgentina} - <b>Última actualización:</b> ${ultimaActualizacionArgentina}`;
      }
    });

    if (!loadingData) break;

    string = "Trayendo últimos datos, esto puede tardar varios segundos";
    for (i = 0; i < 3; i++) {
      string += " . ";
      //console.log(string);
      if (!loadingData) break;
      document.getElementById("covid-data").innerHTML = string;
      await sleep(1000);
    }
  }
}