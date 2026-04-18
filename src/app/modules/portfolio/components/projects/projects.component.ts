import { Component, computed, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      category: 'formacao',
      src: 'assets/img/fametro.jpeg',
      alt: 'Bacharel - Sistemas da Informação',
      title: 'Sistemas da Informação',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Centro Universitario Fametro</strong> - Sistemas de Informacao (2009-2013).</p><p>Curso de Bacharelado em Sistemas de Informacao, com formacao em desenvolvimento de software, banco de dados, redes, engenharia de software e gestao de TI.</p>',
      links: [
        {
          name: 'Perfil no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'formacao',
      src: 'assets/img/academyeducacao.svg',
      alt: 'MBA Academy Educacao',
      title: 'MBA - Gestao de Projetos e Metodologias Ageis',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Academy Educacao</strong> - MBA em Gestao de Projetos, Metodologias Ageis e Inovacao (2024-2025).</p><p>Formacao voltada para gerentes de projetos, lideres de equipe e gestores que desejam adotar metodologias ageis e impulsionar a inovacao.</p>',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'formacao',
      src: 'assets/img/unipds.webp',
      alt: 'Pos-graduacao Java Applied Engineering UNIPDS',
      title: 'Pos-graduacao Java Applied Engineering',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>UNIPDS</strong> - Pos-graduacao Lato Sensu em Engenharia de Software com foco em Java (fev/2025-abr/2026).</p><p>Aprofundamento em arquitetura de sistemas distribuidos, Spring Boot, microservicos, mensageria, testes automatizados, Clean Code, SOLID, Design Patterns e ambientes conteinerizados.</p>',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'formacao',
      src: 'assets/img/pucrs.jpeg',
      alt: 'MBA PUCRS Lideranca e Pessoas',
      title: 'MBA - Lideranca, Gestao de Equipes e Produtividade',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>PUCRS</strong> - MBA em Gestao e Negocios com foco em Lideranca e Pessoas (abr/2026-abr/2027).</p><p>Formacao voltada ao desenvolvimento de competencias estrategicas para lideranca de equipes de alta performance, gestao de pessoas, tomada de decisao e produtividade organizacional.</p>',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/certprof-scrumfoundation.jpeg',
      alt: 'Scrum Foundation Professional Certificate - CertiProf',
      title: 'Certificacao Scrum Foundation – CertiProf',
      with: '140px',
      height: '90px',
      description:
        '<p>Scrum Foundation Professional Certificate (SFPC) - CertiProf.</p><p>Aplicacao continua de Scrum e Kanban em projetos corporativos de grande porte nos segmentos financeiro, e-commerce e saude.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/fullstack-angular-spring.jpeg',
      alt: 'Certificado Fullstack Angular e Spring',
      title: 'Curso Fullstack Angular e Spring',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>AlgaWorks</strong> - Curso Fullstack Angular e Spring.</p><p>Formacao focada em desenvolvimento frontend e backend com Spring boot e Angular</p><p>Conclusao em 26/11/2024, com carga horaria de 120 horas.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/arquitetura-limpa.jpeg',
      alt: 'Certificado Curso de Clean Code e Clean Architecture',
      title: 'Curso de Clean Code e Clean Architecture',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Branas</strong> - Curso de Clean Code e Clean Architecture.</p><p>Aprendizado em Clean Code, refatoracao, OO, TDD, arquitetura hexagonal, Domain-Driven Design, microservices, Event-Driven Architecture, CQRS, SOLID e Design Patterns.</p><p>Formacao abrangente do frontend ao backend, com foco em alta performance.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/java-8.jpeg',
      alt: 'Certificado Fundamentos da Linguagem de Programacao Java SE 8',
      title: 'Fundamentos da Linguagem de Programacao Java SE 8',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Ka Solution</strong> - Fundamentos da Linguagem de Programacao Java SE 8.</p><p>Curso concluido no periodo de 16/01/2021 a 13/02/2021, com carga horaria total de 40 horas.</p><p>Base tecnica em sintaxe da linguagem, orientacao a objetos e fundamentos essenciais para desenvolvimento Java.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/management.png',
      alt: 'Certificado Management 3.0 Foundation Workshop',
      title: 'Management 3.0 Foundation Workshop',
      with: '140px',
      height: '90px',
      description:
        '<p>Certificado de participacao no <strong>Management 3.0 Foundation Workshop</strong> (set/2024).</p><p>Abordagem de gestao orientada a lideranca agil, motivacao de equipes, colaboracao, autonomia com responsabilidade e adaptacao continua as mudancas.</p><p>Foco pratico em melhorar cultura organizacional, desenvolvimento de competencias e resultados sustentaveis.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/tecnicas-lideranca-pnl.jpeg',
      alt: 'Certificado Lideranca com Tecnicas de PNL',
      title: 'Lideranca com Tecnicas de PNL',
      with: '140px',
      height: '90px',
      description:
        '<p>Curso de <strong>Lideranca com Tecnicas de PNL</strong>, concluido em 18/08/2024.</p><p>Formacao voltada para comunicacao, influencia, autoconhecimento e desenvolvimento de habilidades de lideranca aplicadas a contextos profissionais.</p><p>Aplicacao pratica de tecnicas para melhorar tomada de decisao, relacionamento interpessoal e performance de equipes.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'certificado',
      src: 'assets/img/disc.jpeg',
      alt: 'Certificado Analista de Mapeamento de Perfil Comportamental DISC',
      title: 'Analista de Mapeamento de Perfil Comportamental',
      with: '140px',
      height: '90px',
      description:
        '<p>Certificacao em <strong>Analise de Perfil Comportamental DISC</strong>, emitida em ago/2024.</p><p>Capacitacao para interpretar perfis comportamentais com base nos quatro fatores DISC: Dominancia (D), Influencia (I), Estabilidade (S) e Conformidade (C).</p><p>Aplicacao em desenvolvimento de pessoas, comunicacao, lideranca e melhor composicao de equipes.</p>',
      links: [
        {
          name: 'Ver no LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
  ]);

  public formacaoItems = computed(() =>
    this.arrayProjects().filter((item) => item.category === 'formacao'),
  );

  public certificadoItems = computed(() =>
    this.arrayProjects().filter((item) => item.category === 'certificado'),
  );

  public outrosItems = computed(() =>
    this.arrayProjects().filter((item) => item.category === 'outros'),
  );

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
