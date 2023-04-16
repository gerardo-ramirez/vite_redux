import api from "../api/github"
import {QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { Repository, Root2 } from "./types";
const fetchRepos =async  (ctx: QueryFunctionContext)=>{
const [_, githubUser]= ctx.queryKey
let {data}= await api.get<Repository>(`/users/${githubUser}/repos`);
return data;
};
export const useFetchRepository = (githubUser: string)=>{
   return useQuery(['repos',githubUser], fetchRepos)
}
