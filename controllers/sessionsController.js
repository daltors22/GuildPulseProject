
import pool from "../config/db.js";

export const getAllSessions = async (req,res,next)=>{res.json({msg:"getAllSessions ready"})};
export const getSessionsById = async (req,res,next)=>{res.json({msg:"getSessionsById ready"})};
export const createSessions = async (req,res,next)=>{res.json({msg:"createSessions ready"})};
export const updateSessions = async (req,res,next)=>{res.json({msg:"updateSessions ready"})};
export const deleteSessions = async (req,res,next)=>{res.json({msg:"deleteSessions ready"})};
