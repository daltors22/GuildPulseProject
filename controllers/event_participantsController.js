
import pool from "../config/db.js";

export const getAllEvent_participants = async (req,res,next)=>{res.json({msg:"getAllEvent_participants ready"})};
export const getEvent_participantsById = async (req,res,next)=>{res.json({msg:"getEvent_participantsById ready"})};
export const createEvent_participants = async (req,res,next)=>{res.json({msg:"createEvent_participants ready"})};
export const updateEvent_participants = async (req,res,next)=>{res.json({msg:"updateEvent_participants ready"})};
export const deleteEvent_participants = async (req,res,next)=>{res.json({msg:"deleteEvent_participants ready"})};
