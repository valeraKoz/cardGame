class Timer{
    constructor(element){
        this.element = element;
        this.seconds = 0;
        this.minutes = 0;
        this.start();
        this.interval;
    }
    start(){
        const secondsTimer = setInterval(()=>{
            if(this.seconds < 10){
                if(this.minutes < 10){
                    this.element.innerHTML = `0${this.minutes}.0${this.seconds}`;
                } else{
                    this.element.innerHTML = `${this.minutes}.0${this.seconds}`
                }
                
            } else {
                if(this.minutes < 10){
                    this.element.innerHTML = `0${this.minutes}.${this.seconds}`;
                } else{
                    this.element.innerHTML = `${this.minutes}.${this.seconds}`
                }
                
            }
            this.seconds++;
            if(this.seconds>59){
                this.minutes++;
                this.seconds = 0;
            }
            window.application.timer = {
                minutes: this.minutes,
                seconds: this.seconds
            }
        }, 1000);
        this.interval = secondsTimer;
    }
    stop(){
        clearInterval(this.interval);
    }
}