import { Injectable } from '@angular/core';

@Injectable()
export class Product {
  public productId?: number;
  public name: string = '';
  public description?: string;
  public productSubcategoryId: number | undefined = 0;
  public productNumber?: string;
  public listPrice?: number;
  public size?: string;
  public weight?: number;
  public thumbNailPhoto?: string;
  public thumbnailPhotoFileName?: string;
  public largePhoto?: string;
  public largePhotoFileName?: string;
}
