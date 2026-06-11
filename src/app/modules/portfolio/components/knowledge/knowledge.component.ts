import { Component, signal } from '@angular/core';

interface KnowledgeCategory {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public readonly categories = signal<KnowledgeCategory[]>([
    {
      title: 'Backend',
      items: [
        'Java 6-21',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'Spring Cloud',
        'Quarkus',
        'Java EE',
        'EJB',
        'MapStruct',
        'OpenAPI',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'Angular 11-17',
        'TypeScript',
        'Angular Material',
        'PrimeNG',
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      title: 'Cloud e DevOps',
      items: [
        'AWS',
        'IAM',
        'EC2',
        'RDS',
        'AWS Secrets Manager',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Azure DevOps',
        'SonarQube',
        'Linux',
      ],
    },
    {
      title: 'Dados e mensageria',
      items: [
        'PostgreSQL',
        'Oracle',
        'MongoDB',
        'Kafka',
        'RabbitMQ',
        'Hibernate Panache',
      ],
    },
    {
      title: 'Qualidade e arquitetura',
      items: [
        'JUnit',
        'WireMock',
        'RestAssured',
        'TDD',
        'SOLID',
        'Clean Architecture',
        'Arquitetura hexagonal',
        'Microserviços',
      ],
    },
    {
      title: 'Ferramentas, métodos e idioma',
      items: [
        'Grafana',
        'Prometheus',
        'Scrum',
        'Kanban',
        'Clean Code',
        'Design Patterns',
        'Git',
        'Jira',
        'Inglês A2',
      ],
    },
  ]);
}
