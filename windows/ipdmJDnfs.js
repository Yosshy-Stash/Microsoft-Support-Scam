  const now = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userAgent = navigator.userAgent;
  document.getElementById("useragent").textContent = "User Agent: " + userAgent;
  document.getElementById("datetime").textContent = "Current Time: " + now.toLocaleString();
  document.getElementById("timezone").textContent = "Time Zone: " + timeZone;
