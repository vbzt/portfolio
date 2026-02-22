'use client'
import { useLang } from '@/context/LanguageContext';
import { t } from '@/lib/i18n';
import React from 'react'

const Footer = () => {
    const { lang } = useLang();
    const text = t[lang];
  return (
    <footer className='fixed bottom-0 left-0 right-0 p-2 z-50 flex items-center justify-center'>
      <p className='text-xs text-[#6b6b6b]'>{text.footer.text} <a className='underline' href="https://github.com/vbzt/portfolio" target='_blank'>vbzt</a></p>
    </footer>
  )
}

export default Footer