import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService
      .getListingsForUser()
      //subscribing to observer. The last listings is the one we get back from the server
      .subscribe((listings) => (this.listings = listings));
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
  }
}
