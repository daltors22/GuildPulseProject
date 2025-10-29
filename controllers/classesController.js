
import pool from "../config/db.js";

export const getAllClasses = async (req,res,next)=>{res.json({msg:"getAllClasses ready"})};
export const getClassesById = async (req,res,next)=>{res.json({msg:"getClassesById ready"})};
export const createClasses = async (req,res,next)=>{res.json({msg:"createClasses ready"})};
export const updateClasses = async (req,res,next)=>{res.json({msg:"updateClasses ready"})};
export const deleteClasses = async (req,res,next)=>{res.json({msg:"deleteClasses ready"})};
