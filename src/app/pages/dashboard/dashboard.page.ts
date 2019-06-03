import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  constructor( 
    private service: AuthenticationService) {      
      let x = service.detailsUser()
      console.log(x)

      
      
  }
  
  
  ngOnInit() {
  }

  
  
}
