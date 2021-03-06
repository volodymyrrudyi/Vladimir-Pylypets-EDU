const { Router } = require('express');
const { check } = require('express-validator');
const auth = require('../mddleware/auth.middleware');

const router = Router();
const eventController = require('../controllers/event.controller');

router.post(
	'/logs',
	[
		check('user', 'Please input userID').exists(),
		check('eventDescription', 'Log must contain eventDescription').exists().isString(),
	],
	auth,
	eventController.createLog,
);

router.get('/logs', eventController.showLogs);

router.get('/logs/:userId', auth, eventController.showLogsByUserId);

router.post('/logs/date', eventController.showLogsByDate);

router.put(
	'/logs/:logid',
	[
		check('userid').exists(),
		check('eventDesctiption').exists(),
		check('date').exists(),
	],
	auth,
	eventController.updateLog,
);

module.exports = router;
