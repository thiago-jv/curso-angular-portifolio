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
      title: 'Sistemas para a área da saúde',
      description:
        'Desenvolvimento e implantação de sistemas para rastreamento de materiais hospitalares, incluindo levantamento de requisitos, aplicações web, APIs e bancos de dados.',
      technologies: ['Java', 'Spring', 'PostgreSQL', 'Oracle'],
    },
    {
      title: 'Projetos financeiros',
      description:
        'Implementação de funcionalidades, testes automatizados, correções e integrações em aplicações utilizadas no setor financeiro.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Jenkins'],
    },
    {
      title: 'E-commerce e integrações',
      description:
        'Desenvolvimento e manutenção de serviços, produtores e consumidores Kafka, documentação de integrações e participação na modernização de aplicações.',
      technologies: ['Java', 'Quarkus', 'Kafka', 'MongoDB'],
    },
    {
      title: 'Petróleo e segurança privada',
      description:
        'Desenvolvimento full stack com Java e Angular, integração entre frontend e backend, geração de relatórios e apoio aos processos de CI/CD e observabilidade.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Jenkins'],
    },
  ]);
}
