import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-stone-800 shadow-lg relative overflow-hidden shadow-blue-500/10 dark:shadow-blue-400/10 ring-1 ring-blue-500/10 dark:ring-blue-400/10"
      initial="initial"
      whileHover="hover"
    >
      <Link
        href="/"
        className="text-2xl font-sans font-bold text-white dark:text-amber-200 tracking-wide drop-shadow-md focus-visible:ring-1 focus-visible:ring-green-500"
      >
        SFCC
      </Link>
    </motion.div>
  );
}
