import {Router} from 'express'

import { registro } from '../../../frontend-vet/src/controllers/veterinario_controllers.js';
const router = Router()

router.post('/registro',registro)

export default router