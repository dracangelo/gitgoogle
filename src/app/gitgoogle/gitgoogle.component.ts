import { Component, OnInit } from "@angular/core";
import { GitgoogleService } from "src/app/gitgoogle.service";

@Component({
  selector: "app-gitgoogle",
  templateUrl: "./gitgoogle.component.html",
  styleUrls: ["./gitgoogle.component.css"]
})
export class GitgoogleComponent implements OnInit {
  user: any;
  repos: any;
  username: string;
  constructor(private GitgoogleService: GitgoogleService) {}

  findUser() {
    this.GitgoogleService.updateUser(this.username);
    this.GitgoogleService.getUserInfo().subscribe(profile => {
      console.log(profile);
      this.user = profile;
    });

    this.GitgoogleService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
