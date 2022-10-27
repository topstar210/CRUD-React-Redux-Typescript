import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../provider/hooks'
import type { RootState } from '../../store'
import { getPostByPid, savePostByPid } from '../../store/slices/postsSlice'

import Button from "../sharedComponents/Button";

const EditPost = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const stateData = useAppSelector((state:RootState) => state.posts)
    let { pId } = useParams();
    const selectedPost = stateData.selected_post;

    let [ postData, setPostData ] = useState({
        id: "",
        title: "",
        content: ""
    } as {
        id?:string | undefined,
        title?:string | undefined,
        content?:string | undefined
    });

    // when init, get data
    useEffect(()=>{
        if(pId === "new"){
            setPostData({
                id: "new",
                title: "",
                content: ""
            });
        } else {
            dispatch( getPostByPid(pId));
        }
    },[pId, dispatch])

    // after get data, set state
    useEffect(()=>{
        if(pId !== "new") setPostData(selectedPost);
    },[pId, selectedPost]);

    // save data
    const onClickSavePost = () => {
        dispatch( savePostByPid(postData) ).then(()=>{
            navigate("/posts");
        })
    }

    return (
        <div className="post-add-page mt-10">
            <div className="page-header flex justify-between px-7 mb-7">
                <div className="page-title text-3xl text-zinc-900 font-bold">Edit Post</div>
                <div className="actions">
                    <Button className="mr-5" onClick={ () => navigate("/posts") }>Back</Button>
                    <Button onClick={ onClickSavePost }>Save</Button>
                </div>
            </div>
            <div className="page-body mt-10">
                <div className="flex mb-5">
                    <div className="w-4/12 text-end mr-32">Title</div>
                    <div className="w-8/12">
                        <input 
                            type = "text" 
                            value = { postData.title }
                            onChange = { (e:any) => setPostData({ ...postData, title:e.target.value }) }
                            className="w-96 border px-1 border-black" />
                    </div>
                </div>
                <div className="flex mb-5">
                    <div className="w-4/12 text-end mr-32">Content</div>
                    <div className="w-8/12">
                        <textarea 
                            value = { postData.content }
                            onChange = { (e:any) => setPostData({ ...postData, content:e.target.value }) }
                            className = "w-8/12 border border-black p-1 h-36"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost; 