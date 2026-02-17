import { Component, inject, OnInit } from '@angular/core';
import { TermsListService } from './services/terms-list.service';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Application de Suggestions de terme';

  termsListService = inject(TermsListService);
  list: string[] = [];

  ngOnInit(): void {
    this.list = this.termsListService.getListOne();
  }

}
