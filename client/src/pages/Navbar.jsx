import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 shadow-md">
  <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
    <h1 className="text-white font-extrabold text-2xl tracking-wide">
      Rajasva Raj Srivastava
    </h1>
    <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-all duration-300">
      Logout
    </Button>
  </div>
</div>

  )
}

export default Navbar