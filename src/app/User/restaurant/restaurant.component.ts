import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  rest: Restaurant[]=[];
  menu:Menu[]=[];
  restn: any;
 
  restname: any;




  // restData:any;
  // filteredData:any[] | undefined;
  // searchQuery!: string;
  constructor(private restService:RestaurantService,
   private router: Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
//     this.restData=this.restService.getRest();
//     console.log(this.restData);
  
// this.filteredData=[...this.restData];

    this.getProductall();
   
    //this.fetchSpecificRestaurantMenu(this.);
    this.restn=this.route.snapshot.params['restname'];
    this.restname = this.restn;
    this.fetchSpecificRestaurantMenu(this.restname);
  }
  
  private getProductall(){
    this.restService.getRest().subscribe(data => {
      this.rest = data;
      console.log(this.rest);

    });
  }
  
  fetchSpecificRestaurantMenu(restname: string): void {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
      this.router.navigate(['viewmenuuser', restname]);
    });
  }
  

  // search():void{
  //   if(this.searchQuery){
  //     this.filteredData=this.restData.filter(
  //       (fd:any)=>
  //       fd.restname.toLowerCase().include(this.searchQuery.toLowerCase)
  //     );
  //   }
  //   else{
  //     this.filteredData=[...this.restData];
  //   }
  // }

}
