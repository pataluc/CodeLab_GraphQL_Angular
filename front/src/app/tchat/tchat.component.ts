import { Component, OnInit } from '@angular/core';
import { TchatService } from './tchat.service'

@Component({
  selector: 'tchat',
  templateUrl: './tchat.html',
  styleUrls: ['./tchat.css']
})
export class TchatComponent implements OnInit {

  constructor(private tchatService : TchatService) {}

  public spamGuard = false
  public messageContent = ""
  public messages = []
  
  ngOnInit() {
    this.tchatService.getMessages().valueChanges.subscribe((result: any) => {
      this.messages = result.data.getMessages
    })
  }
  
  sendMessage() {    
    this.spamGuard = true
    const message = {
        sender: {
            pseudo: 'SuperDev',
            firstName: 'Jean-Michel',
            lastName: 'Graphi'
        },
        content: this.messageContent,
        localisation: 'Nantes',
        status: 'PENDING'
    }
    this.tchatService.saveMessage(message).subscribe((data) => {
      this.spamGuard = false
      this.messageContent = ""
    },
    (error) => {
      console.log('there was an error sending the query', error);
    })
  } 
}
