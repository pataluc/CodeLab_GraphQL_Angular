import { Component } from '@angular/core';
import { TchatService } from './tchat.service'

@Component({
  selector: 'tchat',
  templateUrl: './tchat.html',
  styleUrls: ['./tchat.css']
})
export class TchatComponent {

  constructor(private tchatService : TchatService) {}

  public messageContent = ""
  public messages = this.tchatService.getMessages()

  sendMessage() {
    console.log(this.messageContent)
    this.messageContent = ""
  } 
}
