import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    console.log('EmployeeListComponent initialized'); // Debug log
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeeList().subscribe({
      next: (data: Employee[]) => {
        console.log('Employees fetched:', data); // Debug log
        this.employees = data;
      },
      error: (error: any) => {
        console.error('There was an error fetching employees!', error);
      },
      complete: () => {
        console.log('Employee fetching completed'); // Debug log
      }
    });
  }
}
