import { Component, inject, OnInit } from '@angular/core';
import { TermsListService } from './services/terms-list.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Application de Suggestions de terme';

  termsListService = inject(TermsListService);
  
  list: string[] = [];

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
  }

}
