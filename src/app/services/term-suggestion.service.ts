import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermSuggestionService {

  constructor() { }

  getDifferenceScore(termDest: string, termSrc: string): number {
    const tDest: string = termDest.trim();
    const tSrc: string = termSrc.trim();

    if(tDest.toLowerCase().includes(tSrc.toLowerCase())) {
      return 0;
    } else {
      return (tDest.toLowerCase() + tSrc.toLowerCase()).split('').sort().join('').replace(/(.)\1+/g, "").length;
    }
  }

  getSuggestions(term: string, termsList: string[], nbSuggestions: number): any[] {
    const suggestions: any = [];

    termsList.forEach((termDesc) => {
      let theLenDiff: number = 0;
      theLenDiff = this.getDifferenceScore(termDesc, term)
      const obj = Object.assign({term :termDesc, diff: theLenDiff})
      suggestions.push(obj);
    })

    console.log('les suggestions : ', suggestions);
    return suggestions.sort((a: any, b: any) => {
      return(a.diff - b.diff);
    });
  }
}
