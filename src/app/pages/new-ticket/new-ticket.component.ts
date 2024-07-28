import { Component, inject,OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit {
  mainService = inject(MainService);

  deptList: any[] = [];

  parentCategoryList: any[] = [];

  childCategoryList: any[] = [];

  filterCategorylist: any[] = [];

  selectPCategory: string = '';

  newTicketObject: any = {
    employeeId: 0,
    severity: '',
    childCategoryId: 0,
    deptId: 0,
    requestDetails: '',
  };

  ngOnInit(): void {

    const loggedUserData = localStorage.getItem('ticektUser');
    
    if (loggedUserData != null) {
       let userData = JSON.parse(loggedUserData);
      this.newTicketObject.employeeId = userData.employeeId;
    }
    this.getDept();
    this.getChildCategory();
    this.getParentCategory();
  }

  getDept() {
    this.mainService.getAllDepartments().subscribe((result: any) => {
      this.deptList = result.data;
    });
  }

  getParentCategory() {
    this.mainService.getParCategory().subscribe((result: any) => {
      this.parentCategoryList = result.data;
    });
  }

  getChildCategory() {
    this.mainService.getAllchildCate().subscribe((result: any) => {
      this.childCategoryList = result.data;
    });
  }

  onCategoryChange() {
    this.filterCategorylist = this.childCategoryList.filter((x) => {
      x.parentCategoryList == this.selectPCategory;
    });
  }
  createTicket(){
    this.mainService.createTicket(this.newTicketObject).subscribe((result:any) => {
      if (result) {
        alert('Ticekt Created SuccessFully');
          }
      else {
        alert(result.message);
          }
    })
  }
}
