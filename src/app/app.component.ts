import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string= 'data-binding';
  myBtn: string= 'My Button';
  counter: number= 0;

  // 屬性綁定
  isDisabled: boolean = true;

  // 樣式綁定
  bgColor: string = 'black';
  titleColor: string = 'lightblue';
  discription: string = 'font-size: 30px; color: white';

  // class 綁定
  redText: boolean = true;

  // 事件綁定
  incrementCounter(){
    this.counter++;
  }

  // 屬性型指令(built-in)
  // 【NgModel】雙向綁定
  inputText: string = '';

  // 【NgClass】
  message: string = 'This is a ngClass sentence.';
  classes: string = 'danger text-size';

  // 【NgStyle】
  selectedColor: string = 'yellow';

}
