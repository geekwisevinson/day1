import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages = [
    {text: 'hello', author: 'vince', date: '7/1'},
    {text: 'hi', author: 'jim', date: '7/2'},
    {text: 'what up', author: 'jay', date: '7/2'}
  ];
  constructor() { }

  public getMessagesFrom(username) {
    return this.messages.filter( message => {
      return message.author === username;
    });
  }
  public getMessageByDate(date) {
    return this.messages.filter( message => {
      return message.date === date;
    });
  }
}
