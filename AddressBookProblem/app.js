"use strict";
//import { AddressBookService } from "./Service/AddressBookService";
//import { exit } from "process";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBookService_1 = require("./Service/AddressBookService");
//var readlineSync = require('readline-sync');
//let main = () => {
// while (true) {
/*    console.log('==============================================================');
    console.log('Welcome To Address Book');
    console.log('==============================================================');
    console.log("1: Add Person Contact");
    console.log("2: exit");
    let choice = readlineSync.question("Enter your choice: ");
    switch (choice) {
        case "1":
            new AddressBookService().addPerson(new AddressBookService().userInputs());
            //addressBookService.addPerson(addressBookService.userInputs());
            break;
        case "2":
            exit();
        default:
            console.log("\nInvalid choice....\n");
            break;
    }*/
// }
//}
var readlineSync = require('readline-sync');
console.log('Hello');
console.log('1. Add');
let choice = readlineSync.question('Enter choice');
switch (choice) {
    case "1":
        new AddressBookService_1.AddressBookService().addPerson(new AddressBookService_1.AddressBookService().userInputs());
        break;
    default:
        console.log('Invalid');
}
//main();
//console.log('Welcome To Address Book');
//# sourceMappingURL=app.js.map