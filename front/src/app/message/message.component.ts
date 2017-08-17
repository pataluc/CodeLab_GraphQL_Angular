import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.html',
  styleUrls: ['./message.css']
})
export class MessageComponent {
  @Input() message
  @Input() even
}
