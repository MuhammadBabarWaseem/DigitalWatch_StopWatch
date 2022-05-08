function showDate(){
  var todayDate = new Date()
 document.getElementById('day').innerText = todayDate.toDateString();
}
showDate();

function getClock() {

  var date = new Date
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var timeFormat = date.getHours() >= 12 ? "PM" : "AM";
  hours = (hours % 12) || 12;
  hours = updateTime(hours);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);

  var clock = document.getElementById('clock')
  clock.innerText = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + timeFormat
  function updateTime(editTime) {
    if (editTime < 10) {
      return "0" + editTime;
    }
    else {
      return editTime;
    }
  }

}

var cTime = setInterval(getClock, 1000)

function stopBtn() {
  clearInterval(cTime)
}

var stopButton = document.getElementById('myStop')
stopButton.addEventListener('click', stopBtn)

function startbtn() {
  cTime = setInterval(getClock, 1000)
}

var startButton = document.getElementById('myStart')
startButton.addEventListener('click', startbtn)


var secondsonds = 00;
var tens = 00;
var mnt = 00;
var getseconds = document.getElementById('seconds')
var getTens = document.getElementById('tens')
var getMnt = document.getElementById('mnt')
var buttonStart = document.getElementById('buttonStart')
var buttonStop = document.getElementById('buttonStop')
var buttonReset = document.getElementById('buttonReset')
var clear;

buttonStart.addEventListener('click', () => {
  clear = setInterval(myFunc, 10)
})
buttonStop.addEventListener('click', () => {
  clearInterval(clear)
})
buttonReset.addEventListener('click', () => {
  clearInterval(clear)
  seconds = 0;
  tens = 0;
  mnt = 0;
  getseconds.innerHTML = '00';
  getTens.innerHTML = '00';
  getMnt.innerHTML = '00';
})

function myFunc() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = '0' + tens
  }
  if (tens >= 9) {
    getTens.innerHTML = tens
  }
  if (tens > 99) {
    secondsonds++
    getseconds.innerHTML = '0' + secondsonds
    tens = 0
    getTens.innerHTML = '0' + 0
  }
  if (secondsonds > 9) {
    getseconds.innerHTML = secondsonds
  }
  if (secondsonds > 60) {
    mnt++
    getMnt.innerHTML = '0' + mnt
    secondsonds = 0
    getseconds.innerHTML = '0' + 0
  }
  if (mnt > 9) {
    getMnt.innerHTML = mnt
  }
}