import { Component, signal } from '@angular/core';

interface Contribution {
  title: string;
  description: string;
}

@Component({
  selector: 'app-contributions',
  standalone: true,
  imports: [],
  templateUrl: './contributions.component.html',
  styleUrl: './contributions.component.scss',
})
export class ContributionsComponent {
  public readonly contributions = signal<Contribution[]>([
    {
      title: 'Desenvolvimento de sistemas web',
      description:
        'Criação e evolução de aplicações corporativas com Java, Spring Boot, Angular e bancos de dados relacionais, considerando qualidade, desempenho e facilidade de manutenção.',
    },
    {
      title: 'APIs e integrações',
      description:
        'Desenvolvimento de APIs REST e integração com sistemas internos, serviços externos, bancos de dados e plataformas corporativas.',
    },
    {
      title: 'Desenvolvimento full stack',
      description:
        'Atuação no backend, frontend e banco de dados, acompanhando as funcionalidades desde o entendimento da necessidade até sua disponibilização.',
    },
    {
      title: 'Modernização de sistemas',
      description:
        'Manutenção de aplicações existentes por meio de correções, refatorações, melhorias estruturais e implementação de novas funcionalidades.',
    },
    {
      title: 'Cloud e DevOps',
      description:
        'Apoio a aplicações web com Docker, Jenkins, SonarQube e serviços AWS em atividades relacionadas a build, deploy, configuração e qualidade.',
    },
    {
      title: 'Compartilhamento de conhecimento',
      description:
        'Produção de documentação, troca de experiências e apoio técnico à equipe durante o desenvolvimento e a resolução de problemas.',
    },
  ]);
}
