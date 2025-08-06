import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoClose } from 'react-icons/io5';
import { motion } from "framer-motion"

const Card = ({ data }) => {
  const tagColor = data.tag?.tagColor === "blue" ? "bg-blue-600" : "bg-green-600";

  return (
    <motion.div className='relative h-72 w-60 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden flex flex-col justify-between'>

      {/* Top Content */}
      <div>
        <FaRegFileAlt size={24} />
        <p className='text-sm leading-tight mt-5 font-semibold'>
          {data.desc}
        </p>
      </div>

      {/* Footer */}
      <div className='absolute left-0 bottom-0 w-full'>
        {/* File size + icon row */}
        <div className='flex items-center justify-between px-8 py-3'>
          <h5 className='text-sm text-zinc-300'>{data.fileSize}</h5>
          <span className='w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-zinc-500 transition'>
            {data.close ? <IoClose size={14} /> : <HiDownload size={14} color="#fff" />}
          </span>
        </div>
        {data.tag?.isOpen && (
          <div className={`w-full py-3 ${tagColor} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card;
