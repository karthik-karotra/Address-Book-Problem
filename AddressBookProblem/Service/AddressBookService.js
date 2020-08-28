"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookService = void 0;
var readlineSync = require('readline-sync');
const FileOperations_1 = require("../Utils/FileOperations");
const Person_1 = require("../Models/Person");
const AddressBookException_1 = require("../Exception/AddressBookException");
let addressBookList = new Array();
let regexStringPattern = new RegExp('^[A-Za-z]{3,}$');
let regexZipPattern = new RegExp('^[0-9]{3}[ ]?[0-9]{3}');
let regexPhoneNoPattern = new RegExp('^[0-9]{10}');
class AddressBookService {
    constructor() {
        this.userInputs = () => {
            let firstName = readlineSync.question("Enter first name : ");
            let lastName = readlineSync.question('Enter last name: ');
            let address = readlineSync.question('Enter address: ');
            let city = readlineSync.question('Enter city: ');
            let state = readlineSync.question('Enter state: ');
            let zip = readlineSync.question('Enter zip code: ');
            let phoneNumber = readlineSync.question('Enter phone number: ');
            if (regexStringPattern.test(firstName) && regexStringPattern.test(lastName) && regexStringPattern.test(city)
                && regexStringPattern.test(state) && regexZipPattern.test(String(zip)) && regexPhoneNoPattern.test(String(phoneNumber)))
                return new Person_1.Person(firstName, lastName, address, city, state, zip, phoneNumber);
            else
                throw new AddressBookException_1.AddressBookException('Enter Valid Details');
        };
        this.addContact = (person) => {
            addressBookList = FileOperations_1.fileOperations.readJsonFile();
            let isValid = true;
            for (let record = 0; record < addressBookList.length; record++) {
                if (addressBookList[record].phoneNo == person.phoneNo)
                    isValid = false;
            }
            if (isValid) {
                addressBookList.push(person);
                FileOperations_1.fileOperations.writeJsonFile(addressBookList);
            }
            else {
                throw new AddressBookException_1.AddressBookException('User with same Mobile number already present');
            }
        };
        this.displayContacts = () => {
            console.log("\n*********All Contacts************\n");
            FileOperations_1.fileOperations.displayRecords();
        };
        this.updateContact = () => {
            console.log("\n*********Update Person Contact************\n");
            let index = readlineSync.question("\nEnter persons index:");
            addressBookList = FileOperations_1.fileOperations.readJsonFile();
            let person = addressBookList[index - 1];
            console.log("1: Update existing address");
            console.log("2: Update existing city name");
            console.log("3: Update existing state name");
            console.log("4: Update existing zip code");
            console.log("5: Update existing phone number");
            let choice = readlineSync.question("\nEnter your choice: ");
            let data = readlineSync.question("\nEnter new value to update: ");
            let updatedPerson = new Person_1.Person(person.firstName, person.lastName, person.address, person.city, person.state, person.zip, person.phoneNo);
            switch (Number(choice)) {
                case 1:
                    regexStringPattern.test(data) ? updatedPerson.address == data : console.log("Invlid address...");
                    break;
                case 2:
                    regexStringPattern.test(data) ? updatedPerson.setCity(data) : console.log("Invlid city name...");
                    break;
                case 3:
                    regexStringPattern.test(data) ? updatedPerson.setState(data) : console.log("Invlid state name...");
                    break;
                case 4:
                    regexZipPattern.test(data) ? updatedPerson.setZip(Number(data)) : console.log("Invalid zip code...");
                    break;
                case 5:
                    regexPhoneNoPattern.test(data) ? updatedPerson.setNumber(Number(data)) : console.log("Invalid phone number...");
                    break;
                default:
                    console.log("Invalid choice....");
            }
            addressBookList[index - 1] = updatedPerson;
            FileOperations_1.fileOperations.writeJsonFile(addressBookList);
            console.log("Person updated successfully...");
        };
        this.deleteContact = () => {
            console.log("\n*********Delete Person Contact************\n");
            let index = readlineSync.question("\nEnter column record number to delete record:");
            addressBookList = FileOperations_1.fileOperations.readJsonFile();
            addressBookList.splice(index - 1, 1);
            FileOperations_1.fileOperations.writeJsonFile(addressBookList);
            console.log("Person details deleted successfully!!!");
        };
        this.sortContacts = () => {
            console.log("\n***********Sorting Contacts**************\n");
            console.log("1: Sort data by name");
            console.log("2: Sort data by city");
            console.log("3: Sort data by state");
            console.log("4: Sort data by zip");
            let choice = readlineSync.question("\nEnter your choice:");
            addressBookList = FileOperations_1.fileOperations.readJsonFile();
            switch (Number(choice)) {
                case 1:
                    addressBookList.sort((a, b) => a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName));
                    break;
                case 2:
                    addressBookList.sort((a, b) => a.city.localeCompare(b.city));
                    break;
                case 3:
                    addressBookList.sort((a, b) => a.state.localeCompare(b.state));
                    break;
                case 4:
                    addressBookList.sort((a, b) => String(a.zip).localeCompare(String(b.zip)));
                    break;
                default:
                    console.log("Invalid choice....");
            }
            FileOperations_1.fileOperations.writeJsonFile(addressBookList);
        };
    }
}
exports.AddressBookService = AddressBookService;
//# sourceMappingURL=AddressBookService.js.map