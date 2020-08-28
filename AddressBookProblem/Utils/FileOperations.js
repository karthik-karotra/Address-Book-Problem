"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperations = void 0;
const jsonFileName = './AddressBook.json';
const fs = require("fs");
let personDetails = new Array();
class FileOperations {
    constructor() {
        this.readJsonFile = () => {
            try {
                let data = fs.readFileSync(jsonFileName);
                personDetails = JSON.parse(data);
                return personDetails;
            }
            catch (err) {
                console.log(err);
            }
        };
        this.writeJsonFile = (userList) => {
            try {
                let jsonString = JSON.stringify(userList);
                fs.writeFileSync(jsonFileName, jsonString);
                console.log();
                console.log('Record Saved');
            }
            catch (err) {
                console.log(err);
            }
        };
        this.displayRecords = () => {
            console.log("\n*********Display Person Contact************\n");
            this.readJsonFile();
            personDetails.map((i, index) => {
                console.log((index + 1) + " " + JSON.stringify(i));
            });
        };
    }
}
exports.fileOperations = new FileOperations();
//# sourceMappingURL=FileOperations.js.map