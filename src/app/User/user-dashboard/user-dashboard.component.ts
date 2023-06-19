import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../modal/menu';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  menu: Menu[] = [];

  
 // rest:Restaurant[]=[];
  restn:string='';
  constructor(private restService: RestaurantService, private router: Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
   this.restn=this.route.snapshot.params['userid'];
    const restname = this.restn;
    this.fetchSpecificRestaurantMenu(restname);
  }

  // saveOrder()

  fetchSpecificRestaurantMenu(restname: string): void {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
    });
  }

}
