import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getPosts } from '../../store/slices/postsSlice'
import { useAppSelector, useAppDispatch } from '../../provider/hooks'
import type { RootState } from '../../store'


import Table from '../sharedComponents/Table'
import Button from '../sharedComponents/Button'


let columns: any[] = [
    {
        ckey: 'id',
        cfield: 'ID'
    },
    {
        ckey: 'title',
        cfield: 'Title'
    },
    {
        ckey: 'content',
        cfield: 'Content'
    },
    {
        ckey: 'manage',
        cfield: 'Manage'
    }
]

const Posts = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const stateData = useAppSelector((state:RootState) => state.posts)
    
    const postsData = stateData.list;
    let rows: any[] = postsData.map((post:any, i:number)=>{
        return {
            ...post,
            manage: (
                <div className='flex'>
                    <div onClick={() => onClickEdit(post.id)}>Edit</div>
                    {/* <div onClick={() => dispatch( deletePostById(post.id) )}>Delete</div> */}
                </div>
            )
        }
    })

    useEffect(() => {
        dispatch( getPosts() );
    }, [dispatch])

    // handle click edit button
    const onClickEdit = (id:string) => {
        navigate(`/posts/${id}`)
    }

    // handle click addpost button
    const onClickAddPost = () => {
        navigate(`/posts/new`)
    }

    return (
        <div className='post-list-page mt-10'>
            <div className='page-header flex justify-between px-7 mb-7'>
                <div className='page-title text-3xl text-zinc-900 font-bold'>
                    Post List
                </div>
                <Button onClick={onClickAddPost}>Add A Post</Button>
            </div>
            <div className='page-body mt-10'>
                <Table columns={columns} rows={rows} />
            </div>
        </div>
    )
}

export default Posts
