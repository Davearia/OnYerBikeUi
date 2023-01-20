export class User{

    constructor(
        public userId?: number,
        public title?: string,
        public firstName?: string,
        public lastName?: string,
        public emailAddress?: string,
        public phoneNumber?: string,
        public addressLine?: string,
        public city?: string,
        public postalCode?: string,
        public passwordHash?: string,
        public passwordSalt?: string
    )
    {

    }
    
}