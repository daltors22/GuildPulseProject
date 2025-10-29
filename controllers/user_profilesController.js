
import pool from "../config/db.js";

export const getAllUser_profiles = async (req,res,next)=>{res.json({msg:"getAllUser_profiles ready"})};
export const getUser_profilesById = async (req,res,next)=>{res.json({msg:"getUser_profilesById ready"})};
export const createUser_profiles = async (req,res,next)=>{res.json({msg:"createUser_profiles ready"})};
export const updateUser_profiles = async (req,res,next)=>{res.json({msg:"updateUser_profiles ready"})};
export const deleteUser_profiles = async (req,res,next)=>{res.json({msg:"deleteUser_profiles ready"})};
