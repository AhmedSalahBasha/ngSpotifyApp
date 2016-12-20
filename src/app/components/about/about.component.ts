import { Component, OnInit } from '@angular/core';
import {Projects} from "../../../projects";
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private projects: Projects[];

  constructor(private _projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this._projectService.getProjects();
  }

}
