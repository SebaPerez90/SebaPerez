'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.7,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const currentLanguage = localStorage.getItem('lang')

  const wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 0.03,
        delay: stagger(0.03),
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, currentLanguage])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${className} opacity-0`}
              style={{
                filter: filter ? 'blur(40px)' : 'none',
              }}>
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className='mt-4'>
        <div className='text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
