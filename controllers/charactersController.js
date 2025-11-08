import charactersService from "../services/charactersService.js"; // ES Module

export const getAllCharacters = async (req,res,)=>{
    try {
        const characters = await charactersService.getAllCharacters();
        res.json(characters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const getCharactersById = async (req,res,)=>{
    try {
        const character = await charactersService.getCharactersById(req.params.id);
        if (!character) return res.status(404).json({ error: 'character non trouvé' });
        res.json(character);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const createCharacters = async (req,res,)=>{
    try {
        const character = await charactersService.createCharacters(req.body);
        res.status(201).json(character);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const updateCharacters = async (req,res,)=>{
    try {
        await charactersService.updateCharacters(req.params.id, req.body);
        res.json({ message: 'character mis à jour' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
export const deleteCharacters = async (req,res,)=>{
    try {
        const response = await charactersService.getCharactersById(req.params.id);
        if(!response){
            console.error('error id', response);
            res.status(404).json({ error: 'erreur suppression' });
        }
        await charactersService.deleteCharacters(req.params.id);
        res.json({ message: 'character supprimée' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
