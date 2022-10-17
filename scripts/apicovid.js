$.ajax({
    type: 'GET',
    url: 'https://coronavirus.m.pipedream.net/',
    dataType: 'json',
    success: function(data) {
      let casosGlobales = data.summaryStats.global.confirmed;
      let globalDate = new Date(data.cache.lastUpdatedTimestamp);
      let ultimaActualizacionGlobal = `${globalDate.getFullYear()} ${globalDate.getMonth()} ${globalDate.getDate()} ${globalDate.getHours()}:${globalDate.getMinutes()}:${globalDate.getSeconds()}`
      let casosArgentina = data.rawData[7].Confirmed;
      let ultimaActualizacionArgentina = data.rawData[7].Last_Update;

      document.getElementById("covid-data").innerHTML = `Casos globales: ${casosGlobales} - Última actualización: ${ultimaActualizacionGlobal}<br>
      Casos en Argentina: ${casosArgentina} - Última actualización: ${ultimaActualizacionArgentina}`;
      //console.log(casosGlobales)
    }
});