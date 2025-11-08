import eventTypesService from "../services/eventTypesService.js"; // ES Module

export const getAllEventTypes = async (req,res,)=>{
    try {
        const EventTypes = await eventTypesService.getAllEventTypes();
        res.json(EventTypes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const getEventTypesById = async (req,res,)=>{
    try {
        const event_types = await eventTypesService.getEventTypesById(req.params.id);
        if (!event_types) return res.status(404).json({ error: 'event_types non trouvé' });
        res.json(event_types);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const createEventTypes = async (req,res,)=>{
    try {
        const event_types = await eventTypesService.createEventTypes(req.body);
        res.status(201).json(event_types);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const updateEventTypes = async (req,res,)=>{
    try {
        await eventTypesService.updateEventTypes(req.params.id, req.body);
        res.json({ message: 'event_types mis à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const deleteEventTypes = async (req,res,)=>{
    try {
        const response = await eventTypesService.getEventTypesById(req.params.id);
        if(!response){
            console.error('error id', response);
            res.status(404).json({ error: 'erreur suppression' });
        }
        await eventTypesService.deleteEventTypes(req.params.id);
        res.json({ message: 'event_types supprimé' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
