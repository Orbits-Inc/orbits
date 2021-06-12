import React from 'react'

export default function searching() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 font-bold text-xl text-primary">People</div>
      <div className="border border-gray-300 rounded-xl py-3 px-6 text-accent text-sm">
        <img className="w-6 h-6 inline mr-1" src="/spinner.svg" />{" "}
          Searching...
        </div>
    </div>
  )
}
