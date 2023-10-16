import 'dotenv/config';
import App from "./app.js";
import {PORT} from "./shared/contants.js";
import Contacts from "./features/contacts/Contacts.js";

const app = new App(PORT, [
        new Contacts()
    ]
)
app.listen()