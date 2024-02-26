"use client"
import React from 'react'
import { GlassChildCardBox } from './GlassChildCardBox'
import Image from 'next/image'

type Props ={
    src: string;
}
export const SlideContent = (props:Props) => {
    const {src} = props;
  return (
    <GlassChildCardBox>
        <Image src={src} width={100} height={100} alt='icon'/>
    </GlassChildCardBox>
  )
}
