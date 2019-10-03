function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Filmrausch Tools")
    .addItem("Website aktualisieren", "post")
    .addToUi();
}
