import React from 'react'
import ChooseBlock from './UI/ChooseBlock'
import business from '../assets/icons/business.svg'
import startup from '../assets/icons/startup.svg'
import technology from '../assets/icons/technology.svg'
import economy from '../assets/icons/economy.svg'

const ChooseCategory = () => {
  return (
    <div className={'desktop:p-[80px] mobile:p-[20px]'}>
        <h1 className={'text-center mb-[48px] text-[36px] text-[#232536] font-bold'}>
        Choose A Catagory
        </h1>
        <div className={'flex desktop:flex-row mobile:flex-col gap-[32px] justify-between'}>
        <ChooseBlock logo={business} label={'Start Up'} content={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
        <ChooseBlock logo={startup} label={'Start Up'} content={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
        <ChooseBlock logo={economy} label={'Start Up'} content={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
        <ChooseBlock logo={technology} label={'Start Up'} content={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
        </div>
    </div>
  )
}

export default ChooseCategory