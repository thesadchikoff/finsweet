import { authors } from '@/data/authors'
import React from 'react'
import Author from './UI/Author'

const ListOfAuthors = () => {
  return (
    <div className='desktop:p-[80px] mobile:p-[20px]'>
        <h1 className='text-center text-[36px] text-[#232536] font-bold mb-[50px]'>List of Authors</h1>
        <div className='flex desktop:flex-row mobile:flex-col mobile:gap-[30px] desktop:gap-0 justify-between'>
            {
                authors.map(author => {
                    return(
                        <Author avatar={author.avatarUrl} fullName={author.fullName} action={author.actions}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ListOfAuthors