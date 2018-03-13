import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public jobs:any;
  public page:any = 1;
  constructor(private jobSvc: JobsService) { 
      this.fetch();
  }

  fetch(){
    this.jobSvc.fetchAll().subscribe(data=>{
      let d:any = data;
      this.jobs = d.data;

  },err=>{
    console.log(err);
  });

  }

  delete(id){
    let yes =  confirm("Are you sure to delete ?");

    if(yes){
          this.jobSvc.destroy(id).subscribe(ok=>{
                this.fetch();
          },
        err=>{
            console.log(err);
        });
    }

  }

  ngOnInit() {

  }

}
