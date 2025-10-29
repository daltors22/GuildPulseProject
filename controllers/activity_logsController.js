
import pool from "../config/db.js";

export const getAllActivity_logs = async (req,res,next)=>{res.json({msg:"getAllActivity_logs ready"})};
export const getActivity_logsById = async (req,res,next)=>{res.json({msg:"getActivity_logsById ready"})};
export const createActivity_logs = async (req,res,next)=>{res.json({msg:"createActivity_logs ready"})};
export const updateActivity_logs = async (req,res,next)=>{res.json({msg:"updateActivity_logs ready"})};
export const deleteActivity_logs = async (req,res,next)=>{res.json({msg:"deleteActivity_logs ready"})};
