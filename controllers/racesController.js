
import pool from "../config/db.js";

export const getAllRaces = async (req,res,next)=>{res.json({msg:"getAllRaces ready"})};
export const getRacesById = async (req,res,next)=>{res.json({msg:"getRacesById ready"})};
export const createRaces = async (req,res,next)=>{res.json({msg:"createRaces ready"})};
export const updateRaces = async (req,res,next)=>{res.json({msg:"updateRaces ready"})};
export const deleteRaces = async (req,res,next)=>{res.json({msg:"deleteRaces ready"})};
