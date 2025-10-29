
import pool from "../config/db.js";

export const getAllRealms = async (req,res,next)=>{res.json({msg:"getAllRealms ready"})};
export const getRealmsById = async (req,res,next)=>{res.json({msg:"getRealmsById ready"})};
export const createRealms = async (req,res,next)=>{res.json({msg:"createRealms ready"})};
export const updateRealms = async (req,res,next)=>{res.json({msg:"updateRealms ready"})};
export const deleteRealms = async (req,res,next)=>{res.json({msg:"deleteRealms ready"})};
