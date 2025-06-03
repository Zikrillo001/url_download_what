document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "downloads/E-JDU.url";
  link.download = "E-JDU.url";
  link.click();
});
