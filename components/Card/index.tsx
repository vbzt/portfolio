
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Technologies from '../Technologies'

interface MainCardProps {
  name: string
  description?: string
  github?: string
  linkedin?: string
  showTech?: boolean
}

interface CardProps {
  variant?: 'main' | 'nav'
  className?: string
  style?: React.CSSProperties
  name?: string
  description?: string
  github?: string
  linkedin?: string
  showTech?: boolean
  icon?: React.ReactNode
  category?: string
  title?: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  target?: string
}

interface NavCardProps {
  icon?: React.ReactNode
  category?: string
  title?: string
  description?: string
  href?: string
  target?: string
}


const MainCard: React.FC<MainCardProps> = ({ name, description, github, linkedin, showTech = true }) => (
  <article className="flex flex-col gap-2.5 bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-6 w-full">
    <div className='flex gap-2 items-center'>
      <h2 className="text-2xl font-semibold text-[#f0f0f0] leading-tight m-0">
        {name}
      </h2>
      <span>•</span>

      <div className="flex items-center gap-2.5">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#cccccc] text-lg leading-none hover:text-white transition-colors duration-200">
            <FaGithub />
          </a>
        )}

        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#cccccc] text-lg leading-none hover:text-white transition-colors duration-200">
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>

    {description && (
      <p className="text-sm text-[#9a9a9a] m-0 leading-relaxed">
        {description}
      </p>
    )}

   {showTech && (
  <div className="flex flex-wrap gap-1.5 mt-1">
    <Technologies name="TypeScript" />
    <Technologies name="NestJS" />
    <Technologies name="Next.js" />
    <Technologies name="PostgreSQL" />
    <Technologies name="PrismaORM" />
    <Technologies name="Docker" />
  </div>
)}

  </article>
)


const NavCard: React.FC<NavCardProps> = ({ icon, category, title, description, target, href = '#' }) => (
  <a href={href} target={target} className="flex flex-col gap-1 bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-6 w-full h-full no-underline cursor-pointer hover:bg-[#1f1f1f] hover:border-[#444444] transition-colors duration-200">
    {icon && (
      <span className="text-[#888888] text-xl leading-none mb-1 flex items-center">
        {icon}
      </span>
    )}

    {category && (
      <span className="text-xs text-[#6b6b6b]">
        {category}
      </span>
    )}

    {title && (
      <h3 className="text-xl font-semibold text-[#f0f0f0] m-0 mb-1 leading-tight">
        {title}
      </h3>
    )}

    {description && (
      <p className="text-[0.8rem] text-[#9a9a9a] m-0 leading-relaxed">
        {description}
      </p>
    )}
  </a>
)



const Card: React.FC<CardProps> = ({ variant = 'nav', className = '', onClick,  ...props}) => {
  const Comp = variant === 'main' ? MainCard : NavCard

  return (
    <div className={`w-full h-full ${className}`} onClick={onClick}>
      <Comp {...props as any} />
    </div>
  )
}

export default Card
