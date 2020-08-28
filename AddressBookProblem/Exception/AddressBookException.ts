export class AddressBookException extends Error {

    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }  
}