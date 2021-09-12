import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-list-packages',
  templateUrl: './list-packages.component.html',
  styleUrls: ['./list-packages.component.css']
})
export class ListPackagesComponent implements OnInit {

  public data: any[] = [];
  constructor(private ps: PackageService) { }

  ngOnInit(): void {
    this.getPackages();
  }
  getPackages(){
    this.ps.getPackages().subscribe((resp:any) => {
      this.data = resp;
      console.log(this.data);
    })
  }

  deletePackage(id: string){
    this.ps.deletePackage(id).subscribe((resp:any) => {
      this.data = resp;
      console.log(this.data);
    })
  }

  updatePackage(id: string){
    this.ps.updatePackage(id).subscribe((resp:any) => {
      this.data = resp;
      console.log(this.data);
    })
  }

}
