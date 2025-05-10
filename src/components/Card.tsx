import grainImage  from '@/assets/images/grain.jpg';
import { Component, ComponentPropsWithRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';


export const Card = ({
    className,
    children,
    ...other
}: ComponentPropsWithRef<"div">) => {
    return (
        <div
              className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden md:pt-12 md:px-10 border border-white/10 shadow-lg after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 after:pointer-events-none",className)}
              {...other}
            >
              <div className="inset-0 -z-0 opacity-5" style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}>
                </div>
                {children}
        </div>
    );
} 