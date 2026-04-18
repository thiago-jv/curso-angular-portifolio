import { Component, computed, signal } from '@angular/core';

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
        strong: 'Spassu - Analista Desenvolvedor Java Fullstack Angular',
        p: 'Nov 2025 - Atual',
        duration: '6 meses',
      },
      category: 'dev',
      months: 6,
      text: '<p>Atuacao no setor de petroleo com Java 8 e Spring Boot no backend, Angular 17 com Material no frontend, CI/CD com Jenkins e observabilidade com Grafana e Prometheus.</p><p>Participacao ativa nas discussoes tecnicas das historias de usuario, aplicando SOLID e Clean Code para definir solucoes junto ao time.</p><p>Contribuicao para entregas mais estaveis, melhor integracao entre frontend e backend e cumprimento dos prazos em ambiente agil com Scrum e Kanban.</p>',
    },
    {
      summary: {
        strong: 'Globalweb Corp - Analista Desenvolvedor Java Fullstack Angular',
        p: 'Abr 2025 - Nov 2025',
        duration: '8 meses',
      },
      category: 'dev',
      months: 8,
      text: '<p>Atuacao em projeto para o setor de seguranca privada, com Java 11, Lombok, JPA, EJB, JUnit, TDD, Oracle, SonarQube e Jenkins no backend, em arquitetura de microservicos com JBoss e WildFly.</p><p>No frontend, desenvolvimento com Angular 11, PrimeNG e RxJS, com integracao por DTOs e VOs, alem de uso de JasperReports para relatorios.</p><p>Participacao em discussoes tecnicas das HUs, aplicacao de SOLID e Clean Code e apoio a impedimentos em Scrum e Kanban para manter entregas estaveis e alinhadas as sprints.</p>',
    },
    {
      summary: {
        strong: 'Invillia - Desenvolvedor Java',
        p: 'Jun 2024 - Abr 2025',
        duration: '11 meses',
      },
      category: 'dev',
      months: 11,
      text: '<p>Atuacao em projetos do setor financeiro com Java, Spring Boot, Spring Cloud, Docker, Kubernetes, Gradle, Maven, Jenkins e SonarQube.</p><p>Desenvolvimento de funcionalidades conforme requisitos, criacao de testes para cobertura de codigo e foco continuo em TDD, SOLID e Clean Code.</p><p>Participacao ativa em refinamentos tecnicos e de negocio, definicao de tarefas e remocao de impedimentos para garantir entregas consistentes nas sprints.</p>',
    },
    {
      summary: {
        strong: 'Kaspper - Desenvolvedor Java Full Stack',
        p: 'Set 2023 - Jun 2024',
        duration: '10 meses',
      },
      category: 'dev',
      months: 10,
      text: '<p>Atuacao em fabrica de software para cliente do setor financeiro, conduzindo historias de usuario desde a implementacao ate a entrega com Scrum.</p><p>Stack principal com Java 8, EJB, DB2 Server, WebSphere, Angular, Maven, Eclipse, DBeaver e iReport Designer.</p><p>Responsavel por documentacao no Azure, apresentacao de funcionalidades, deploys com Jenkins e correcao de bugs e code smells apontados pelo SonarQube.</p>',
    },
    {
      summary: {
        strong: 'DBC Company - Desenvolvedor Java',
        p: 'Nov 2021 - Jul 2023',
        duration: '1 ano 9 meses',
      },
      category: 'dev',
      months: 21,
      text: '<p>Atuacao em projeto de e-commerce com Java 11, Spring Boot, Spring Data, Spring REST, Swagger, Lombok, Oracle, Docker e Azure DevOps.</p><p>Participacao em pipeline CI/CD, criacao de consumidores e produtores Kafka, forte foco em testes unitarios e documentacao tecnica para integracoes.</p><p>A partir de 2022, participacao na migracao para Quarkus Reactive com Java 17, MongoDB, Kafka, Keycloak (JWT), arquitetura hexagonal, JUnit, WireMock e RestAssured.</p>',
    },
    {
      summary: {
        strong: 'AMcom - Analista de Desenvolvimento / Desenvolvedor Java',
        p: 'Ago 2020 - Abr 2021',
        duration: '9 meses',
      },
      category: 'dev',
      months: 9,
      text: '<p>Como Desenvolvedor Java (fev/2021 a abr/2021), atuacao em software para contabilidade com Java 8, JSF, PrimeFaces e Hibernate/JPA.</p><p>Como Analista de Sistemas II (ago/2020 a fev/2021), em cliente internacional, com foco em analise de requisitos e colaboracao direta com Product Owner.</p><p>Contribuicao para maior clareza das demandas, melhor alinhamento entre as areas e entregas mais consistentes ao longo do projeto.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel - Desenvolvedor Java FullStack',
        p: 'Abr 2020 - Ago 2020',
        duration: '5 meses',
      },
      category: 'dev',
      months: 5,
      text: '<p>Desenvolvimento de solucao para rastrear saida, entrega e retorno de caixas hospitalares por QR Code.</p><p>Atuacao no levantamento de requisitos com clientes, alinhamentos diarios e desenvolvimento full stack com Angular 8, Bootstrap, PrimeNG e TypeScript no frontend.</p><p>No backend, construcao de API REST com Spring Boot, Spring Data e Tomcat, contribuindo para maior controle e visibilidade da logistica hospitalar.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel - Desenvolvedor Java FullStack',
        p: 'Abr 2017 - Mar 2020',
        duration: '3 anos',
      },
      category: 'dev',
      months: 36,
      text: '<p>Atuacao no desenvolvimento de software para a CME (Central de Material Esterilizado), com rastreio de itens cirurgicos por QR Code.</p><p>Participacao ponta a ponta, do levantamento conceitual ate a implantacao em producao, com Java 8, Spring Security, PostgreSQL, JSF 2, PrimeFaces, AJAX, MVC e Hibernate/JPA.</p><p>Contribuicao para maior controle, rastreabilidade e seguranca no gerenciamento de materiais cirurgicos.</p>',
    },
    {
      summary: {
        strong: 'Grupo Bringel - Analista de Sistema',
        p: 'Jun 2014 - Mar 2017',
        duration: '2 anos 10 meses',
      },
      category: 'pre-dev',
      months: 34,
      text: '<p>Participacao na implantacao de sistemas hospitalares em Manaus e regiao, com atuacao em unidades como Hospital Universitario Francisca Mendes, Hospital Delphina Rinaldi Abdel Aziz e Hospital Joaozinho.</p><p>Atuacao na coordenacao de implantacoes, alinhamento com equipes locais e suporte a configuracao dos modulos PACS, HIS e LIS do Agfa HealthCare.</p><p>Contribuicao para a modernizacao de processos hospitalares, melhor acesso a informacao clinica e maior eficiencia operacional.</p>',
    },
    {
      summary: {
        strong: 'Centro Universitario Fametro - Estagiario de Desenvolvimento',
        p: 'Jul 2014 - Nov 2014',
        duration: '5 meses',
      },
      category: 'pre-dev',
      months: 5,
      text: '<p>Estagio em desenvolvimento de software com foco em analise de requisitos, modelagem de dados e suporte a implementacao de funcionalidades academicas.</p><p>Contribuicao para consolidar a base tecnica em desenvolvimento e boas praticas de colaboracao em equipe.</p>',
    },
    {
      summary: {
        strong: 'Hospital Joao Lucio - Suporte de TI',
        p: 'Jan 2014 - Jul 2014',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p>Suporte a usuarios, configuracao de notebooks e computadores e atendimento a demandas do sistema de informacoes de pacientes.</p><p>Atuacao na resolucao de problemas tecnicos para garantir continuidade operacional e melhor uso das ferramentas internas.</p>',
    },
    {
      summary: {
        strong: 'Tapajos Distribuidora - Estagiario de TI',
        p: 'Jan 2013 - Jul 2013',
        duration: '7 meses',
      },
      category: 'pre-dev',
      months: 7,
      text: '<p>Estagio em TI com manutencao e configuracao de computadores e notebooks, suporte a usuarios e gestao de impressoras.</p><p>Contribuicao para maior disponibilidade dos recursos de TI e reducao de falhas operacionais no dia a dia.</p>',
    },
  ]);

  public totalDevMonths = computed(() =>
    this.arrayExperiences()
      .filter((item) => item.category === 'dev')
      .reduce((acc, item) => acc + item.months, 0),
  );

  public totalPreDevMonths = computed(() =>
    this.arrayExperiences()
      .filter((item) => item.category === 'pre-dev')
      .reduce((acc, item) => acc + item.months, 0),
  );

  public totalDev = computed(() =>
    this.formatMonths(this.totalDevMonths(), 'como DEV'),
  );

  public totalPreDev = computed(() =>
    this.formatMonths(this.totalPreDevMonths(), 'antes de DEV'),
  );

  private formatMonths(months: number, label: string): string {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (!years) {
      return `${label}: ${remainingMonths} meses`;
    }

    const yearText = years === 1 ? '1 ano' : `${years} anos`;

    if (!remainingMonths) {
      return `${label}: ${yearText}`;
    }

    const monthText = remainingMonths === 1 ? '1 mes' : `${remainingMonths} meses`;
    return `${label}: ${yearText} e ${monthText}`;
  }
}
