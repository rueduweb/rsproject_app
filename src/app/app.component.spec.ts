import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TermsListService } from './services/terms-list.service';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let termsListServiceSpy: jasmine.SpyObj<TermsListService>; 

  beforeEach(async () => {
    termsListServiceSpy = jasmine.createSpyObj('TermsListService',['getListOne']);
    await TestBed.configureTestingModule({
      imports: [AppComponent, ReactiveFormsModule],
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

  it('should check that the term form is present', () => {
    const elements = fixture.debugElement;
    const formElement = elements.query(By.css('form'));
    expect(formElement).toBeTruthy();
  })

  it('should check if term is in required state', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const termElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#term');
      termElement.value = '';
      termElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(btnElement.disabled).toBeTruthy();
        expect(component.termForm.get('term')?.value).toEqual('');
        expect(component.termForm.valid).toBeFalsy();
      })
    })
  })

});
