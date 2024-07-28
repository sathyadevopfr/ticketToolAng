import { Component, OnInit, Pipe, inject } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { pipe } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  mainService = inject(MainService);

  deptList: any[] = [];

  createDeptObj: any = {
    deptId: 0,
    deptName: '',
    createdDate: '',
  };

  ngOnInit(): void {
    this.getDeparments();
  }

  getDeparments() {
    this.mainService.getAllDepartments().subscribe((res: any) => {
      debugger;
      this.deptList = res.data;
    });
  }

  saveDepartments() {
    debugger;
    this.mainService
      .createDeparment(this.createDeptObj)
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Deparment Created SuccessFully');
          this.getDeparments();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: any) {
    this.createDeptObj = data;
  }

  updateDepartment() {
    debugger;
    this.mainService.updateDepartment(this.createDeptObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('updated successfully');
        this.getDeparments();
      }
      else {
        alert(res.message)
      }
    })
  }

  onDelete(id:number) {

    const isDelete = confirm('Are you Sure?')

    if (isDelete) {
      this.mainService.deleteDeparmentById(id).subscribe((res:any) => {
        debugger;
        if (res.result) {
          alert('Deleted SuccessFully');
          this.getDeparments();
        }
        else {
          alert(res.message);
        }
       })
     }



  }
}
