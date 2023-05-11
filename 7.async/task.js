
class AlarmClock {
  constructor() {
    this.alarmCollection  = [];
    this.intervalId;
  };

  addClock(time, callback) {
    if((callback !== undefined) && (time !== undefined)) {
      throw new Error('Отсутствуют обязательные аргументы')
    } if (this.alarmCollection.find(el => el === time) !== undefined) {
      console.warn('Уже присутствует звонок на это же время')
    }
    this.alarmCollection.push({callback, time, cancall: true})
  }

  removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter(el => el.time !== time)
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'})
  }

  start() {
    if (this.intervalId === undefined) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(el => {
          if ((this.getCurrentFormattedTime) && (el.canCall === true)) {
            el.canCall = false;
            el.callback();
          }
        });
      }, 1000);
    }
    return 0;
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(el => {
      el.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
