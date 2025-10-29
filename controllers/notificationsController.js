
import pool from "../config/db.js";

export const getAllNotifications = async (req,res,next)=>{res.json({msg:"getAllNotifications ready"})};
export const getNotificationsById = async (req,res,next)=>{res.json({msg:"getNotificationsById ready"})};
export const createNotifications = async (req,res,next)=>{res.json({msg:"createNotifications ready"})};
export const updateNotifications = async (req,res,next)=>{res.json({msg:"updateNotifications ready"})};
export const deleteNotifications = async (req,res,next)=>{res.json({msg:"deleteNotifications ready"})};
