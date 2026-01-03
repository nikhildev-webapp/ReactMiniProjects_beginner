import React from 'react'

const themes = {
  light: 'bg-gray-100 text-gray-900',
  dark: 'bg-gray-900 text-white',
  blue: 'bg-blue-600 text-white',
  green: 'bg-green-600 text-white'
}

const ColorThemeSwitcher = () => {
  const [theme, setTheme] = React.useState('light')

  return (
    <div className={`${themes[theme]} min-h-screen transition-colors duration-300 flex items-center justify-center`}>
      <div className='max-w-md w-full p-6 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-200/30 text-center'>
        <h1 className='text-2xl font-semibold mb-2'>Color Theme Switcher</h1>
        <p className='text-sm text-gray-600 mb-4'>Switch the background between Light / Dark / Blue / Green.</p>

        <div className='flex gap-3 justify-center'>
          <button
            onClick={() => setTheme('light')}
            className={`px-4 py-2 rounded-md transition ${theme === 'light' ? 'ring-2 ring-offset-2 ring-blue-500 scale-105' : 'bg-white/90 text-gray-900 hover:bg-white'}`}>
            Light
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`px-4 py-2 rounded-md transition ${theme === 'dark' ? 'ring-2 ring-offset-2 ring-yellow-300 scale-105' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>
            Dark
          </button>

          <button
            onClick={() => setTheme('blue')}
            className={`px-4 py-2 rounded-md transition ${theme === 'blue' ? 'ring-2 ring-offset-2 ring-white scale-105' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
            Blue
          </button>

          <button
            onClick={() => setTheme('green')}
            className={`px-4 py-2 rounded-md transition ${theme === 'green' ? 'ring-2 ring-offset-2 ring-white scale-105' : 'bg-green-600 text-white hover:bg-green-700'}`}>
            Green
          </button>
        </div>

        <div className='mt-4 text-sm'>Current theme: <span className='font-medium'>{theme}</span></div>
      </div>
    </div>
  )
}

export default ColorThemeSwitcher