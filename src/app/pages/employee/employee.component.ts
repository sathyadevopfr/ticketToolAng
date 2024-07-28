import { Component, inject } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  mainService = inject(MainService);

  isNewView: boolean = false;

  empList: any[] = [];

  deptList: any[] = [];

  roleList: any[] = [];

  empObject: any = {
    employeeId: 0,
    employeeName: "",
    contactNo: "",
    emailId: "",
    deptId: 0,
    password: "",
    gender: "",
    role: "",
  };

  ngOnInit(): void {
    this.getAllEmpDetails();
    this.getAllDepartments();
    this.getAllRoles();
  }

  getAllEmpDetails() {
    this.mainService.getAllEmployeesDetails().subscribe((res: any) => {
      // debugger;
      this.empList = res.data;
    });
  }

  getAllDepartments() {
    this.mainService.getAllDepartments().subscribe((res: any) => {
      this.deptList= res.data;
    });
  }

  getAllRoles() {
    this.mainService.getAllRoles().subscribe((res: any) => {
      this.roleList = res.data;
    });
  }

  save() {
    // debugger;
    this.mainService
      .createEmployeeDetails(this.empObject)
      .subscribe((res: any) => {
        // debugger;
        if (res.result) {
          alert('Employee Details Created SuccessFully');
          this.getAllEmpDetails();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: any) {
    this.empObject = data;
  }

  update() {
    // debugger;
    this.mainService
      .updateEmployeeDetails(this.empObject)
      .subscribe((res: any) => {
        // debugger;
        if (res.result) {
          alert('Employee Details updated successfully');
          this.getAllEmpDetails();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you Sure?');

    if (isDelete) {
      this.mainService.deleteEmployeDetails(id).subscribe((res: any) => {
        // debugger;
        if (res.result) {
          alert('Employee Details Deleted SuccessFully');
          this.getAllEmpDetails();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
