const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.body,
    startBtn: document.querySelector('button[data-action = "start"]'),
    stopBtn: document.querySelector('button[data-action = "stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorId = null;


refs.startBtn.addEventListener('click', onStartChange)
refs.stopBtn.addEventListener('click', onStopChange)

function onStartChange() {
    colorId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    refs.startBtn.disabled = true;
};

function onStopChange() {
    clearInterval(colorId);
        refs.startBtn.disabled = false;

}