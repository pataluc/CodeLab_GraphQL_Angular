import { Component, OnInit } from '@angular/core';
import { TchatService } from './tchat.service'

@Component({
  selector: 'tchat',
  templateUrl: './tchat.html',
  styleUrls: ['./tchat.css']
})
export class TchatComponent implements OnInit {

  public spamGuard = false
  public messageContent = ""
  public messages = []

  constructor(private tchatService : TchatService) {}

  ngOnInit() {
    this.tchatService.getMessages().subscribe( ({ data : { getMessages }  } : any) => {
      this.messages = getMessages
    })
  }

  sendMessage() {
    console.log(this.messageContent)
    this.spamGuard = true
    this.messageContent = ""
  } 
  
}
