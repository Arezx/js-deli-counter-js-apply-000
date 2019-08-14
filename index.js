var katzDeliLine = [];
var qNumber = 1;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(qNumber)
  qNumber = qNumber + 1;
  return "You are number "+ qNumber - 1 + " ."
}

function currentLine(katzDeliLine) {
    var line = []
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < katzDeliLine.length; i++) {
        line += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
      line = line.slice(0, -2)
      return "The line is currently: " + line
    }
    //
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
