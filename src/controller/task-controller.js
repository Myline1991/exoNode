const Task = require('../models/task-model');

/** Page d'accueil */
exports.update_get = async (req, res) => {

    try {
        // Mise à jour du status de la tâche
        await Task.findByIdAndUpdate(req.params.id, {status: true}).exec();

        //Redirect sur la page d'accueil
        res.redirect('/');
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}
exports.delete_get = async (req, res) => {

    try {
        // Mise à jour du status de la tâche
        await Task.findByIdAndUpdate(req.params.id).exec();

        //Redirect sur la page d'accueil
        res.redirect('/all-tasks-done.html');

    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}