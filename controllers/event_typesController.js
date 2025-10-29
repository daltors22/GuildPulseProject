
import pool from "../config/db.js";

export const getAllEvent_types = async (req,res,next)=>{res.json({msg:"getAllEvent_types ready"})};
export const getEvent_typesById = async (req,res,next)=>{res.json({msg:"getEvent_typesById ready"})};
export const createEvent_types = async (req,res,next)=>{res.json({msg:"createEvent_types ready"})};
export const updateEvent_types = async (req,res,next)=>{res.json({msg:"updateEvent_types ready"})};
export const deleteEvent_types = async (req,res,next)=>{res.json({msg:"deleteEvent_types ready"})};
