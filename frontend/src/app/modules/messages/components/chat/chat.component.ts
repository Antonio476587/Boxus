import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Message } from '../../models/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  private chatId = '';
  messageContent = '';

  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(first())
      .subscribe((param) => (this.chatId = param['chatId']));
  }

  ngSendMsg() {
    if (this.messageContent) {
      const newMessage = this.formatMessage(this.messageContent);
      console.log(newMessage);
      
      this.messageContent = '';
    }
  }

  private formatMessage(messageContent: string): Message {
    const newMessage: Message = {
      message: messageContent.trim(),
      created_at: new Date().toLocaleString(),
    };

    return newMessage;
  }
}
