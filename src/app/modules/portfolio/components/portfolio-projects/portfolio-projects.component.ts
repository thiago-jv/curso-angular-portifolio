import { Component, signal } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
}

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {
  public readonly projects = signal<PortfolioProject[]>([
    {
      title: 'Lucas Cell',
      description:
        'Site institucional desenvolvido para fortalecer a presença digital e a descoberta local da Lucas Cell.',
      technologies: ['Angular 22', 'Bootstrap', 'SEO Local', 'Vercel'],
    },
    {
      title: 'Sistema de Estoque Lucas Cell',
      description:
        'Sistema para organização e controle de estoque, com aplicação web integrada a uma API.',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      status: 'Em desenvolvimento',
    },
    {
      title: 'Automação WhatsApp',
      description:
        'Projeto de automação de fluxos no WhatsApp com integração de navegador, Node.js e recursos de IA.',
      technologies: ['Playwright', 'Node.js', 'IA'],
    },
  ]);
}
