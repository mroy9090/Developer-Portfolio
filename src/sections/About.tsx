'use client';
import React, { useRef } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import publicationImage from '@/assets/images/network_demonastration.jpg';
import Image from 'next/image';
import { title } from 'process';
import HTMlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import PHPIcon from '@/assets/icons/php.svg';
import LaravelIcon from '@/assets/icons/laravel.svg';
import PythonIcon from '@/assets/icons/python.svg';
import GithubIcon from '@/assets/icons/github.svg';
import LinuxIcon from '@/assets/icons/linux.svg';
import MySqlIcon from '@/assets/icons/mysql.svg';
import NodeIcon from '@/assets/icons/node.svg';
import MongoIcon from '@/assets/icons/mongo.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import { TechIcon } from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/9.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';


 
const toolboxItem=[
  {
    title : 'PHP',
    iconType : PHPIcon,
  },
  {
    title : 'Laravel',
    iconType : LaravelIcon,
  },
  {
    title : 'javaScript',
    iconType : JavascriptIcon,
  },
  {
    title : 'HTML5',
    iconType : HTMlIcon,
  },
  {
    title : 'CSS3', 
    iconType : CssIcon,
  }, 
  {
    title : 'React',
    iconType : ReactIcon,
  },
  {
    title : 'Github',
    iconType : GithubIcon,
  },
  {
    title : 'Python',
    iconType : PythonIcon,
  },
  {
    title : 'Linux',
    iconType : LinuxIcon,
  },
  {
    title : 'MySql',
    iconType : MySqlIcon,
  },
  {
    title : 'NodeJs',
    iconType : NodeIcon,
  },
  {
    title : 'MongoDB',
    iconType : MongoIcon,
  },
];

const hobbies=[
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "5%"
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: "50%",
    top: "5%"
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: "35%",
    top: "40%"
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%"
  },
  
  {
    title: 'Music',
    emoji: '🎹',
    left: "70%",
    top: "40%"
  },
  {
    title: 'Fitness',
    emoji: '🤸‍♀️',
    left: "5%",
    top: "65%"
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%"
  },
];

export const AboutSection = () => {
  const contrainRef =useRef(null);
  return (
    <div className='py-24 lg:py-28' id='about'>
      <div className='container max-w-5xl mx-auto'>
        <SectionHeader eyebrow='About Me' title='A Glimpse Into My World' description='Learn More About Who I am,What I do and What inspires me.'/>
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader title="Publication" description='Developed a Django app for network management with Ansible automation, published in IEEE.'/>
              
              <div className="w-40 mx-auto mt-2">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader title="My Toolbox" description='Explore the technologies and tools I use to craft exceptional digital experience.' className=''/>
              
              <ToolboxItems items={toolboxItem} className='' itemsWrapperClassName='animate-move-left [animation-duration:30s]'/>
              <ToolboxItems items={toolboxItem} className='' itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
            </Card>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader title="Beyond the code" description='Explore the my interests and hobbies beyon the realm.' className='px-6'/>
              <div className='relative flex-1' ref={contrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div 
                  key={hobby.title} className='inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute' style={
                    {
                      left: hobby.left,
                      top:hobby.top
                    }}
                    drag
                    dragConstraints={contrainRef}
                    >
                    <span className='font-medium text-gray-950'>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative  md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-30 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20 object-cover rounded-full "
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    
  );
};
