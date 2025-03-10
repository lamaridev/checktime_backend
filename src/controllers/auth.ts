import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { ComparePassword } from "../utils/password-utils";
import { GenerateAccessToken } from "../utils/jwt-utils";

export const Login = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {

        const {email,password} = req.body;

        const user = await User.findOne({where:{
            email:email
        }});

        if(!user) {
            return res.status(404).json({
                success:false,
                data:'utilisateur nexiste pas'
            })
        }

        const userpassword = user.password;

        const match = await ComparePassword(password,userpassword);

        if(!match) { 
            return res.status(404).json({
                success:false,
                data:'mot de passe incorrect'
            })
        }

        if(user.enabled === false){
            return res.status(400).json({
                success:false,
                data:'User disabled'
            })
        }


        const tokenData = {
            id_user: user.id_user,
            nomcomplet: user.nomcomplet,
            role: user.role,
            email: user.email,
            id_company:user.id_company,
            nomcompany:user.nomcompany
        };
        
        const accessToken = GenerateAccessToken(tokenData);

        res.setHeader('accessToken',accessToken);

        res.status(200).json({
            success:true,
            data:{
                accessToken:accessToken,
                data:tokenData
            }
        })


    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const ResetPassword = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const ForgotPassword = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}