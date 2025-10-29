import guildService from "../services/guildService.js"; // ES Module

export const getAllGuilds = async (req,res,)=>{
    try {
        const guilds = await guildService.getAllGuilds();
        res.json(guilds);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const getGuildsById = async (req,res,)=>{
    try {
        const guild = await guildService.getGuildsById(req.params.id);
        if (!guild) return res.status(404).json({ error: 'Guilde non trouvé' });
        res.json(guild);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const createGuilds = async (req,res,)=>{
    try {
        const guild = await guildService.createGuilds(req.body);
        res.status(201).json(guild);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const updateGuilds = async (req,res,)=>{
    try {
        await guildService.updateGuilds(req.params.id, req.body);
        res.json({ message: 'Guilde mis à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const deleteGuilds = async (req,res,)=>{
    try {
        const response = await guildService.getGuildsById(req.params.id);
        if(!response){
            console.error('error id', response);
            res.status(404).json({ error: 'erreur suppression' });
        }
        await guildService.deleteGuilds(req.params.id);
        res.json({ message: 'Guilde supprimée' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
