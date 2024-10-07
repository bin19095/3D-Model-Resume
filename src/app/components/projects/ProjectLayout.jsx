import React from 'react'
import Link from 'next/link'
const ProjectLayout = ({name, description,date, demoLink}) => {
  return (
    <Link 
    href={demoLink}
    target={"_blank"}
    className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg
    bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm
    ' >
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'> {name}</h2>
            <p className='text-muted'>{description}</p>
        </div>
    <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'>
        <p className='text-foreground'>
            {new Date(date).toDateString()}
        </p>

    </div>
</Link>
  )
}

export default ProjectLayout