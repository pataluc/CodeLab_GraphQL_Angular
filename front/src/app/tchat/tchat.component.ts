import { Component } from '@angular/core';
import { TchatService } from './tchat.service'

@Component({
  selector: 'tchat',
  templateUrl: './tchat.html',
  styleUrls: ['./tchat.css']
})
export class TchatComponent {

  constructor(private tchatService : TchatService) {}

  public spamGuard = false
  public messageContent = ""
  public messages = this.tchatService.getMessages()

  sendMessage() {
    console.log(this.messageContent)
    this.spamGuard = true
    this.messageContent = ""
  } 
}
