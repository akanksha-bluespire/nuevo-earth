
import { register } from "../service/contactService";
const express = require('express');
const contactRouter = express.Router();




contactRouter.post("/createContact", register);


export {contactRouter};