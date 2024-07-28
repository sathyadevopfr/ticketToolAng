import { Component, OnInit, inject } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css',
})
export class TicketListComponent implements OnInit {
  mode: string = 'My Tickets';

  mainService = inject(MainService);

  ticketsList: any[] = [];

  loggedUserEmployeeId: any;

  ngOnInit() {
    const loggedUserData = localStorage.getItem('ticektUser');
    if (loggedUserData != null) {
      const userData = JSON.parse(loggedUserData);
      this.loggedUserEmployeeId = userData.employeeId;
    }
    this.changeMode(this.mode);
  }

  changeMode(tab: string) {
    this.mode = tab;
    if (this.mode == 'My Tickets') {
      this.mainService
        .getTicketsCreatedByEmpId(this.loggedUserEmployeeId)
        .subscribe((result: any) => {
          this.ticketsList = result.data;
          console.log(result.data);
        });
    } else {
      this.mainService
        .getTicketsAssignedToEmpId(this.loggedUserEmployeeId)
        .subscribe((result: any): void => {
          this.ticketsList = result.data;
          console.log(result.data);
        });
    }
  }
  changeStatus(state:string,ticketNo:number) {
    if (state == 'start') {
      this.mainService.startTicket(ticketNo).subscribe((
        result: any) => {
        if (result.result) {
          alert('Ticket Status is Changed');
        }
        else {
           alert(result.message);
        }
        })
    }
    else {
      this.mainService.closeTicket(ticketNo).subscribe(
        (result: any) => {
         if (result.result) {
           alert('Ticket Closed');
         } else {
           alert(result.message);
         } 
        }
      )
    }
  }
}
