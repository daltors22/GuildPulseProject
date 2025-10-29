
import pool from "../config/db.js";

export const getAllEvents = async (req,res,next)=>{res.json({msg:"getAllEvents ready"})};
export const getEventsById = async (req,res,next)=>{res.json({msg:"getEventsById ready"})};
export const createEvents = async (req,res,next)=>{res.json({msg:"createEvents ready"})};
export const updateEvents = async (req,res,next)=>{res.json({msg:"updateEvents ready"})};
export const deleteEvents = async (req,res,next)=>{res.json({msg:"deleteEvents ready"})};
