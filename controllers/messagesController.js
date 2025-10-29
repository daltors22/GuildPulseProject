
import pool from "../config/db.js";

export const getAllMessages = async (req,res,next)=>{res.json({msg:"getAllMessages ready"})};
export const getMessagesById = async (req,res,next)=>{res.json({msg:"getMessagesById ready"})};
export const createMessages = async (req,res,next)=>{res.json({msg:"createMessages ready"})};
export const updateMessages = async (req,res,next)=>{res.json({msg:"updateMessages ready"})};
export const deleteMessages = async (req,res,next)=>{res.json({msg:"deleteMessages ready"})};
