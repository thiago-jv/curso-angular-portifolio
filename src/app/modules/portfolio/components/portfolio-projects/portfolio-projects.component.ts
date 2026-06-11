import { Component, signal } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  learning: string;
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
        'Site institucional desenvolvido para apresentar os serviços da empresa, facilitar o contato de clientes e apoiar sua presença digital.',
      technologies: ['Angular 22', 'Bootstrap', 'SEO Local', 'Vercel'],
      learning:
        'Aplicação prática de responsividade, publicação web e organização de conteúdo para busca local.',
    },
    {
      title: 'Sistema de Estoque Lucas Cell',
      description:
        'Aplicação em desenvolvimento para cadastro de produtos e apoio à organização e ao controle de estoque.',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      learning:
        'Integração entre API, interface web, persistência de dados e ambiente conteinerizado.',
      status: 'Em desenvolvimento',
    },
    {
      title: 'Automação WhatsApp',
      description:
        'Projeto de estudo voltado à automação de tarefas no WhatsApp Web por meio do controle de navegador.',
      technologies: ['Playwright', 'Node.js'],
      learning:
        'Automação de navegador, tratamento de fluxos assíncronos e experimentos de integração com recursos de IA.',
      status: 'Em estudo',
    },
  ]);
}
