import { Component, inject, OnInit } from '@angular/core';
import { TermsListService } from './services/terms-list.service';
import { TermObj, TermSuggestionService } from './services/term-suggestion.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Application de Suggestions de terme';

  private termsListService = inject(TermsListService);
  private termSuggestionService = inject(TermSuggestionService);
  
  list: string[] = [];
  suggestions: TermObj[] = [];
  noSuggestion: string = 'Aucune suggestion.'

  fb = inject(FormBuilder);

  termForm!: FormGroup;

  ngOnInit(): void {
    this.list = this.termsListService.getListOne();

    this.termForm = this.fb.group({
      term: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(): void {
    if(!this.termForm.valid) return;
    console.log('Form submitted', this.termForm.value);
    this.suggestions = this.termSuggestionService.getSuggestions(this.termForm.get('term')?.value, this.list, 2);
  }

}
