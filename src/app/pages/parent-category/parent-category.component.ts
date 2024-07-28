import { Component, inject } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css',
})
export class ParentCategoryComponent {
  mainService = inject(MainService);

  gridList: any[] = [];

  deptList: any[] = [];
  newObj: any = {
    categoryName: '',
    deptId: 0,
    categoryId: 0,
  };

  ngOnInit(): void {
    this.gridData();
    this.getAllDepartments();
  }

  gridData() {
    this.mainService.getParCategory().subscribe((res: any) => {
      debugger;
      this.gridList = res.data;
    });
  }

  getAllDepartments() {
    this.mainService.getAllDepartments().subscribe((res: any) => {
      this.deptList = res.data;
    });
  }

  save() {
    debugger;
    this.mainService.createParCategory(this.newObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Parent Category Created SuccessFully');
        this.gridData();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(data: any) {
    this.newObj = data;
  }

  update() {
    debugger;
    this.mainService.updateParCategory(this.newObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('updated successfully');
        this.gridData();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you Sure?');

    if (isDelete) {
      this.mainService.updateParCategory(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Deleted SuccessFully');
          this.gridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}

