import { Component, Input } from '@angular/core';
import { Project } from '../../Services/projects.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
