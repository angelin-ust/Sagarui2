import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {
  quantity: number = 0;

  menu: Menu[] = [];
  restaurant!: String;
  restn: any;
  restname: any;
  constructor(private restService:RestaurantService,
    private router: Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.restn=this.route.snapshot.params['restname'];
    this.restname = this.restn;
    this.fetchSpecificRestaurantMenu(this.restname);
  }
  fetchSpecificRestaurantMenu(restname: string) {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
      this.router.navigate(['viewmenuuser', restname]);
    });
  }
}

  

