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

    updateContact = (): void => {
        console.log("\n*********Update Contact************\n");
        let index: number = readlineSync.question("\nEnter index of record you want to update: ");
        addressBookList = fileOperations.readJsonFile();
        let person: Person = addressBookList[index - 1];
        console.log("1: Update existing address");
        console.log("2: Update existing city name");
        console.log("3: Update existing state name");
        console.log("4: Update existing zip code");
        console.log("5: Update existing phone number");
        let choice: string = readlineSync.question("\nEnter your choice: ");
        let data: string = readlineSync.question("\nEnter new value to update: ");
        let updatedPerson: Person = new Person(person.firstName, person.lastName, person.address,
            person.city, person.state, person.zip, person.phoneNo);
        switch (Number(choice)) {
            case 1:
                regexStringPattern.test(data) ? updatedPerson.setAddress(data) : console.log("Invlid address format!!!");
                break;
            case 2:
                regexStringPattern.test(data) ? updatedPerson.setCity(data) : console.log("Invlid city name format!!!");
                break;
            case 3:
                regexStringPattern.test(data) ? updatedPerson.setState(data) : console.log("Invlid state name format!!!");
                break;
            case 4:
                regexZipPattern.test(data) ? updatedPerson.setZip(Number(data)) : console.log("Invalid zip code format!!!");
                break;
            case 5:
                regexPhoneNoPattern.test(data) ? updatedPerson.setNumber(Number(data)) : console.log("Invalid phone number format!!!");
                break;
            default:
                console.log("Invalid choice!!!");
        }
        addressBookList[index - 1] = updatedPerson;
        fileOperations.writeJsonFile(addressBookList);
        console.log("Person details updated successfully!!!");
    }

    deleteContact = (): void => {
        console.log("\n*********Delete Contact************\n");
        let index: number = readlineSync.question("\nEnter column record number to delete record: ");
        addressBookList = fileOperations.readJsonFile();
        addressBookList.splice(index - 1, 1);
        fileOperations.writeJsonFile(addressBookList);
        console.log("Person details deleted successfully!!!");
    }
}