import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  coins: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(private http: HttpClient) {
    this.columns = [
      { prop: 'name' },
      { prop: 'price' },
      { prop: 'bank' },
      { prop: 'time' }];

    this.http.get<Data>('../../assets/data/movies.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.coins;
      });
   }

  open(row: any): void {
    console.log(row);
  }
  ngOnInit() {
  }

}
