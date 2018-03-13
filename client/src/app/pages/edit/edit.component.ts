import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public job:any = {};
  public id:any;
  constructor(private jobSvc: JobsService,
  private router: Router) {
     
     this.id = location.href.split("/").pop();

    this.jobSvc.fetchById(this.id).subscribe(data=>{
             // console.log(data);
          let d:any = data;
          this.job = d.data;
          console.log(this.job);
            },
          err=>{
            console.log(err);
          });

  }

  ngOnInit() {

  }

  onFormSubmit(form){

    if(form.valid){
      //make api request  

      this.jobSvc.updateJob(form.value, this.id)
          .subscribe(data=>{

          let d:any = data;
            if(d.success){
              this.router.navigate([""]);
            }
        },
        err=>{
          console.log(err);
        });

      
    }
}

}
