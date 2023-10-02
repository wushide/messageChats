/*
 * @Descripttion: 
 * @version: 
 * @Author: wushide
 * @Date: 2023-09-18 09:04:35
 * @LastEditors: wushide
 * @LastEditTime: 2023-09-23 08:57:28
 */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
export default config
