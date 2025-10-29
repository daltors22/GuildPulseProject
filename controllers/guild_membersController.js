
import pool from "../config/db.js";

export const getAllGuild_members = async (req,res,next)=>{res.json({msg:"getAllGuild_members ready"})};
export const getGuild_membersById = async (req,res,next)=>{res.json({msg:"getGuild_membersById ready"})};
export const createGuild_members = async (req,res,next)=>{res.json({msg:"createGuild_members ready"})};
export const updateGuild_members = async (req,res,next)=>{res.json({msg:"updateGuild_members ready"})};
export const deleteGuild_members = async (req,res,next)=>{res.json({msg:"deleteGuild_members ready"})};
