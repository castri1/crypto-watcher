import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase  } from 'angularfire2/database';



interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  
  messages: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit (){
    this.messages = this.db.list("/crypto").valueChanges();
    // alert(this.messages);
  }
  
  
  // messages = [ {
  //   "data": {
  //     "latestValue": 5239.9466498694255
  //   },
  //   "name": "Bitcoin"
  // },
  //  {
  //   "data": {
  //     "latestValue": 13641.445484626955
  //   },
  //   "name": "Ethereum"
  // }]
}
