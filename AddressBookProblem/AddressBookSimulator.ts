import { AddressBookService } from "./Service/AddressBookService";
import { exit } from "process";
var readlineSync = require('readline-sync');

let performCrudOperations = () => {
    while (true) {
        try {
            console.log('==============================================================');
            console.log('Welcome To Address Book');
            console.log('==============================================================');
            console.log("1: Add Contact");
            console.log("2: Display Contacts");
            console.log("3: Update Contact")
            console.log("4: Exit");
            let choice: number = readlineSync.question("Enter your choice: ");
            switch (Number(choice)) {
                case 1:
                    new AddressBookService().addContact(new AddressBookService().userInputs());
                    break;
                case 2:
                    new AddressBookService().displayContacts();
                    break;
                case 3:
                    new AddressBookService().displayContacts();
                    new AddressBookService().updateContact();
                    break;
                case 4:
                    exit();
                default:
                    console.log("\n Invalid choice!!!!!!!!!\n");
                    break;
            }
        }
        catch (err) {
            console.log("\n" + err.name + " : " + err.message);
        }
    }
}
performCrudOperations();