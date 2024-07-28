import { Component, inject } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css',
})
export class ChildCategoryComponent {
  mainService = inject(MainService);

  gridList: any[] = [];

  parentCategoryList: any[] = [];

  newObj: any = {
    childCategoryId: 0,
  categoryName: "",
  parentCategoryId: 0
}

  ngOnInit(): void {
    this.gridData();
    this.getParCategory();
  }

  gridData() {
    this.mainService.getAllchildCate().subscribe((res: any) => {
      debugger;
      this.gridList = res.data;
    });
  }

  getParCategory() {
    this.mainService.getParCategory().subscribe((res: any) => {
      this.parentCategoryList = res.data;
    });
  }

  save() {
    debugger;
    this.mainService.createChildCategory(this.newObj).subscribe((res: any) => {
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
    this.mainService.updateChildCategories(this.newObj).subscribe((res: any) => {
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
      this.mainService.deleteChildCategory(id).subscribe((res: any) => {
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
