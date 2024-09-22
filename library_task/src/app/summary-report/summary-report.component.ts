import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class summaryReportComponent implements OnInit {
  Reports: any[] = [];
  dataSource: any = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nodatafound: boolean = false;
  displayedColumns: string[] = ['isbn', 'bookName', 'author', 'rollNumber', 'name', 'issuedOn'];
  bookData = [
    { isbn: '978-3-16-148410-0', bookName: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rollNumber: '101', name: 'John Doe', issuedOn: '2023-09-10' },
    { isbn: '978-0-14-118776-1', bookName: '1984', author: 'George Orwell', rollNumber: '102', name: 'Jane Doe', issuedOn: '2023-08-15' },
    { isbn: '978-0-06-112008-4', bookName: 'To Kill a Mockingbird', author: 'Harper Lee', rollNumber: '103', name: 'Sam Smith', issuedOn: '2023-07-20' },
    { isbn: '978-1-4516-7321-6', bookName: 'The Catcher in the Rye', author: 'J.D. Salinger', rollNumber: '104', name: 'Lisa Brown', issuedOn: '2023-09-18' },
    { isbn: '978-0-7432-7356-5', bookName: 'The Da Vinci Code', author: 'Dan Brown', rollNumber: '105', name: 'Tom Black', issuedOn: '2023-09-25' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getReport();
  }
getReport(){
  this.dataSource = new MatTableDataSource(this.bookData);
if(this.bookData.length ==0){
  this.nodatafound = true;
}
}

}
