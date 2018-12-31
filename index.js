const formatDate = (timeInSeconds) => {
    var timeH = Math.floor(timeInSeconds / 3600);
    var timeMin = Math.floor((timeInSeconds - (timeH * 3600)) / 60);
    var timeSek = Math.floor(timeInSeconds - (timeH * 3600) - (timeMin * 60));

    if (timeInSeconds === undefined){
        return '0s';
    } else if (timeInSeconds <= 59){
        return parseInt(timeSek, 10) + 's';
    } else if (timeInSeconds <= 3599) {
        if (timeSek == 0){
            return timeMin + 'm'
        } else { 
            return timeMin + 'm ' + timeSek + 's';
        }
    } else if (timeInSeconds >= 3600) {
        if (timeSek == 0 && timeMin !== 0){
            return timeH + 'h ' + timeMin + 'm';
        } else if (timeSek == 0 && timeMin == 0){
            return timeH + 'h';
        } else if (timeMin == 0){
            return timeH + 'h ' + timeSek + 's';
        } else {
            return timeH + 'h ' + timeMin + 'm ' + timeSek + 's';
        }
    } 
  }
  
  module.exports = formatDate;