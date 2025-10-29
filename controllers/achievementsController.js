
import pool from "../config/db.js";

export const getAllAchievements = async (req,res,next)=>{res.json({msg:"getAllAchievements ready"})};
export const getAchievementsById = async (req,res,next)=>{res.json({msg:"getAchievementsById ready"})};
export const createAchievements = async (req,res,next)=>{res.json({msg:"createAchievements ready"})};
export const updateAchievements = async (req,res,next)=>{res.json({msg:"updateAchievements ready"})};
export const deleteAchievements = async (req,res,next)=>{res.json({msg:"deleteAchievements ready"})};
