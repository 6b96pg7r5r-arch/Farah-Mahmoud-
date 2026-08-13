/**
 * Farah & Mahmoud — Engagement photo intake
 * ------------------------------------------------------------
 * Deploy this as a Web App (see README.md in the project root for the
 * full step-by-step). Once deployed, every photo/video a guest uploads
 * on upload.html is saved into a Google Drive folder named
 * "my engagement" in the Drive of whoever deploys this script —
 * that should be the bride's own Google account.
 *
 * Folder name — change if you'd like a different one:
 */
var FOLDER_NAME = "my engagement";

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var folder = getOrCreateFolder(FOLDER_NAME);

    var bytes = Utilities.base64Decode(payload.data);
    var blob = Utilities.newBlob(bytes, payload.mimeType, payload.filename);

    var safeName = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd_HHmmss") + "_" + payload.filename;
    blob.setName(safeName);

    folder.createFile(blob);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder(name) {
  var folders = DriveApp.getFoldersByName(name);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(name);
}

/**
 * Optional: open the deployed web app URL directly in a browser to
 * confirm it's alive (it will just show a small JSON message).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Farah & Mahmoud upload endpoint is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
