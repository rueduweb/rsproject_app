import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsListService {

  constructor() { }

  private listOne: string[] = ['gros', 'gras', 'graisse', 'agressif', 'agrafe'];

  getListOne(): string[] {
    return this.listOne;
  }

}
