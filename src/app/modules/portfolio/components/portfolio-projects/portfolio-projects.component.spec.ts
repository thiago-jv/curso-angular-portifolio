import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the published Lucas Cell website', () => {
    const link: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('.portfolio-projects__link');

    expect(link?.textContent).toContain('Acessar site');
    expect(link?.href).toBe('https://www.lucascellmanaus.com.br/');
    expect(link?.target).toBe('_blank');
    expect(link?.rel).toContain('noopener');
  });
});
