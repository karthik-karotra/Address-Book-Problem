var readlineSync = require('readline-sync');
import { fileOperations } from "../Utils/FileOperations";
import { Person } from "../Models/Person";
import { AddressBookException } from "../Exception/AddressBookException";

let addressBookList = new Array<Person>();
let regexStringPattern: RegExp = new RegExp('^[A-Za-z]{3,}$');
let regexZipPattern: RegExp = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexPhoneNoPattern: RegExp = new RegExp('^[0-9]{10}');

export class AddressBookService {
    userInputs = (): Person => {
            let firstName: string = readlineSync.question("Enter first name : ");
            let lastName: string = readlineSync.question('Enter last name : ');
            let address: string = readlineSync.question('Enter address : ');
            let city: string = readlineSync.question('Enter city : ');
            let state: string = readlineSync.question('Enter state : ');
            let zip: number = readlineSync.question('Enter zip code : ');
            let phoneNumber: number = readlineSync.question('Enter phone number : ');
            if (regexStringPattern.test(firstName) && regexStringPattern.test(lastName) && regexStringPattern.test(city)
                && regexStringPattern.test(state) && regexZipPattern.test(String(zip)) && regexPhoneNoPattern.test(String(phoneNumber)))
                return new Person(firstName, lastName, address, city, state, zip, phoneNumber);
            else
                throw new AddressBookException('Enter Valid Details');
    }

    addContact = (person: Person): void => {
        addressBookList = fileOperations.readJsonFile();
        let isValid: boolean = true;
        for (let record = 0; record < addressBookList.length; record++) {
            if (addressBookList[record].phoneNo == person.phoneNo)
                isValid = false;
        }
        if (isValid) {
            addressBookList.push(person);
            fileOperations.writeJsonFile(addressBookList);
        } else {
            throw new AddressBookException('User with same Mobile number already present');
        }
    }

    displayContacts = (): void => {
        fileOperations.displayRecords();
    }
}