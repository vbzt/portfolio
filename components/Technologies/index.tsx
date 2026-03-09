interface TecnologiesProps {
  name: string
}

const techColors: Record<string, string> = {
  'NestJS': '#E0234E',
  'Node.js': '#339933',
  'Express': '#000000',
  
  'React': '#61DAFB',
  'Next.js': '#000000',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
  'Vite': '#646CFF',
  
  'PostgreSQL': '#4169E1',
  'MongoDB': '#47A248',
  'MySQL': '#4479A1',
  'PrismaORM': '#2D3748',
  
  'Docker': '#2496ED',
  'Git': '#F05032',
  'WebSockets': '#010101',
  'E2E Encryption': '#FF6B6B',
  'FFMPEG': '#007808',
  'Gemini API': '#4285F4',
  
  'default': '#888888'
}

const Technologies = ({ name }: TecnologiesProps) => {
  const color = techColors[name] || techColors['default']
  
  return (
    <span className="group px-2.5 py-1 text-xs text-[#a1a1aa] border border-[#2e2e2e] rounded-md bg-transparent w-fit flex items-center gap-1.5 hover:border-[#3a3a3a] hover:text-[#c1c1ca] hover:scale-105 transition-all duration-200 ease-out cursor-default">
      <span 
        className="w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-transform duration-200" 
        style={{ backgroundColor: color }}
      />
      {name}
    </span>
  )
}

export default Technologies