import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.listing = {
      id: '',
      name: '',
      description: '',
      price: 0
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id)!;
  }
}
