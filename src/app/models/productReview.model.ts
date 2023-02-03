import { Injectable } from "@angular/core";

@Injectable()
export class ProductReview{
      
    public productReviewId?: number;
    public productId?: number;
    public reviewerName?: string;
    public reviewDate?: Date;
    public emailAddress?: string;
    public rating?: number;
    public comments?: string;
      
}