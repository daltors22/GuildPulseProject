import eventParticipantsService from "../services/eventParticipantsService.js"; // ES Module

export const getAllEventParticipants = async (req,res,)=>{
    try {
        const eventParticipants = await eventParticipantsService.getAllEventParticipants();
        res.json(eventParticipants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const getEventParticipantsById = async (req,res,)=>{
    try {
        const eventParticipant = await eventParticipantsService.getEventParticipantsById(req.params.id);
        if (!eventParticipant) return res.status(404).json({ error: 'eventParticipants non trouvé' });
        res.json(eventParticipant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const createEventParticipants = async (req,res,)=>{
    try {
        const eventParticipant = await eventParticipantsService.createEventParticipants(req.body);
        res.status(201).json(eventParticipant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const updateEventParticipants = async (req,res,)=>{
    try {
        await eventParticipantsService.updateEventParticipants(req.params.id, req.body);
        res.json({ message: 'eventParticipants mis à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const deleteEventParticipants = async (req,res,)=>{
    try {
        const response = await eventParticipantsService.getEventParticipantsById(req.params.id);
        if(!response){
            console.error('error id', response);
            res.status(404).json({ error: 'erreur suppression' });
        }
        await eventParticipantsService.deleteEventParticipants(req.params.id);
        res.json({ message: 'eventParticipants supprimée' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
