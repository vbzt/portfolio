interface TecnologiesProps {
  name: string
}

const Technologies = ({ name }: TecnologiesProps) => {
  return (
    <span className="px-2.5 py-1 text-xs text-[#a1a1aa] border border-[#2e2e2e] rounded-md bg-transparent w-fit ">
      {name}
    </span>
  )
}

export default Technologies
