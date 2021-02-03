import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  share() {
    console.log("share() 호출 : 그러면 ts 파일에 이벤트 함수와 Custom 함수가 같이 있겠네? angualr 실전 아키텍트를 조사 해봐야한다.");
  }

  onNotify() {
    console.log("onNotify() 호출 : 하위 컴포넌트의 이벤트가 상위 컴포넌트의 함수를 호출 할 수 있다.");
  }  
}
