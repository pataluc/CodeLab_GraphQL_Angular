import { Component } from '@angular/core';

@Component({
  selector: 'tchat',
  templateUrl: './tchat.html',
  styleUrls: ['./tchat.css']
})
export class TchatComponent {
  public messages = [
    {
      sender: {
        lastName: 'Antoine',
        avatar: 'http://lorempixel.com/50/50/people'
      },
      content: 'Hello :)'
    },
    {
      sender: {
        lastName: 'Canard Man',
        avatar: 'http://lorempixel.com/50/50/people'
      },
      content: 'Coin Coin'
    },
    {
      sender: {
        lastName: 'Antoine',
        avatar: 'http://lorempixel.com/50/50/people'
      },
      content: 'Ca va?'
    },
    {
      sender: {
        lastName: 'Canard Man',
        avatar: 'http://lorempixel.com/50/50/people'
      },
      content: 'Coin Coin'
    }
  ]
}
