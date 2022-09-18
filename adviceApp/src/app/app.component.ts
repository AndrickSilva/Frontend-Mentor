import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adviceApp';


  id: string = 'Advice';
  quote: string = 'Click the dice bellow to generate advice';

  fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    this.id = `Advice ${data.slip.id}`;
    this.quote = `${data.slip.advice}`;

    console.log(data);
  }

}
