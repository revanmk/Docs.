import React from 'react'
import Card from './Card'

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      fileSize: "0.98mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "Project report and documentation.",
      fileSize: "2.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "upload", tagColor: "blue" }
    },
    {
      desc: "UX Design Guidelines Document.",
      fileSize: "850 KB",
      close: true,
      tag: { isOpen: true, tagTitle: "Expired Link", tagColor: "blue" }
    },
    {
      desc: "Weekly Meeting Notes Summary.",
      fileSize: "437 KB",
      close: true,
      tag: { isOpen: true, tagTitle: "View Notes", tagColor: "green" }
    }
  ];

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full overflow-auto p-5 flex flex-wrap gap-10'>
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}

export default Foreground
