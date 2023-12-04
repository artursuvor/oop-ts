interface RemoteControl {
    turnOn(): void;
    turnOff(): void;
    changeChannel(channel: number): void;
  }
  
  class Television implements RemoteControl {
    isOn: boolean;
    currentChannel: number;
  
    constructor() {
      this.isOn = false;
      this.currentChannel = 0;
    }
  
    turnOn(): void {
      this.isOn = true;
      console.log('TV is ON');
    }
  
    turnOff(): void {
      this.isOn = false;
      console.log('TV is OFF');
    }
  
    changeChannel(channel: number): void {
      if (this.isOn && channel >= 0 && channel <= 100) {
        this.currentChannel = channel;
        console.log(`Channel changed to ${channel}`);
      } else {
        console.log('TV is off or invalid channel');
      }
    }
  
    getCurrentChannel(): number {
      return this.currentChannel;
    }
  }
  
  class RemoteController {
    tv: Television;
  
    constructor(tv: Television) {
      this.tv = tv;
    }
  
    power(): void {
      if (this.tv) {
        if (this.tv.isOn) {
          this.tv.turnOff();
        } else {
          this.tv.turnOn();
        }
      }
    }
  
    setChannel(channel: number): void {
      if (this.tv) {
        this.tv.changeChannel(channel);
      }
    }
  }
  
  const myTV = new Television();
  const myRemote = new RemoteController(myTV);
  
  myRemote.power(); // Turn on 
  myRemote.setChannel(5); // Channel Change to 5
  console.log(`Current channel: ${myTV.getCurrentChannel()}`); // Output:`Current channel: 5`
  
  myRemote.power(); // Turn off
  
