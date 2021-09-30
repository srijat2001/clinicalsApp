import patientController from './patient.controller';
import clinicalController from './clinicals.controller';

module.exports = (router)=>{
    router.get('/patients',patientController.getAll);
    router.get('/patients/:id',patientController.getOne);
    router.post('/patients',patientController.create);
    router.put('/patients/:id',patientController.update);
    router.delete('/patients/:id',patientController.delete);

    router.get('/clinicals/:patientId',clinicalController.getOne);
    router.post('/clinicals',clinicalController.create);
    router.get('/clinicals',clinicalController.getAll);
    router.delete('/clinicals/:patientId',clinicalController.delete);
}