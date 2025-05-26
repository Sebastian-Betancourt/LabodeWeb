import sendMailToRegister from "../../../backend-vet/src/config/nodemailer.js"
import Veterinario from "../../../backend-vet/src/models/Veterinario.js"

const registro = async(req,res)=>{
    const {email,password}=req.body  //desestructuracion de email y password de  req body 
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, todos los campos son obligatorios"})

        const verificarEmailBDD = await Veterinario.findOne({email})
        if (verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, este email ya se encuentra registrado"})

        const nuevoVeterinario = new Veterinario(req.body)

        nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
        const token =  nuevoVeterinario.crearToken()
        
        
        await sendMailToRegister(email,token)

        await nuevoVeterinario.save()
        res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})


    }


export{
    registro
}