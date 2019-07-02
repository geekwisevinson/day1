import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';

@Component({
  selector: 'gw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public messages = [];
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.getMessageByDate('7/2');
  }

}
