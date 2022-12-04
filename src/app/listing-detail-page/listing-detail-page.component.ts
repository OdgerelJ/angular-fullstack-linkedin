import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {
    this.listing = {
      id: '',
      name: '',
      description: '',
      price: 0,
      views: 0
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.listingsService.getListingById(id).subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });
      this.listingsService.addViewToListing(id)
      .subscribe(()=> console.log('Views updated')
      )
    }
  }
}
