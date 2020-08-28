export class Person {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNo: number;

    constructor(firstName: string, lastName: string, address: string, city: string, state: string,
        zip: number, phoneNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setCity(city: string) {
        this.city = city;
    }

    setState(state: string) {
        this.state = state;
    }

    setZip(zip: number) {
        this.zip = zip;
    }

    setNumber(phoneNo: number) {
        this.phoneNo = phoneNo;
    }
}