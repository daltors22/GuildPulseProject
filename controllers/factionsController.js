
import pool from "../config/db.js";

export const getAllFactions = async (req,res,next)=>{res.json({msg:"getAllFactions ready"})};
export const getFactionsById = async (req,res,next)=>{res.json({msg:"getFactionsById ready"})};
export const createFactions = async (req,res,next)=>{res.json({msg:"createFactions ready"})};
export const updateFactions = async (req,res,next)=>{res.json({msg:"updateFactions ready"})};
export const deleteFactions = async (req,res,next)=>{res.json({msg:"deleteFactions ready"})};
