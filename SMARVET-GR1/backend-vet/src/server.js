//requerir modulos 
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerVeterinarios from './routers/veterinario_routes.js'

//Inicilaizaciones

const app=express() //inicializar las exportaciones  
dotenv.config() //poder cargar vairables de entorno
//configuraciones

app.set('port', process.env.PORT || 3000) //que cargue diferentes valores (datos sencibles) o no 
app.use(cors()) //esto es un //MiddLeware 


//MiddLeware 
app.use(express.json())  //agarra los datos del frontend y los transforma en json para guardar en el backend 



// Rutas
app.get('/',(req,res)=>{ 
    res.send("Server on")
})

//Rutas para veterinarios
app.use('/api',routerVeterinarios)



//Rutas que no existen
app.use((req,res)=>{res.status(404).send("Endpoint no encontrado")})




//Exportar la instancia de express
export default app