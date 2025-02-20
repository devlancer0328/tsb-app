"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  delay?: number
}

export function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

