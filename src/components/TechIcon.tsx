import PHPIcon from '@/assets/icons/php.svg';
import LaravelIcon from '@/assets/icons/laravel.svg';
export const TechIcon = ({ component: Component }: { component: React.ElementType }) => {
  let style = {};
  if (Component === PHPIcon) {
    <svg className='size-0 absolute'>
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" />
            <stop offset="100%" stopColor="rgb(56, 189, 248)" />
          </linearGradient>
        </defs>
      </svg> 
  } else if (Component === LaravelIcon) {
    <svg className='size-0 absolute'>
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" />
            <stop offset="100%" stopColor="rgb(56, 189, 248)" />
          </linearGradient>
        </defs>
      </svg>
  }
  return <>
      <Component style={style} className="size-10 fill-[url(#tech-icon-gradient)]"/>
      <svg className='size-0 absolute'>
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" />
            <stop offset="100%" stopColor="rgb(56, 189, 248)" />
          </linearGradient>
        </defs>
      </svg>
      
  </>
};
