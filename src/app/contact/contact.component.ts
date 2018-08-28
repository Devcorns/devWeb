import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name:'';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute)
    this.name = this.activatedRoute.snapshot.params.name;
  }

}
