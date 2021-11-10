import { Component, OnInit } from '@angular/core';
import { DefectService } from 'src/app/services/defectService/defect-service.service';

@Component({
  selector: 'app-create-defect',
  templateUrl: './create-defect.component.html',
  styleUrls: ['./create-defect.component.scss']
})
export class CreateDefectComponent implements OnInit {

  constructor(private defectService: DefectService) { }

  ngOnInit(): void {}

  onAddDefect(postDefect: any){
  
    console.log('Forms value',postDefect.value)  //form all data
    console.log('Forms value',postDefect.value.description)  //only particular data
    this.defectService.addDefect(postDefect.value.title,postDefect.value.description)
    postDefect.resetForm();
  }

}
