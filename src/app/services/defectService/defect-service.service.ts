import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefectService {
  
  private defects: any = [];
  //private defectUpdated = new Subject<any[]>();

  constructor() {}

  addDefect(title: string, description: string) {
    const defect = { title: title, content: description };
    this.defects.push(defect);
    console.log('this.defects----', this.defects);
    //this.defectUpdated.next([...this.defects]);
  }

  getDefects() {
    return this.defects;
  }
}
