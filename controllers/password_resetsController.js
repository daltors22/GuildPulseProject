
import pool from "../config/db.js";

export const getAllPassword_resets = async (req,res,next)=>{res.json({msg:"getAllPassword_resets ready"})};
export const getPassword_resetsById = async (req,res,next)=>{res.json({msg:"getPassword_resetsById ready"})};
export const createPassword_resets = async (req,res,next)=>{res.json({msg:"createPassword_resets ready"})};
export const updatePassword_resets = async (req,res,next)=>{res.json({msg:"updatePassword_resets ready"})};
export const deletePassword_resets = async (req,res,next)=>{res.json({msg:"deletePassword_resets ready"})};
