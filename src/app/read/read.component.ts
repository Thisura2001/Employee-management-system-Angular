import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent {
  employees: Employee [] =[
  //  { "id":1,
  //   "firstName":"Thisura",
  //   "lastName":"Liyanage",
  //   "email":"thisura@gmail.com"}
  ];
  constructor(private employeeService: EmployeeService){}
  

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }
}
