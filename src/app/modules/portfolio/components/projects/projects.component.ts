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
        '<p><strong>Centro Universitário Fametro</strong> - Bacharelado em Sistemas de Informação (2009-2013).</p><p>Formação em desenvolvimento de software, bancos de dados, redes, engenharia de software e gestão de TI.</p>',
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
        '<p><strong>Academy Educação</strong> - MBA em Gestão de Projetos, Metodologias Ágeis e Inovação (2024-2025).</p><p>Formação complementar em planejamento, acompanhamento de projetos, métodos ágeis e inovação.</p>',
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
        '<p><strong>Anhanguera Educacional</strong> - Pós-graduação Java Applied Engineering (2025-2026).</p><p>Formação direcionada ao desenvolvimento de software e às práticas utilizadas no ecossistema Java.</p>',
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
        '<p><strong>PUCRS</strong> - MBA em Liderança, Gestão de Equipes e Produtividade (2026-2027).</p><p>Formação em andamento sobre colaboração, gestão de pessoas, tomada de decisão e produtividade no trabalho.</p>',
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
        '<p><strong>Scrum Foundation Professional Certificate (SFPC)</strong> - CertiProf.</p><p>Certificação sobre fundamentos, papéis, eventos e artefatos do Scrum.</p>',
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
        '<p><strong>Rodrigo Branas</strong> - Curso de Clean Code e Clean Architecture.</p><p>Curso complementar sobre refatoração, orientação a objetos, testes, SOLID, Design Patterns e organização de aplicações.</p>',
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
        '<p>Certificado de participação no <strong>Management 3.0 Foundation Workshop</strong> (set/2024).</p><p>Formação complementar sobre colaboração, autonomia, motivação e ambientes de trabalho.</p>',
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
        '<p>Curso de <strong>Liderança com Técnicas de PNL</strong>, concluído em 18/08/2024.</p><p>Formação complementar sobre comunicação e autoconhecimento.</p>',
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
        '<p>Certificação em <strong>Análise de Perfil Comportamental DISC</strong>, emitida em ago/2024.</p><p>Formação complementar para compreensão de perfis e estilos de comunicação.</p>',
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
