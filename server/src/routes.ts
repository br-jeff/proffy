import express from 'express'
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';


const routes = express.Router()


interface scheduleItem{
    week_day: number;
    from: string;
    to: string;
}

routes.post("/classes", async (req,res) => {

    const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule} = req.body
   
    const trx = await db.transaction()
    
    const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    }); 

    const user_id = insertedUsersIds[0]

   const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
        
    })

    const class_id = insertedClassesIds[0]

    const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return{
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to:convertHourToMinutes(scheduleItem.to),
        };
    })

    await trx('class_schedule').insert(classSchedule)
    return res.send("Ok"); 
} )


export default routes; 