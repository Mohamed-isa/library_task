import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nodatafound: boolean = false;

  // Columns to be displayed in the table
  displayedColumns: string[] = ['bookName', 'author', 'publication', 'qty', 'price', 'branch', 'details'];

  // Static data for books
  bookData = [
    { bookName: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publication: 'Scribner', qty: 3, price: 500, branch: 'New York', details: 'A novel set in the Jazz Age' },
    { bookName: '1984', author: 'George Orwell', publication: 'Penguin Books', qty: 5, price: 300, branch: 'London', details: 'A dystopian social science fiction' },
    { bookName: 'To Kill a Mockingbird', author: 'Harper Lee', publication: 'J.B. Lippincott & Co.', qty: 2, price: 400, branch: 'Alabama', details: 'A novel about racial injustice' },
    { bookName: 'The Catcher in the Rye', author: 'J.D. Salinger', publication: 'Little, Brown and Company', qty: 4, price: 450, branch: 'California', details: 'A story about teenage angst' },
    { bookName: 'The Da Vinci Code', author: 'Dan Brown', publication: 'Doubleday', qty: 6, price: 600, branch: 'Paris', details: 'A mystery thriller' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getReport();
  }

  getReport() {
    this.dataSource.data = this.bookData; // Assign data to the dataSource
    if (this.bookData.length === 0) {
      this.nodatafound = true;
    }
  }

  exportToExcel(): void {
    const data = this.bookData.map((report, index) => ({
      'S.No': index + 1,
      'Book Name': report.bookName,
      'Author': report.author,
      'Publication': report.publication,
      'Qty': report.qty,
      'Price': report.price,
      'Branch': report.branch,
      'Details': report.details
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'ViewBook');
    XLSX.writeFile(workbook, 'ViewBook.xlsx');
  }
}
