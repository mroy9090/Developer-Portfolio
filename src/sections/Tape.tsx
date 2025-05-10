import StartIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';
const words = [
  "PHP",
  "Laravel",
  "Composer",
  "MySQL",
  "MongoDB",
  "Middleware",
  "Eloquent ORM",
  "Blade Templating",
  "Laravel UI",
  "Web Routes",
  "Hashing(Argon2)",
  "Webpack",
  "Axios",
  "RESTful APIs",
  "DOMPDF",
  "XSS and SQL injection protection",
  "Laravel Passport",
  "ReactJS",
  "Redux",
  "Xdebug",
  "CI/CD",
  "Python",
  "Django",
  "Artisan CLI",
  "Tailwind CSS",
  "Django",
  "XML",
  "Ansible",
];

export const TapeSection = () => {
  return(
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%,transparent)]'>
          <div
              className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:40s]"
              
            >
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StartIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            { words.map ( word => (
                <div key={word} className='inline-flex gap-4 items-center'>
                  <span  className='text-gray-900 uppercase font-extrabold'>{word}</span>
                  <StartIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
            ) ) }
          </div>
        </div>
      </div>
    </div>
  );
};
