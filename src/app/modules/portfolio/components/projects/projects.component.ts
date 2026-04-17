import { Component, inject, signal } from '@angular/core';

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
      src: 'assets/img/fametro.jpeg',
      alt: 'Formacao academica',
      title: 'Formacao Academica',
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
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
