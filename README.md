# Contact Book REST API

This repository contains the source code for a REST API built using Node.js that simulates a contact book. It includes functionality to consume, encrypt, and store contact data, as well as fetch, decrypt, update, and delete data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Encryption](#encryption)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/bollo-omar/contact-book.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up the SQLite database (see [Database](#database)).

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Setup Prisma Migration

   ```bash
    npx prisma migrate dev --name init
   ```

3. The API will be accessible at `http://localhost:3000` or `http://localhost:8000`.

4. Create ```.env``` file at the root of the project, copy contents of ```.env.example``` and paste the on the new file

## Endpoints

- `GET /api/v1/contacts`: Fetch all contacts.
- `GET /api/v1/contacts/:id`: Fetch a specific contact by ID.
- `POST /api/v1/contacts`: Add a new contact.
- `PUT /api/v1/contacts/:id`: Update an existing contact.
- `DELETE /api/v1/contacts/:id`: Delete a contact by ID.

For detailed information on how to use each endpoint, refer to the API documentation.
[Postman](https://documenter.getpostman.com/view/26352711/2s9YR6bEcM)

## Encryption

All contact data is encrypted using [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) encryption before being stored in the database. When fetching data, it is decrypted before being returned.

## Database

The contact information is stored in an SQLite database. You can find the database file at `./prisma/contact.db`. The database is set up automatically when you start the server.

---

Thank you for using the Contact Book REST API! If you have any questions or encounter any issues, please don't hesitate to open an [issue](https://github.com/bollo-omar/contact-book/issues).



[![Node.js](https://img.shields.io/badge/Node.js-v18.14.2-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18.2-lightgrey.svg)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-v3.36.0-blue.svg)](https://www.sqlite.org/)
[![Prisma 2](https://img.shields.io/badge/Prisma-4.16.2-blueviolet.svg)](https://www.prisma.io/)
