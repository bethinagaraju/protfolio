import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28 sm:pt-32"
    >
      {children}
    </motion.main>
  );
}
