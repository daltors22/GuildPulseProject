
import pool from "../config/db.js";

export const getAllGuilds = async (req,res,next)=>{res.json({msg:"getAllGuilds ready"})};
export const getGuildsById = async (req,res,next)=>{res.json({msg:"getGuildsById ready"})};
export const createGuilds = async (req,res,next)=>{res.json({msg:"createGuilds ready"})};
export const updateGuilds = async (req,res,next)=>{res.json({msg:"updateGuilds ready"})};
export const deleteGuilds = async (req,res,next)=>{res.json({msg:"deleteGuilds ready"})};
