'use client'
import React, { ReactNode } from 'react'
import {motion} from 'motion/react'
function AgentCardContainer({children}:{children:ReactNode}) {
  return (
    <motion.div   whileHover={{ scale: 1.1 }}
  whileTap={{ scale: .9 }} initial={{ scale: .8 }} animate={{ scale: 1 }}>
       {
        children
       }
    </motion.div>
  )
}

export default AgentCardContainer