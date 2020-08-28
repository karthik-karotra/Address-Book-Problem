"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBookService_1 = require("./Service/AddressBookService");
const process_1 = require("process");
var readlineSync = require('readline-sync');
let performCrudOperations = () => {
    while (true) {
        try {
            console.log('==============================================================');
            console.log('Welcome To Address Book');
            console.log('==============================================================');
            console.log("1: Add Contact");
            console.log("2: Display Contacts");
            console.log("3: Update Contact");
            console.log("4: Delete Contact");
            console.log("5: Sort Contacts");
            console.log("6: Exit");
            let choice = readlineSync.question("Enter your choice: ");
            switch (Number(choice)) {
                case 1:
                    new AddressBookService_1.AddressBookService().addContact(new AddressBookService_1.AddressBookService().userInputs());
                    break;
                case 2:
                    new AddressBookService_1.AddressBookService().displayContacts();
                    break;
                case 3:
                    new AddressBookService_1.AddressBookService().displayContacts();
                    new AddressBookService_1.AddressBookService().updateContact();
                    break;
                case 4:
                    new AddressBookService_1.AddressBookService().displayContacts();
                    new AddressBookService_1.AddressBookService().deleteContact();
                    break;
                case 5:
                    new AddressBookService_1.AddressBookService().sortContacts();
                    break;
                case 6:
                    process_1.exit();
                default:
                    console.log("\n Invalid choice!!!!!!!!!\n");
                    break;
            }
        }
        catch (err) {
            console.log("\n" + err.name + " : " + err.message);
        }
    }
};
performCrudOperations();
//# sourceMappingURL=AddressBookSimulator.js.map