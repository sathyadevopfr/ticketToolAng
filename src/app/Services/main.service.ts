import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/TicketsNew/';

  constructor(private http: HttpClient) {}

  // --> for logining into the page

  login(obj: any) {
    return this.http.post(this.apiUrl + 'Login', obj);
  }

  // --> to get all the departments get()

  getAllDepartments() {
    return this.http.get(`${this.apiUrl}GetDepartments`);
  }

  // --> to create a new department post()

  createDeparment(obj: any) {
    return this.http.post(`${this.apiUrl}CreateDepartment`, obj);
  }

  // --> to update any department put()

  updateDepartment(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateDepartment`, obj);
  }

  // --> to delete any department delete()

  deleteDeparmentById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteDepartment?id=${id}`);
  }

  // --> to get all the parent categories get()

  getParCategory() {
    return this.http.get(`${this.apiUrl}GetParentCategory`);
  }

  // --> to create a new parent category post()

  createParCategory(obj: any) {
    return this.http.post(`${this.apiUrl}CreateParentCategory`, obj);
  }

  // --> to update any parent category put()

  updateParCategory(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateParentCategory`, obj);
  }

  // --> to delete any parent categorydelete()

  deleteParCategoryById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteParentCategory?id=${id}`);
  }

  // --> to get all the child categories get()

  getAllchildCate() {
    return this.http.get(`${this.apiUrl}GetChildCategory`);
  }

  // --> to create a new parent category post()

  createChildCategory(obj: any) {
    return this.http.post(`${this.apiUrl}CreateChildCategory`, obj);
  }

  // --> to updaet a child categories

  updateChildCategories(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateChildCategory`, obj);
  }

  // --> to delete a child categories

  deleteChildCategory(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteChildCategory?id=${id}`);
  }

  // --> to get all the Roles

  getAllRoles() {
    return this.http.get(`${this.apiUrl}GetAllRoles`);
  }

  // --> to get all the employees get()

  getAllEmployeesDetails() {
    return this.http.get(`${this.apiUrl}GetEmployees`);
  }

  // --> to create a new parent category post()

  createEmployeeDetails(obj: any) {
    return this.http.post(`${this.apiUrl}CreateEmployee`, obj);
  }

  // --> to updaet a child categories

  updateEmployeeDetails(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateEmployee`, obj);
  }

  // --> to delete a child categories

  deleteEmployeDetails(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteEmployee?id=${id}`);
  }
  // --> to create a new ticket

  createTicket(obj: any) {
    return this.http.post(`${this.apiUrl}CreateNewTicket`, obj);
  }

  getTicketsCreatedByEmpId(id: number) {
    return this.http.get(`${this.apiUrl}GetTicketsCreatedByEmpId?empId=${id}`);
  }

  getTicketsAssignedToEmpId(id: number) {
    return this.http.get(`${this.apiUrl}GetAssignedTicketsByEmpId?empId=${id}`);
  }

  startTicket(empId: number) {
    return this.http.post(`${this.apiUrl}startTicket?id=${empId}`, {});
  }

  closeTicket(empId: number) {
    return this.http.post(`${this.apiUrl}closeTicket?id=${empId}`, {});
  }
}


