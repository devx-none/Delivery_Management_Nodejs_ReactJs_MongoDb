import { Router } from "express"
import {isAdmin} from "../middlewares"
import manager from "../controllers/ManagerController"

const router = Router();

router.get('/',(req, res, next) => {
    res.status(200).json({ 
        message : 'Handling Get requests to /admin'
    })
})

//create a new manager by admin
router.post('/create',isAdmin,manager.create)

//login manager
router.post('/Auth',manager.login)


//List Managers
router.get('/all',manager.getAllManagers)


export { router as manager }