import { Component, OnInit } from '@angular/core';
import { DefectService } from 'src/app/services/defectService/defect-service.service';

@Component({
  selector: 'app-list-defect',
  templateUrl: './list-defect.component.html',
  styleUrls: ['./list-defect.component.scss']
})
export class ListDefectComponent implements OnInit {

  defects: any = [];
  element: any;

  constructor(private defectService: DefectService) { }

  ngOnInit(): void {
    let defectList= this.defectService.getDefects()
    console.log("defectList----",defectList)
    this.defects=defectList;
  }

   deleteDefect(title: any){
      this.defects=this.defects.filter((element: { title: any; })=>
      element.title !== title)
    }
}