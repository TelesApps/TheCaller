import { Component, OnInit } from '@angular/core';
import { Instnt, InstntAngularService } from '@instnt/instnt-angular-sdk';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formKey = 'v1696502201485693';
  serviceURL = 'https://api.instnt.org';
  eventHandler = (event: any) => {
    switch (event.type) {
      case "transaction.initiated":
        console.log("Instnt Object: ", event.data.instnt)
        break;
    }
  }
  // serviceURL = '';
  instnt: Observable<Instnt>;

  constructor(private instntService: InstntAngularService) { }

  ngOnInit(): void {
    this.instnt = this.instntService.getInstnt();
  }

  onSubmitData() {
    const testData = {
      "city": "testCity",
      "country": "usa",
      "email": "test@gmail.com",
      "firstName": "test",
      "mobileNumber": "+18505903218",
      "physicalAddress": "testAddress",
      "state": "testState",
      "surName": "testlastName",
      "zip": "11230"
    }

  }

}
