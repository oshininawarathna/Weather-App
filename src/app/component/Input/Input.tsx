

import { FaSearch } from "react-icons/fa";
interface InputProps {
    handleSearch: any; 
    setLocation: any;  
  }
  const Input: React.FC<InputProps> = ({ handleSearch, setLocation }) => {
 
  return (
    <form className='flex items-center md:w-2/4 w-full order-2 md:order-1 font-bold'>
    <input 
      type='text' 
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch(e);
        }
      }}  
      onChange={(e) => setLocation(e.target.value)} 
      placeholder='Search City' 
      className='w-full bg-transparent border-b-2 border-blue-900 placeholder-blue-900 outline-none text-blue-900'
    />
    <div className='ml-[-25px] text-blue-900 cursor-pointer'>
        <button onClick={(e) => handleSearch(e)}>
        <FaSearch />
        </button>
     
    </div>
  </form>
  )
}

export default Input