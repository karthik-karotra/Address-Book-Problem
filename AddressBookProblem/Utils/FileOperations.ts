import { Person } from "../Models/Person";

const jsonFileName = './AddressBook.json';
const fs = require("fs");
let personDetails = new Array<Person>();

class FileOperations {
    readJsonFile = (): Array<Person> => {
        try {
            let data = fs.readFileSync(jsonFileName);
            personDetails = JSON.parse(data);
            return personDetails;
        } catch (err) {
            console.log(err);
        }
    }

    writeJsonFile = (userList: Array<Person>): void => {
        try {
            let jsonString = JSON.stringify(userList);
            fs.writeFileSync(jsonFileName, jsonString);
            console.log();
            console.log('Record Saved');
        } catch (err) {
            console.log(err);
        }
    }
}
export let fileOperations = new FileOperations();