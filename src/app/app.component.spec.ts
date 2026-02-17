import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TermsListService } from './services/terms-list.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let termsListServiceSpy: jasmine.SpyObj<TermsListService>; 

  beforeEach(async () => {
    termsListServiceSpy = jasmine.createSpyObj('TermsListService',['getListOne']);
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: TermsListService, useValue: termsListServiceSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'rsproject_app' title`, () => {
    expect(component.title).toEqual('Application de Suggestions de terme');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Application de Suggestions de terme');
  });

  it('should have property list', () => {
    expect(component.list).toEqual([]);
  })

  it('should load list of string on ngOnInit', () => {
    const mockList: string[] = ['gros', 'gras', 'graisse', 'agressif', 'agrafe'];
    termsListServiceSpy.getListOne.and.returnValue(mockList);
    fixture.detectChanges();
    expect(component.list).toEqual(mockList);
  })

});
