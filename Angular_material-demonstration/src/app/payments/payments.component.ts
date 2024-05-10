import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  standalone: true,
    imports: [CommonModule, HttpClientModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCell, MatCellDef, MatColumnDef, MatDivider, MatFormField, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatIcon, MatIconButton, MatInput, MatLabel, MatPaginator, MatRow, MatRowDef, MatSort, MatSortHeader, MatTable],
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit, AfterViewInit{
  accounts: any;
  public displayedColumns = ["ide","firstName","lastName","email","test"]
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/ACCOUNT-SERVICE/accounts")
      .subscribe({
        next : data => {
          this.accounts = data;
        },
        error : err => {
          console.log(err);
        }
      })
  }
  ngAfterViewInit() {
    this.accounts.paginator = this.paginator;
    this.accounts.sort = this.sort;
  }

  filterCustomers(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.accounts.filter = value;
  }

}
