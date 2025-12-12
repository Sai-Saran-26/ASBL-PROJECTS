import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Services/projects.service';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() project!: Project;
}
