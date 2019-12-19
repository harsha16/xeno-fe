import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { RestApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  ngOnInit() {
  }

  displayedColumns: string[] = ['empNo', 'epfNo', 'empName', 'dept', 'nOtHrs', 'nOt', 'dOtHrs',
    'dOt', 'basicSal', 'npDays', 'npAmt', 'salForEpf', 'totAllow', 'grossPay', 'totDeduc', 'paye',
    'netPay', 'epfEmployer', 'epfEmployee', 'etf', 'stmpDuty', 'brAllow', 'varAllow', 'varDeduc',
    'scheduleCode', 'cmpName'];

  dataSource: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private response: any;
  cmpNo: number;
  selectedEpfEmp: string;
  placeHolderEpfEmp: string;
  valueEpfEmp: string;
  param: string = "";

  payrollCalForm = new FormGroup({});

  constructor(private api: RestApiService) { }

  // calculatePayroll() {
  //   this.req = {
  //     code: 1,
  //     company: this.cmpNo,
  //     companyId: "1"
  //   };
  //   this.api.calculatePayroll(this.req)
  //     .subscribe(res => {
  //       this.response = res.payrollList;
  //       this.dataSource = new MatTableDataSource<any>(this.response);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       console.log(this.response);
  //     });
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchType() {
    if (this.selectedEpfEmp == "epfNo") {
      this.placeHolderEpfEmp = "EPF No";
    } else {
      this.placeHolderEpfEmp = "EMP No";
    }
  }

  calculate() {
    if (this.selectedEpfEmp == "epfNo") {
      this.param = "?cmpNo=" + this.cmpNo + "&epfNo=" + this.valueEpfEmp;
    } else if (this.selectedEpfEmp == "empNo") {
      this.param = "?cmpNo=" + this.cmpNo + "&empNo=" + this.valueEpfEmp;
    } else {
      this.param = "?cmpNo=" + this.cmpNo;
    }
    this.api.calculate(this.param)
      .subscribe(res => {
        this.response = res.payrollList;
        this.dataSource = new MatTableDataSource<any>(this.response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.response);
      });
  }

}
