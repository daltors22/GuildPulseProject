import eventsService from "../services/eventsServices.js"; // ES Module

export const getAllEvents = async (req,res,)=>{
    try {
        const Events = await eventsService.getAllEvents();
        res.json(Events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const getEventsById = async (req,res,)=>{
    try {
        const events = await eventsService.getEventsById(req.params.id);
        if (!events) return res.status(404).json({ error: 'events non trouvé' });
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const createEvents = async (req,res,)=>{
    try {
        const events = await eventsService.createEvents(req.body);
        res.status(201).json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const updateEvents = async (req,res,)=>{
    try {
        await eventsService.updateEvents(req.params.id, req.body);
        res.json({ message: 'events mis à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const deleteEvents = async (req,res,)=>{
    try {
        const response = await eventsService.getEventsById(req.params.id);
        if(!response){
            console.error('error id', response);
            res.status(404).json({ error: 'erreur suppression' });
        }
        await eventsService.deleteEvents(req.params.id);
        res.json({ message: 'events supprimé' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
