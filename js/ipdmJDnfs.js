  const now = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.getElementById("datetime").textContent = "日時: " + now.toLocaleString();
  document.getElementById("timezone").textContent = "タイムゾーン: " + timeZone;
