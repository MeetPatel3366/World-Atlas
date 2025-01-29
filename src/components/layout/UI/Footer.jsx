import React from 'react'
import footerData from '../../../api/footerApi.json'
import { MdPlace } from 'react-icons/md'
import { TbMailPlus } from 'react-icons/tb'
import { IoCallSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const footerIcon={
    MdPlace:<MdPlace/>,
    TbMailPlus:<TbMailPlus/>,
    IoCallSharp:<IoCallSharp/>
  }
  return (
    <footer className=' bg-gray-700 bottom-0  py-2'>
      <div className=' grid grid-cols-3 justify-items-center'>
        {
          footerData.map((curData,index)=>{
            const {icon,title,details}=curData;
            return(
              <div key={index} className='flex items-center gap-3'>
                <div>{footerIcon[icon]}</div>
                <div>
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='bg-gray-600'>
        <div>
          <div className='grid grid-cols-2 justify-items-center mt-3 p-3'>
            <div>
              <p>Copyright &copy; 2025, All Right Reserved
              <NavLink to='/'>World Atlas</NavLink></p>
            </div>

            <div>
              <ul className='flex gap-5'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/country'>Country</NavLink>
                </li>
                <li>
                  <NavLink to='/conatct'>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
