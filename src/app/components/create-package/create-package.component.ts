import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Package } from '../../interfaces/package';
import { PackageService } from '../../service/package.service';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  createPackage: FormGroup;
  submitted =  false;
  loading = false;

  constructor(private fb: FormBuilder,
    private ps: PackageService,
    private router: Router,
    private toastr: ToastrService
    ) { 
    this.createPackage = this.fb.group({
      name:['',Validators.required],
      address:['', Validators.required],
      postalCode:['',Validators.required],
      weigth:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  addPackage(){
    this.submitted = true;

    if(this.createPackage.invalid){
      return;
    }
    const empleado: any = {
      clientName: this.createPackage.value.name,
      addressStreet: this.createPackage.value.address,
      addressPostalCode: this.createPackage.value.postalCode,
      packageWeight: this.createPackage.value.weigth
    }
    this.loading = true;
    this.ps.createPackages(empleado).subscribe((resp:any) =>{
      this.toastr.success('The package created', 'Succesfull register')
      this.loading = false;
      this.router.navigate(['/list-packages'])
    });
    

  }
}


