import { Component, signal } from '@angular/core';

interface Delivery {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [],
  templateUrl: './deliveries.component.html',
  styleUrl: './deliveries.component.scss',
})
export class DeliveriesComponent {
  public readonly deliveries = signal<Delivery[]>([
    {
      title: 'Sistemas hospitalares',
      description:
        'Desenvolvimento, implantação e manutenção de soluções para rastreabilidade de materiais e apoio a operações da área da saúde.',
      technologies: ['Java', 'Spring', 'PostgreSQL', 'Oracle'],
    },
    {
      title: 'Projetos financeiros',
      description:
        'Desenvolvimento de APIs REST, integrações corporativas, testes automatizados e funcionalidades orientadas às regras de negócio do setor financeiro.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Cloud',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      title: 'Petróleo e gás',
      description:
        'Desenvolvimento full stack com integração entre backend, frontend, esteira de entrega e observabilidade.',
      technologies: [
        'Java 8',
        'Spring Boot',
        'Angular 17',
        'Jenkins',
        'Grafana',
      ],
    },
  ]);
}
