import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { NoProfile } from '../assets'
import { UpdateProfile } from '../redux/userSlice'
import { LiaEditSolid } from 'react-icons/lia'

const ProfileCard = ({user}) => {
    const { user: data, edit } = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    
  return (
    <div>
        <div className='w-full bg-primary flex flex-col items-center shadow-sm 
        rounded-xl px-6 py-4'>
            <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
              <Link to={"/profile/"+user?._id}
              className='flex gap-2'>
              <img src={user?.profileUrl ?? NoProfile} alt={user?.email}
              className='w-14 h-14 object-cover rounded-full'
              />

              <div className='flex flex-col justify-center'>
                <p className='text-lg font-medium text-ascent-1'>
                  {user?.firstName} {user?.lastName}
                </p>
                <span className='text-ascent-2'>
                    {user?.profession ?? "No Profession"}
                </span>
              </div>
              </Link>

              <div className=''>
              {user?._id === data?._id ? ( <LiaEditSolid
                size={22}
                className='text-blue cursor-pointer'
                onClick={()=> dispatch(UpdateProfile(true))}
                />):("")}
              </div>
            </div>   
        </div>
    </div>
  )
}

export default ProfileCard