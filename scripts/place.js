const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
let temperature = 30;
let wind = 17;

function windChill(temperature, wind) {
    if (temperature <= 10 && wind > 4.8) {
        let result = 13.12 + 0.6215 * temperature - 11.37 * (wind ** 0.16) + 0.3965 * temperature * (wind ** 0.16);
        return result.toFixed(1);
    }
    else {
      return "NA";
    }
}
const result = windChill(temperature, wind);
document.getElementById("windChill").textContent = windChill(temperature, wind);