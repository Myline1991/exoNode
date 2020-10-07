const express = require('express');
const router = express.Router();
const defaultController = require('../controller/default-controller');
const taskController = require('../controller/task-controller');

/** Définiion de nos routes **/
router.get('/', defaultController.index);
router.get('/all-tasks-done.html', defaultController.tasks_done);

router.get('/tasks/:id/done', taskController.update_get);
router.get('/tasks/:id/delete', taskController.delete_get);

router.get('/add-task.html', defaultController.task_get);
router.post('/add-task.html', defaultController.task_post);

router.get('/', ((req, res) => {
    res.render('index');
}));

/** Exportation des routes */
module.exports = router;