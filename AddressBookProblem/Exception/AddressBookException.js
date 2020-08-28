"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookException = void 0;
class AddressBookException extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
exports.AddressBookException = AddressBookException;
//# sourceMappingURL=AddressBookException.js.map