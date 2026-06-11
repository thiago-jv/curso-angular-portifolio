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

  public readonly arrayProjects = signal<IProjects[]>([
    {
      category: 'formacao',
      src: 'assets/img/fametro.jpeg',
      alt: 'Marca do Centro Universitário Fametro',
      title: 'Sistemas da Informação',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Centro Universitário Fametro</strong> - Sistemas de Informação (2009-2013).</p><p>Bacharelado com formação em desenvolvimento de software, bancos de dados, redes, engenharia de software e gestão de TI.</p>',
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
      alt: 'Marca da Academy Educação',
      title: 'MBA - Gestão de Projetos e Metodologias Ágeis',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Academy Educação</strong> - MBA em Gestão de Projetos, Metodologias Ágeis e Inovação (2024-2025).</p><p>Formação voltada à gestão de projetos, liderança de equipes, métodos ágeis e inovação.</p>',
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-melo-045950b6/',
        },
      ],
    },
    {
      category: 'formacao',
      alt: 'Pós-graduação Java Applied Engineering',
      title: 'Pós-graduação Java Applied Engineering',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Anhanguera Educacional</strong> - Java Applied Engineering (2025-2026).</p><p>Formação com foco em engenharia de software aplicada ao ecossistema Java.</p>',
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
      alt: 'Marca da PUCRS',
      title: 'MBA - Liderança, Gestão de Equipes e Produtividade',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>PUCRS</strong> - MBA em Gestão e Negócios com foco em Liderança e Pessoas (abr/2026-abr/2027).</p><p>Formação em andamento, voltada ao desenvolvimento de competências de liderança, gestão de pessoas, tomada de decisão e produtividade.</p>',
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
      title: 'Certificação Scrum Foundation - CertiProf',
      with: '140px',
      height: '90px',
      description:
        '<p>Scrum Foundation Professional Certificate (SFPC) - CertiProf.</p><p>Conhecimentos aplicados em contextos profissionais com Scrum e Kanban.</p>',
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
      alt: 'Certificado Full Stack Angular e Spring',
      title: 'Curso Full Stack Angular e Spring',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>AlgaWorks</strong> - Curso Full Stack Angular e Spring.</p><p>Formação em desenvolvimento frontend e backend com Spring Boot e Angular.</p><p>Conclusão em 26/11/2024, com carga horária de 120 horas.</p>',
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
        '<p><strong>Branas</strong> - Curso de Clean Code e Clean Architecture.</p><p>Conteúdo sobre refatoração, orientação a objetos, TDD, arquitetura hexagonal, Domain-Driven Design, microserviços, Event-Driven Architecture, CQRS, SOLID e Design Patterns.</p>',
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
      alt: 'Certificado Fundamentos da Linguagem de Programação Java SE 8',
      title: 'Fundamentos da Linguagem de Programação Java SE 8',
      with: '140px',
      height: '90px',
      description:
        '<p><strong>Ka Solution</strong> - Fundamentos da Linguagem de Programação Java SE 8.</p><p>Curso concluído entre 16/01/2021 e 13/02/2021, com carga horária de 40 horas.</p>',
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
        '<p>Certificado de participação no <strong>Management 3.0 Foundation Workshop</strong> (set/2024).</p><p>Conteúdo sobre liderança ágil, motivação de equipes, colaboração, autonomia e adaptação a mudanças.</p>',
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
      alt: 'Certificado Liderança com Técnicas de PNL',
      title: 'Liderança com Técnicas de PNL',
      with: '140px',
      height: '90px',
      description:
        '<p>Curso de <strong>Liderança com Técnicas de PNL</strong>, concluído em 18/08/2024.</p><p>Formação voltada à comunicação, influência, autoconhecimento e habilidades de liderança.</p>',
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
        '<p>Certificação em <strong>Análise de Perfil Comportamental DISC</strong>, emitida em ago/2024.</p><p>Capacitação para interpretar perfis com base nos fatores Dominância, Influência, Estabilidade e Conformidade.</p>',
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
