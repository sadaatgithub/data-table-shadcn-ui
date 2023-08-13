'use client'
import React, { useRef,useEffect } from 'react'


const IndeterminateCheckbox = ({indeterminate,className='',...rest}) => {
    
    
    const ref= useRef(null)
useEffect(() => {
    if(typeof indeterminate === 'boolean'){
        ref.current.indeterminate = !rest.checked && indeterminate
    }

 
}, [ref,indeterminate])



  return (
    <input 
        type="checkbox"
        ref={ref}
        className={className || 'cursor-pointer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'}
        {...rest}
    />
  )
}

export default IndeterminateCheckbox