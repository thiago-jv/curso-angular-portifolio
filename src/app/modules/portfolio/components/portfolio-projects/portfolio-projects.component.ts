import { Component, signal } from '@angular/core';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  learning: string;
  status?: string;
  website?: string;
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
    status: 'Publicado',
    website: 'https://www.lucascellmanaus.com.br/',
  },
  {
    title: 'SisKitnet',
    description:
      'Sistema web para gestão de kitnets, permitindo o controle de imóveis, inquilinos, contratos, lançamentos financeiros e acompanhamento de receitas e despesas.',
    technologies: [
      'Java 17',
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
    learning:
      'Desenvolvimento full stack com autenticação JWT, controle de acesso por permissões, modelagem de banco de dados, APIs REST e implantação em ambiente cloud.',
    status: 'Publicado',
    website: 'https://siskitnet.thiagomelotech.com.br/login',
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
]);
}
