import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Spassu - Desenvolvedor Java Full Stack',
        p: 'Nov 2025 - Atual',
      },
      text: '<p>Atuacao no setor de petroleo com Java 8 e Spring Boot no backend, Angular 17 com Material no frontend e esteiras de CI/CD com Jenkins.</p><p>Contribuicao ativa em discussoes tecnicas de historias de usuario, aplicando SOLID e Clean Code para entregas estaveis e melhor integracao entre frontend e backend.</p><p>Participacao em ambiente agil com Scrum e Kanban, apoiando a remocao de impedimentos e acompanhamento continuo das demandas.</p>',
    },
    {
      summary: {
        strong: 'Globalweb - Desenvolvedor Java Full Stack',
        p: 'Abr 2025 - Nov 2025',
      },
      text: '<p>Projeto para seguranca privada com Java 11, Lombok, JPA, EJB, JUnit (TDD), Oracle, SonarQube e Jenkins, em arquitetura de microservicos com JBoss e WildFly.</p><p>No frontend, desenvolvimento com Angular 11, PrimeNG e RxJS, integrando camadas por DTOs e VOs.</p><p>Implementacao de funcionalidades, manutencao em banco de dados e suporte ao processo de scripts para DBA, com foco em entregas estaveis e dentro das sprints.</p>',
    },
    {
      summary: {
        strong: 'Invillia - Desenvolvedor Java',
        p: 'Jun 2024 - Abr 2025',
      },
      text: '<p>Atuacao em projetos do setor financeiro com Java, Spring Boot, Spring Cloud, Docker, Kubernetes, Gradle, Maven, Jenkins e SonarQube.</p><p>Criacao de testes automatizados, reforco de cobertura de codigo e pratica continua de TDD, SOLID e Clean Code.</p><p>Participacao ativa em Kanban, refinamentos tecnicos e remocao de impedimentos para manter previsibilidade nas entregas.</p>',
    },
    {
      summary: {
        strong: 'Kaspper - Desenvolvedor Java Full Stack',
        p: 'Set 2023 - Jun 2024',
      },
      text: '<p>Projeto de fabrica de software para o setor financeiro, com atuacao em historias de usuario desde o desenvolvimento ate a entrega.</p><p>Stack principal com Java 8, EJB, DB2 Server, WebSphere, Angular, Maven, Eclipse, DBeaver e iReport Designer.</p><p>Execucao de deploys via Jenkins e tratamento de bugs/code smells apontados pelo SonarQube para elevar a qualidade do produto.</p>',
    },
    {
      summary: {
        strong: 'DBC Company - Desenvolvedor Java',
        p: 'Nov 2021 - Jul 2023',
      },
      text: '<p>Projeto de e-commerce com Java 11, Spring Boot, Spring Data, Spring REST, Swagger, Lombok, Oracle, Docker e Azure DevOps.</p><p>Atuacao em pipeline CI/CD, criacao de produtores/consumidores Kafka e documentacao tecnica para integracoes internas e externas.</p><p>Migracao para arquitetura mais moderna com Quarkus Reactive, Java 17, MongoDB, Kafka, Keycloak (JWT), JUnit, WireMock e RestAssured.</p>',
    },
    {
      summary: {
        strong: 'AMCOM - Analista de Sistemas / Desenvolvedor Java',
        p: 'Ago 2020 - Abr 2021',
      },
      text: '<p>Como Desenvolvedor Java, atuacao em software para contabilidade com Java 8, JSF, PrimeFaces e Hibernate/JPA.</p><p>Como Analista de Sistemas II (cliente Philips), levantamento e detalhamento de requisitos em projetos internacionais, em colaboracao direta com Product Owner.</p><p>Contribuicao para maior clareza de requisitos e alinhamento entre areas de negocio e tecnologia.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel - Desenvolvedor Java Full Stack',
        p: 'Abr 2017 - Ago 2020',
      },
      text: '<p>Desenvolvimento de sistema para CME (Central de Material Esterilizado) com rastreio de itens cirurgicos via QR Code.</p><p>Atuacao ponta a ponta, do levantamento conceitual ate producao, com Java 8, Spring Security, PostgreSQL, JSF2, PrimeFaces, Hibernate/JPA e iReport.</p><p>Em 2020, desenvolvimento de software para rastreio de caixas hospitalares com Angular 8, PrimeNG, TypeScript, Spring REST, Spring Data e Spring Boot.</p>',
    },
  ]);
}
