import { NextResponse } from "next/server"
import {connectToDatabase} from "../../../utils/db"
import TodoModel from "./schema"

export const GET=async(req:Request,res:Response)=>
{
    await connectToDatabase()
    try
    {
       const todoData=await TodoModel.find()
       return NextResponse.json({data:todoData},{status:200}) 
    }
    catch(error)
    {
        return NextResponse.json({message:error},{status:500})
    }
}