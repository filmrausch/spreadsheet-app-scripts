function getJSON() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var movieSheet = sheets[0];

  var headersRange = movieSheet.getRange(1, 1, 1, movieSheet.getLastColumn());
  var headers = headersRange.getValues()[0];
  var dataRange = movieSheet.getRange(
    2,
    1,
    movieSheet.getLastRow() - 1,
    movieSheet.getLastColumn()
  );
  var data = dataRange.getValues();

  var movieData = data.map(function(movie) {
    return movie.reduce(function(obj, value, index) {
      var key = headers[index];
      obj[key] = value;
      return obj;
    }, {});
  });

  var metaSheet = sheets[1];

  var meta = {
    semester: metaSheet.getRange(3, 2).getValue(),
    HVs: metaSheet.getRange(4, 2).getValue(),
  };

  return { data: movieData, meta: meta };
}
