import { Component } from '@angular/core';

import { ContactComponent } from '../../components/contact/contact.component';
import { ContributionsComponent } from '../../components/contributions/contributions.component';
import { DeliveriesComponent } from '../../components/deliveries/deliveries.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { PortfolioProjectsComponent } from '../../components/portfolio-projects/portfolio-projects.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ContributionsComponent,
    DeliveriesComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    PortfolioProjectsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
