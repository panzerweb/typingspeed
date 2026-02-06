export class TimerClass {
  private startTime: number = 0;
  private counter: number;
  private intervalId:number | null=null;

  constructor(initialSeconds:number){
    this.counter = initialSeconds;
  }

  /*
    Methods for the countdown
  */
  startCounter(onTick: (value:number) => void, onFinished:() => void):boolean{
    if (this.intervalId != null) {
      return false;
    }

    onTick(this.counter);

    this.intervalId = window.setInterval(() => {
      this.counter--;
      onTick(this.counter);
      console.log(`Remaining time: ${this.counter} seconds`);

      if (this.counter <= 0) {
        this.stop();
        console.log("Countdown finished!");
        onFinished(); // Call some functions
      }
    }, 1000);
    return true;
  }

  getInitialTime():number{
    return this.counter;
  }

  reset(seconds:number):void {
    this.stop();
    this.counter = seconds;
  }

  stop():void{
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /*
    Methods for the typing time
  */
  start(): number {
    return this.startTime = Date.now();
  }

  getTime(): number {
    return Math.floor((Date.now() - this.startTime) / 1000);
  }


  resetTime(): void{
    this.startTime = 0;
  }
}
