
import {motion} from 'framer-motion'
function App() {

  return (
    <>
      <div className="w-full h-full justify-center items-center flex">
        <div className="w-[700px] h-[700px] border-black border-2 flex">
          <motion.div
            initial={{ x:0, y:0 }}
            animate={{ x: 350, y: 350 }}
            transition={{ type:"spring", stiffness: 200, damping: 2 }}
           className="w-[350px] h-[350px] border-red-900 border-2"></motion.div>
        </div>
      </div>
    </>
  )
}

export default App
