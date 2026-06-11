import { Component, computed, signal } from '@angular/core';

import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public readonly arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Spassu · Desenvolvedor Java Full Stack',
        p: 'Nov 2025 - Abr 2026',
        duration: '6 meses',
      },
      category: 'dev',
      months: 6,
      text: '<p>Atuação no setor de petróleo com Java 8 e Spring Boot no backend, Angular 17 com Material no frontend, CI/CD com Jenkins e observabilidade com Grafana e Prometheus.</p><p>Participação nas discussões técnicas das histórias de usuário, aplicando SOLID e Clean Code na definição de soluções junto ao time.</p><p>Contribuição para entregas estáveis e integração entre frontend e backend em ambiente ágil com Scrum e Kanban.</p>',
    },
    {
      summary: {
        strong: 'Globalweb Corp · Desenvolvedor Java Full Stack',
        p: 'Abr 2025 - Nov 2025',
        duration: '8 meses',
      },
      category: 'dev',
      months: 8,
      text: '<p>Atuação em projeto para o setor de segurança privada, com Java 11, Lombok, JPA, EJB, JUnit, TDD, Oracle, SonarQube e Jenkins no backend, utilizando JBoss, WildFly e Keycloak.</p><p>Implementação de funcionalidades, consultas e atualizações no banco de dados, elaboração de scripts para o DBA e desenvolvimento frontend com Angular 11, PrimeNG e RxJS. Integração entre camadas por DTOs e VOs e geração de relatórios com JasperReports.</p><p>Participação em discussões técnicas, aplicação de SOLID e Clean Code e acompanhamento das demandas pelo Jira.</p>',
    },
    {
      summary: {
        strong: 'Invillia · Desenvolvedor Java',
        p: 'Jun 2024 - Abr 2025',
        duration: '11 meses',
      },
      category: 'dev',
      months: 11,
      text: '<p>Atuação em projetos do setor financeiro com Java, Spring Boot, Spring Cloud, Docker, Kubernetes, Gradle, Maven, Jenkins e SonarQube em ambiente Linux.</p><p>Desenvolvimento de funcionalidades, testes automatizados, documentação e revisão de código, com foco em TDD, SOLID e Clean Code.</p><p>Participação em refinamentos técnicos e de negócio, definição de tarefas, remoção de impedimentos e acompanhamento de demandas pelo Jira.</p>',
    },
    {
      summary: {
        strong: 'Kaspper · Desenvolvedor Java Full Stack',
        p: 'Set 2023 - Jun 2024',
        duration: '10 meses',
      },
      category: 'dev',
      months: 10,
      text: '<p>Atuação em fábrica de software para cliente do setor financeiro, conduzindo histórias de usuário da implementação à entrega.</p><p>Stack com Java 8, EJB, DB2, WebSphere, Angular, Maven, Eclipse, DBeaver e iReport Designer.</p><p>Responsabilidade por documentação no Azure DevOps, apresentação de funcionalidades, deploys com Jenkins e correção de bugs e code smells apontados pelo SonarQube.</p>',
    },
    {
      summary: {
        strong: 'DBC Company · Desenvolvedor Java',
        p: 'Nov 2021 - Jul 2023',
        duration: '1 ano e 9 meses',
      },
      category: 'dev',
      months: 21,
      text: '<p>Atuação em projeto de e-commerce com Java 11, Spring Boot, Spring Data, APIs REST, Swagger, Lombok, Oracle, Docker e Azure DevOps.</p><p>Participação em pipelines de CI/CD, criação de produtores e consumidores Kafka, testes unitários e documentação técnica de um serviço para integrações internas e externas.</p><p>Participação na migração para Quarkus Reactive com Java 17, MongoDB, Hibernate Panache, Kafka, Keycloak com JWT, arquitetura hexagonal, JUnit, WireMock e RestAssured.</p>',
    },
    {
      summary: {
        strong: 'AMcom · Analista de Sistemas / Desenvolvedor Java',
        p: 'Ago 2020 - Abr 2021',
        duration: '9 meses',
      },
      category: 'dev',
      months: 9,
      text: '<p>Como Desenvolvedor Java, atuação em software para contabilidade com Java 8, JSF, PrimeFaces e Hibernate/JPA.</p><p>Como Analista de Sistemas II, atuação em projeto internacional da Philips com análise de requisitos, levantamento e detalhamento de necessidades e colaboração direta com Product Owner.</p><p>Contribuição para maior clareza das demandas e alinhamento entre negócio e desenvolvimento.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Desenvolvedor Java Full Stack',
        p: 'Abr 2020 - Ago 2020',
        duration: '5 meses',
      },
      category: 'dev',
      months: 5,
      text: '<p>Desenvolvimento de solução para rastrear saída, entrega e retorno de caixas hospitalares por QR Code.</p><p>Levantamento de requisitos e desenvolvimento full stack com Angular 8, Bootstrap, PrimeNG e TypeScript.</p><p>No backend, construção de API REST com Spring Boot, Spring Data e Tomcat para apoiar o controle da logística hospitalar.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Desenvolvedor Java Full Stack',
        p: 'Abr 2017 - Mar 2020',
        duration: '3 anos',
      },
      category: 'dev',
      months: 36,
      text: '<p>Desenvolvimento de software para Central de Material Esterilizado, com rastreamento de itens cirúrgicos por QR Code.</p><p>Participação desde o levantamento conceitual até a implantação em produção, utilizando Java 8, Spring Security, PostgreSQL, JSF 2, PrimeFaces, AJAX, MVC e Hibernate/JPA.</p><p>Contribuição para o controle, a rastreabilidade e a segurança no gerenciamento de materiais cirúrgicos.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Analista de Sistemas',
        p: 'Jun 2014 - Mar 2017',
        duration: '2 anos e 10 meses',
      },
      category: 'pre-dev',
      months: 34,
      text: '<p>Participação na implantação de sistemas hospitalares em Manaus e região, incluindo unidades de referência.</p><p>Coordenação de implantações, alinhamento com equipes locais e suporte à configuração dos módulos PACS, HIS e LIS da Agfa HealthCare.</p><p>Contribuição para a modernização de processos hospitalares e o acesso à informação clínica.</p>',
    },
    {
      summary: {
        strong: 'Centro Universitário Fametro · Estagiário de Desenvolvimento',
        p: 'Jul 2014 - Nov 2014',
        duration: '5 meses',
      },
      category: 'pre-dev',
      months: 5,
      text: '<p>Estágio em desenvolvimento de software com foco em análise de requisitos, modelagem de dados e apoio à implementação de funcionalidades acadêmicas.</p>',
    },
    {
      summary: {
        strong: 'Hospital João Lúcio · Suporte de TI',
        p: 'Jan 2014 - Jul 2014',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p>Suporte a usuários, configuração de equipamentos e atendimento a demandas do sistema de informações de pacientes.</p>',
    },
    {
      summary: {
        strong: 'Tapajós Distribuidora · Estagiário de TI',
        p: 'Jan 2013 - Jul 2013',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p>Estágio em TI com manutenção e configuração de computadores, suporte a usuários e gestão de impressoras.</p>',
    },
  ]);

  public readonly totalDevMonths = computed(() =>
    this.arrayExperiences()
      .filter((item) => item.category === 'dev')
      .reduce((total, item) => total + item.months, 0),
  );

  public readonly totalDev = computed(
    () => `${Math.floor(this.totalDevMonths() / 12)}+ anos como desenvolvedor`,
  );
}
