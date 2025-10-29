
import pool from "../config/db.js";

export const getAllApi_keys = async (req,res,next)=>{res.json({msg:"getAllApi_keys ready"})};
export const getApi_keysById = async (req,res,next)=>{res.json({msg:"getApi_keysById ready"})};
export const createApi_keys = async (req,res,next)=>{res.json({msg:"createApi_keys ready"})};
export const updateApi_keys = async (req,res,next)=>{res.json({msg:"updateApi_keys ready"})};
export const deleteApi_keys = async (req,res,next)=>{res.json({msg:"deleteApi_keys ready"})};
