function Run() {
  var percentage = Math.floor(Math.random() * 100 + 1);
  var mapname = document.getElementById("mname").value;
  var agentname = document.querySelectorAll("input")[0].value;
  var firstLetterMap = mapname.slice(0, 1).toUpperCase();
  var remainingLetterMap = mapname.slice(1).toLowerCase();
  var firstLetterAgent = agentname.slice(0, 1).toUpperCase();
  var remainingLetterAgent = agentname.slice(1).toLowerCase();

  document.getElementById("result").innerHTML =
    "Eğer " +
    firstLetterMap +
    remainingLetterMap +
    " haritasında " +
    firstLetterAgent +
    remainingLetterAgent +
    " alırsan kazanma şansın: %" +
    percentage;
}
