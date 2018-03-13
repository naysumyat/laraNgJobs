import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  public job:any = {};
  constructor(private jobSvc: JobsService,
              private router: Router
  ) {

   }

  ngOnInit() {

  }

  onFormSubmit(form){
      console.log(form.valid);
      console.log(form.value);
      if(form.valid){
        //make api request  
        this.jobSvc.submitJob(form.value)
            .subscribe(data=>{
            console.log(data);
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
