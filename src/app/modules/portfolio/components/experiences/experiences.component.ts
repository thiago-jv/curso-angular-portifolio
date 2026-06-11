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
      text: '<p><strong>Contexto:</strong> projeto do setor de petróleo com desenvolvimento de uma aplicação corporativa.</p><p><strong>Responsabilidades:</strong> desenvolveu e manteve funcionalidades no backend e no frontend, integrou as camadas da aplicação, corrigiu problemas e participou dos refinamentos técnicos das histórias de usuário.</p><p><strong>Tecnologias:</strong> Java 8, Spring Boot, Angular 17, Angular Material, Jenkins, Grafana e Prometheus.</p>',
    },
    {
      summary: {
        strong: 'Globalweb Corp · Desenvolvedor Java Full Stack',
        p: 'Abr 2025 - Nov 2025',
        duration: '8 meses',
      },
      category: 'dev',
      months: 8,
      text: '<p><strong>Contexto:</strong> sistema corporativo para o setor de segurança privada.</p><p><strong>Responsabilidades:</strong> implementou funcionalidades no backend e no frontend, realizou consultas e atualizações no banco de dados, preparou scripts para o DBA, integrou as camadas por DTOs e VOs e manteve relatórios com JasperReports.</p><p><strong>Tecnologias:</strong> Java 11, EJB, JPA, JUnit, Oracle, Keycloak, JBoss, WildFly, Angular 11, PrimeNG, RxJS, Jenkins e SonarQube.</p>',
    },
    {
      summary: {
        strong: 'Invillia · Desenvolvedor Java',
        p: 'Jun 2024 - Abr 2025',
        duration: '11 meses',
      },
      category: 'dev',
      months: 11,
      text: '<p><strong>Contexto:</strong> projetos de desenvolvimento de software para o setor financeiro.</p><p><strong>Responsabilidades:</strong> desenvolveu funcionalidades, criou e manteve testes automatizados, documentou alterações, revisou código e participou de refinamentos técnicos e de negócio.</p><p><strong>Tecnologias:</strong> Java, Spring Boot, Spring Cloud, Docker, Kubernetes, Jenkins, SonarQube, Gradle, Maven, Linux e Jira.</p>',
    },
    {
      summary: {
        strong: 'Kaspper · Desenvolvedor Java Full Stack',
        p: 'Set 2023 - Jun 2024',
        duration: '10 meses',
      },
      category: 'dev',
      months: 10,
      text: '<p><strong>Contexto:</strong> fábrica de software responsável por demandas de um cliente do setor financeiro.</p><p><strong>Responsabilidades:</strong> implementou histórias de usuário, documentou funcionalidades no Azure DevOps, apresentou entregas, realizou deploys com Jenkins e corrigiu bugs e apontamentos do SonarQube.</p><p><strong>Tecnologias:</strong> Java 8, EJB, DB2, WebSphere, Angular, Maven, Jenkins, SonarQube, Eclipse, DBeaver e iReport.</p>',
    },
    {
      summary: {
        strong: 'DBC Company · Desenvolvedor Java',
        p: 'Nov 2021 - Jul 2023',
        duration: '1 ano e 9 meses',
      },
      category: 'dev',
      months: 21,
      text: '<p><strong>Contexto:</strong> desenvolvimento e modernização de serviços de uma plataforma de e-commerce.</p><p><strong>Responsabilidades:</strong> manteve serviços e pipelines, desenvolveu produtores e consumidores Kafka, criou testes, documentou integrações e participou da migração de componentes para uma nova arquitetura.</p><p><strong>Tecnologias:</strong> Java 11 e 17, Spring Boot, Quarkus Reactive, Oracle, MongoDB, Hibernate Panache, Kafka, Keycloak, Docker, Azure DevOps, JUnit, WireMock e RestAssured.</p>',
    },
    {
      summary: {
        strong: 'AMcom · Analista de Sistemas / Desenvolvedor Java',
        p: 'Ago 2020 - Abr 2021',
        duration: '9 meses',
      },
      category: 'dev',
      months: 9,
      text: '<p><strong>Contexto:</strong> atuação em software para contabilidade e em projeto internacional da Philips.</p><p><strong>Responsabilidades:</strong> desenvolveu e manteve funcionalidades em Java e, como Analista de Sistemas II, levantou e documentou requisitos em colaboração com Product Owner e equipe de desenvolvimento.</p><p><strong>Tecnologias:</strong> Java 8, JSF, PrimeFaces, Hibernate/JPA e ferramentas de análise e documentação de requisitos.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Desenvolvedor Java Full Stack',
        p: 'Abr 2020 - Ago 2020',
        duration: '5 meses',
      },
      category: 'dev',
      months: 5,
      text: '<p><strong>Contexto:</strong> sistema para rastreamento da saída, entrega e retorno de caixas hospitalares por QR Code.</p><p><strong>Responsabilidades:</strong> levantou requisitos com usuários, desenvolveu telas, integrou o frontend à API e implementou funcionalidades de consulta e atualização dos dados.</p><p><strong>Tecnologias:</strong> Java, Spring Boot, Spring Data, API REST, Angular 8, TypeScript, Bootstrap, PrimeNG e Tomcat.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Desenvolvedor Java Full Stack',
        p: 'Abr 2017 - Mar 2020',
        duration: '3 anos',
      },
      category: 'dev',
      months: 36,
      text: '<p><strong>Contexto:</strong> sistema para uma Central de Material Esterilizado, com rastreamento de itens cirúrgicos por QR Code.</p><p><strong>Responsabilidades:</strong> participou do levantamento conceitual, desenvolveu e manteve funcionalidades, integrou telas e banco de dados, gerou relatórios e apoiou a implantação em produção.</p><p><strong>Tecnologias:</strong> Java 8, Spring Security, PostgreSQL, JSF 2, PrimeFaces, AJAX, Hibernate/JPA e iReport.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel · Analista de Sistemas',
        p: 'Jun 2014 - Mar 2017',
        duration: '2 anos e 10 meses',
      },
      category: 'pre-dev',
      months: 34,
      text: '<p><strong>Contexto:</strong> implantação de sistemas hospitalares em unidades de saúde de Manaus e região.</p><p><strong>Responsabilidades:</strong> coordenou atividades de implantação, alinhou necessidades com equipes locais, configurou módulos e prestou suporte aos usuários.</p><p><strong>Sistemas:</strong> módulos PACS, HIS e LIS da Agfa HealthCare.</p>',
    },
    {
      summary: {
        strong: 'Centro Universitário Fametro · Estagiário de Desenvolvimento',
        p: 'Jul 2014 - Nov 2014',
        duration: '5 meses',
      },
      category: 'pre-dev',
      months: 5,
      text: '<p><strong>Contexto:</strong> estágio em desenvolvimento de sistemas acadêmicos.</p><p><strong>Responsabilidades:</strong> apoiou a análise de requisitos, a modelagem de dados e a implementação de funcionalidades.</p>',
    },
    {
      summary: {
        strong: 'Hospital João Lúcio · Suporte de TI',
        p: 'Jan 2014 - Jul 2014',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p><strong>Contexto:</strong> suporte de TI em ambiente hospitalar.</p><p><strong>Responsabilidades:</strong> atendeu usuários, configurou computadores e notebooks e apoiou o uso do sistema de informações de pacientes.</p>',
    },
    {
      summary: {
        strong: 'Tapajós Distribuidora · Estagiário de TI',
        p: 'Jan 2013 - Jul 2013',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p><strong>Contexto:</strong> estágio de suporte e infraestrutura de TI.</p><p><strong>Responsabilidades:</strong> realizou manutenção e configuração de computadores e notebooks, prestou suporte a usuários e administrou impressoras.</p>',
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
