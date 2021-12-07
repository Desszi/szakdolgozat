import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from 'app/model/bill';
import { BillService } from 'app/service/bill.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  bill$: Observable<Bill> = this.ar.params.pipe(
    switchMap( params => this.billService.get(params._id))
  )

  constructor(
    private billService: BillService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
