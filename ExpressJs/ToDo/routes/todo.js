const express = require("express")

const router = express.Router();

const {getTodo,addTodo,editTodo,deleteTodo} = require('../controllers/todocontroller')


router.get('/',getTodo);
router.post('/add',addTodo);
router.get('/delete/:id',deleteTodo);
router.get('/edit/:id',editTodo);

module.exports = router;