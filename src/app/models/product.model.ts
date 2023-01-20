export class Product{

    constructor(
        public productId?: number,
        public name: string = "",
        public description?: string,
        public productSubcategoryId?: number,
        public productNumber?: string,
        public listPrice?: number,
        public size?: string,
        public weight?: number,
        public thumbNailPhoto?: string,
        public thumbnailPhotoFileName?: string,
        public largePhoto?: string,
        public largePhotoFileName?: string
    )
    {

    }
    
}