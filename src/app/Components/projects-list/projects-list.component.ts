import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../card/card.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports:[CommonModule, ProjectCardComponent],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectListComponent {

  @Input() projects: any[] = [];
  @Output() selectProject = new EventEmitter<any>();

  onSelect(project: any) {
    this.selectProject.emit(project);
  }
}
