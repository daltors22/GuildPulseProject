
import pool from "../config/db.js";

export const getAllLogin_attempts = async (req,res,next)=>{res.json({msg:"getAllLogin_attempts ready"})};
export const getLogin_attemptsById = async (req,res,next)=>{res.json({msg:"getLogin_attemptsById ready"})};
export const createLogin_attempts = async (req,res,next)=>{res.json({msg:"createLogin_attempts ready"})};
export const updateLogin_attempts = async (req,res,next)=>{res.json({msg:"updateLogin_attempts ready"})};
export const deleteLogin_attempts = async (req,res,next)=>{res.json({msg:"deleteLogin_attempts ready"})};
