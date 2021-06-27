import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-map',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css']
})
export class BuyTicketComponent implements OnInit{
   allMaps = [];
   selectedMap :string;
   seats = [];
   row = new FormControl(null);
   col = new FormControl(null);
   full = false;

  constructor(private http: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.getMaps().subscribe((r:{data}) => {
      this.allMaps = r.data.map_ids;
      this.selectedMap = this.allMaps[Math.floor(Math.random()*this.allMaps.length)];
      this.getSelectedMapSeats().subscribe((r:{data}) => {
        this.seats = r.data;
        console.log(this.seats)
      })
    }
 );
  }
  //api
  baseUrl = "https://ticket-challange.herokuapp.com"
  getMaps() {
    return this.http.get(this.baseUrl + "/map");
  }
  getSelectedMapSeats(){
    return this.http.get(this.baseUrl + `/map/${this.selectedMap}`)
  }
  postSelectedSeat() {
    return this.http.post(this.baseUrl + `/map/${this.selectedMap}/ticket`,{x:this.row.value,y:this.col.value})
  }

  check() {
      this.postSelectedSeat().subscribe(r => console.log(r))
      this.router.navigate(['buy'])

  }

  checkIsFull() {
    setInterval(() => this.full = this.seats[this.row.value][this.col.value] != 0 , 1000)
  }
}
