import { Component, OnInit } from '@angular/core';
import { GitgoogleService } from 'src/app/gitgoogle.service';

@Component({
  selector: 'app-gitgoogle',
  templateUrl: './gitgoogle.component.html',
  styleUrls: ['./gitgoogle.component.css']
})
export class GitgoogleComponent implements OnInit {
  user: any;
  constructor(private GitgoogleService:GitgoogleService) {
     this.GitgoogleService.getUserInfo().subscribe(profile => {
       console.log(profile)
       this.user = profile 
     })

  }

  ngOnInit() {
  }

}
