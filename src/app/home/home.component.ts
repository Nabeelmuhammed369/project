import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   transform(value:string, args:string):string {
      const limit= args ? parseInt(args, 10):10;
      const trial= '...';
      return value.length> limit ? value.substring(0, limit) + trial:value;
   }
   

  public searchString: string | undefined;  
   public nativeBranch: any;

   constructor(public bankHttpService : DataService) {
      console.log('Home component constructor is called');
   }

   ngOnInit() {
      this.bankHttpService.getBankBranches().subscribe(
         (         data: any)=>{
            console.log('logging data');
            console.log(data);
            this.nativeBranch = data
            console.log(this.nativeBranch);
         },
         (         error: { errorMessage: any; })=>{
            console.log('some error occured');
            console.log(error.errorMessage);
            
            
         }
      )
   }
}