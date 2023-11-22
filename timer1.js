const timeArr = (process.argv.slice(2));
const alarm = () => {
  for (let time of timeArr) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (parseInt(time) * 1000))
  };
}
alarm(timeArr)