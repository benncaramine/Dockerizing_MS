import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,

  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatPaginator} from "@angular/material/paginator";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCard, MatCardContent, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatHeaderCellDef, MatCellDef, MatCardHeader, MatCardTitle, MatDivider, NgForOf, NgIf, MatFormField, MatHeaderRow, MatHeaderRowDef, MatInput, MatLabel, MatPaginator, MatRow, MatRowDef, MatSlideToggle, MatSort, MatSortHeader, MatIcon, MatIconButton],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit, AfterViewInit{
  customers : any;
  public displayedColumns = ["id","firstName","lastName","email","action"]
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
      .subscribe({
        next : data => {
          this.customers = data;
        },
        error : err => {
          console.log(err);
        }
      })
  }
  ngAfterViewInit() {
    this.customers.paginator = this.paginator;
    this.customers.sort = this.sort;
  }

  filterCustomers(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.customers.filter = value;
  }

  editElement(element : Element) {
    console.log('Edit:', element);
  }

  deleteElement(element : Element) {
    console.log('Delete:', element);
  }

}

