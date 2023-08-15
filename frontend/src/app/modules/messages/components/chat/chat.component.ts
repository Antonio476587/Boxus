import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Message } from '../../models/Chat';
import { SupabaseService } from 'src/app/supabase.service';
import { RealtimeChannel } from '@supabase/supabase-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  private chatId = '';
  messageContent = '';
  channel: RealtimeChannel = this.supabase.createChannel();

  constructor(
    private route: ActivatedRoute,
    private readonly supabase: SupabaseService
  ) {
    this.route.params
      .pipe(first())
      .subscribe((param) => (this.chatId = param['chatId']));
  }

  ngOnInit() {
    this.channel.on('broadcast', { event: 'test-my-messages' }, (payload) => console.log(payload))
    this.channel.subscribe()
  }

  ngSendMsg() {
    if (this.messageContent) {
      const newMessage = this.formatMessage(this.messageContent);
      console.log(newMessage);

      const resp = this.channel.send({
        type: 'broadcast',
        event: 'test-my-messages',
        payload: newMessage,
      })

      const message = { text: 'Hello, world!' }

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
