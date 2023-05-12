
class AlarmClock {
  constructor() {
    this.alarmCollection  = [];
    this.intervalId = null;
  };

  addClock(time, callback) {
    if((!callback) || (!time)) {
      throw new Error('Отсутствуют обязательные аргументы')
    } 
    if (this.alarmCollection.some(el => el.time === time)) {
      console.warn('Уже присутствует звонок на это же время')
    } 
    this.alarmCollection.push({callback, time, cancall: true})
  }

  removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter(el => el.time !== time)
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})
  }

  start() {
    if (!this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(el => {
        if ((this.getCurrentFormattedTime() === el.time) && (el.canCall === true)) {
          el.canCall = false;
          el.callback();
        }
      });
    }, 1000);
    
  }

  stop() {
    clearInterval(this.intervalId);
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
