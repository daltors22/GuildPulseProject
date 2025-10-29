
import pool from "../config/db.js";

export const getAllCharacters = async (req,res,next)=>{res.json({msg:"getAllCharacters ready"})};
export const getCharactersById = async (req,res,next)=>{res.json({msg:"getCharactersById ready"})};
export const createCharacters = async (req,res,next)=>{res.json({msg:"createCharacters ready"})};
export const updateCharacters = async (req,res,next)=>{res.json({msg:"updateCharacters ready"})};
export const deleteCharacters = async (req,res,next)=>{res.json({msg:"deleteCharacters ready"})};
