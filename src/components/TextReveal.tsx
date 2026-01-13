'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealByWordProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function TextRevealByWord({ text, className = '', wordClassName = '' }: TextRevealByWordProps) {
  const words = text.split(' ');

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${wordClassName}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.25, 0.1, 0, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

interface TextRevealByLineProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function TextRevealByLine({ children, className = '', staggerDelay = 0.1 }: TextRevealByLineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealLine({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { y: '100%', opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.1, 0, 1],
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
