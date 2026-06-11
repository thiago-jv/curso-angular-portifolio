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
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'Spring Security',
        'APIs REST',
        'Quarkus',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'Angular Material',
        'PrimeNG',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Banco de dados e mensageria',
      items: ['PostgreSQL', 'Oracle', 'MongoDB', 'Kafka', 'RabbitMQ'],
    },
    {
      title: 'Testes e qualidade',
      items: [
        'JUnit',
        'WireMock',
        'RestAssured',
        'SonarQube',
        'TDD',
        'Clean Code',
      ],
    },
    {
      title: 'DevOps e infraestrutura',
      items: [
        'Docker',
        'Jenkins',
        'Kubernetes',
        'Azure DevOps',
        'Linux',
        'Serviços AWS',
      ],
    },
    {
      title: 'Ferramentas e métodos',
      items: ['Git', 'Maven', 'Gradle', 'Jira', 'Scrum', 'Kanban'],
    },
  ]);
}
