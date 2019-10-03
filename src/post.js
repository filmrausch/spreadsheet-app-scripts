function post() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var settingsSheet = sheets[2];

  var data = getJSON();
  var url = settingsSheet.getRange(3, 2).getValue();
  var username = settingsSheet.getRange(4, 2).getValue();
  var password = settingsSheet.getRange(5, 2).getValue();

  var options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization:
        "Basic " + Utilities.base64Encode(username + ":" + password),
    },
    payload: JSON.stringify(data),
  };

  var response = UrlFetchApp.fetch(url, options);

  SpreadsheetApp.getUi().alert(response.getContentText());
}
