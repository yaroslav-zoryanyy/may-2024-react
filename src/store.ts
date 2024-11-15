
import {IUser} from "./models/IUsers";
import {create} from "zustand/react";
import {IPosts} from "./models/IPosts";
import {IComments} from "./models/IComments";

type StoreType ={
  userSlice:{
   allUsers:IUser[],
   loadUsers: (users:IUser[]) => void
  }
 postSlice:{
  allPosts:IPosts[],
  loadPosts: (posts:IPosts[]) => void
 }
 commentSlice:{
  allComments:IComments[],
  loadComments: (comments:IComments[]) => void
 }
}

export const useStore = create<StoreType>()((set) => {
 return{
   userSlice:{
    allUsers:[],
    loadUsers: (users) => {
     return set(state => ({
      ...state,
      userSlice:{
       ...state.userSlice,
       allUsers: users,
      }
     }))
    }
   },
     postSlice:{
         allPosts:[],
         loadPosts: (posts) => {
             return set(state => ({
                 ...state,
                 postSlice:{
                     ...state.postSlice,
                     allPosts: posts,
                 }
             }))
         }
     },
     commentSlice:{
         allComments:[],
         loadComments: (comments) => {
             return set(state => ({
                 ...state,
                 commentSlice:{
                     ...state.commentSlice,
                     allComments: comments,
                 }
             }))
         }
     }
 }
})