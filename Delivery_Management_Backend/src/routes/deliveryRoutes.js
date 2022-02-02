import { Router } from 'express';
import { isDeliveryManager } from '../middlewares';
import delivery from '../controllers/deliveryController.js'

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling Get requests to /manager',
  });
});

//Create a new delivery 
router.post('/create', isDeliveryManager,delivery.create );

//Get all deliveries
router.get('/all', delivery.getDeliveries );

//states deliveries
router.get('/stat', delivery.StatDeliveries );

//send deliveries dispo to drivers
router.get('/validate/:id', delivery.validate);

//reserved delivery by driver 
router.get('/reserved/:delivery/driver/:driver', delivery.reserved);

export { router as delivery };
