import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsService } from './Services/projects.service';
import { HeaderComponent } from './Components/header/header.component';
import { ProjectListComponent } from './Components/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';

@Component({
  selector: 'app-root',     
  standalone: true,
  imports: [ HeaderComponent, ProjectListComponent, ProjectDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projects.length ? this.projects[0] : null; // default first
  }

  onProjectSelected(project: any) {
    this.selectedProject = project;
  }
}
