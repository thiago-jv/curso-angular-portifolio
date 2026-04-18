import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public categories = signal<Array<{ title: string; items: string }>>([
    {
      title: 'Principais Tecnologias',
      items:
        'Java (7-21), Spring Boot, Spring Cloud, Microservices, Angular (5-17), TypeScript, Docker, Kubernetes, CI/CD (Jenkins e CI/CD).',
    },
    {
      title: 'Backend',
      items:
        'Spring Data, Spring REST, Spring Security, Java EE, JSF, EJB, Quarkus, Swagger/OpenAPI, Lombok e MapStruct.',
    },
    {
      title: 'Frontend',
      items: 'Angular, PrimeNG, Angular Material, HTML, CSS, JavaScript e TypeScript',
    },
    {
      title: 'Testes',
      items: 'JUnit, RestAssured, WireMock e TDD.',
    },
    {
      title: 'Arquitetura e Praticas',
      items:
        'Microservices, Monolito, Clean Architecture, SOLID, Clean Code e Design Patterns.',
    },
    {
      title: 'Banco de Dados',
      items: 'PostgreSQL, Oracle, MongoDB e Reddis.',
    },
    {
      title: 'Mensageria',
      items: 'Kafka e RabbitMQ.',
    },
    {
      title: 'DevOps e Observabilidade',
      items:
        'Docker, Kubernetes, Jenkins, SonarQube, Prometheus e Grafana.',
    },
    {
      title: 'Ferramentas e Metodologias',
      items:
        'Git, IntelliJ IDEA, Eclipse, VSCode, WebSphere, JBoss, WildFly, Tomcat, JasperReports, iReport, Scrum e Kanban.',
    },
    {
      title: 'Idioma',
      items: 'Ingles A2 - leitura e escrita tecnica basica.',
    },
  ]);
}
