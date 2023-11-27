class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    isEqual(otherContact) {
        return this.name === otherContact.name;
    }
}

class ContactBook {
    constructor(size = 10) {
        this.contacts = [];
        this.size = size;
    }

    addContact(contact) {
        if (this.contacts.length < this.size) {
            this.contacts.push(contact);
            console.log(`Contact ${contact.name} added to the contact book.`);
        } else {
            console.log("Contact book is full. Cannot add more contacts.");
        }
    }

    contactExists(contact) {
        return this.contacts.some(existingContact => existingContact.isEqual(contact));
    }

    listContacts() {
        console.log("Contact List:");
        this.contacts.forEach(contact => console.log(`- ${contact.name}: ${contact.phone}`));
    }

    searchContact(name) {
        const contact = this.contacts.find(contact => contact.name === name);
        if (contact) {
            console.log(`Contact found: ${contact.name} - Phone: ${contact.phone}`);
        } else {
            console.log(`Contact not found with name: ${name}`);
        }
    }

    removeContact(contact) {
        const index = this.contacts.findIndex(existingContact => existingContact.isEqual(contact));
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${contact.name} removed from the contact book.`);
        } else {
            console.log(`Contact ${contact.name} not found in the contact book.`);
        }
    }

    isFull() {
        return this.contacts.length === this.size;
    }

    availableSlots() {
        return this.size - this.contacts.length;
    }
}

function displayMenu() {
    console.log("\nContact Book Menu:");
    console.log("1. Add Contact");
    console.log("2. Check if Contact Exists");
    console.log("3. List Contacts");
    console.log("4. Search Contact by Name");
    console.log("5. Remove Contact");
    console.log("6. Check if Contact Book is Full");
    console.log("7. Display Available Slots");
    console.log("8. Exit");
}

const contactBook = new ContactBook();

while (true) {
    displayMenu();
    const choice = prompt("Select an option (1-8):");

    switch (choice) {
        case "1":
            const name = prompt("Enter contact name:");
            const phone = prompt("Enter contact phone:");
            const newContact = new Contact(name, phone);
            contactBook.addContact(newContact);
            break;
        case "2":
            const checkName = prompt("Enter contact name to check:");
            const checkContact = new Contact(checkName, "");
            console.log(contactBook.contactExists(checkContact) ? "Contact exists." : "Contact does not exist.");
            break;
        case "3":
            contactBook.listContacts();
            break;
        case "4":
            const searchName = prompt("Enter contact name to search:");
            contactBook.searchContact(searchName);
            break;
        case "5":
            const removeName = prompt("Enter contact name to remove:");
            const removeContact = new Contact(removeName, "");
            contactBook.removeContact(removeContact);
            break;
        case "6":
            console.log(contactBook.isFull() ? "Contact book is full." : "Contact book is not full.");
            break;
        case "7":
            console.log(`Available slots: ${contactBook.availableSlots()}`);
            break;
        case "8":
            console.log("Exiting Contact Book. Goodbye!");
            process.exit();
        default:
            console.log("Invalid choice. Please select a number from 1 to 8.");
    }
}
