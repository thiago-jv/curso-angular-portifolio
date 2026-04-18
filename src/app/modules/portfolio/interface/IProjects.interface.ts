export interface IProjects {
  category: 'formacao' | 'certificado' | 'outros';
  src: string;
  alt: string;
  title: string;
  with: string;
  height: string;
  description: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}
