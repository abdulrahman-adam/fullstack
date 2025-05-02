// const express = require('express');
// const router = express.Router();
// const contactController = require('../controllers/contactController');

// router.post('/add', contactController.addContact);
// router.get('/', contactController.getContacts);
// router.get('/:id', contactController.getContactById);
// router.delete('/delete/:id', contactController.deleteContact);

// module.exports = router;

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/add', contactController.createContact);
router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.delete('/delete/:id', contactController.deleteContact);


// router.delete('/delete/:id', contactController.deleteContact);


module.exports = router;
