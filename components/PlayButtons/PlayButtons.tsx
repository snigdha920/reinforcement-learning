import React from 'react'
import { playButtonsConfig } from './config'
interface IPlayButtonProps {
  setPlayUrl: React.Dispatch<React.SetStateAction<string>>
}
export function PlayButtons({ setPlayUrl }: IPlayButtonProps) {
  // escape early if there are no buttons to play
  if (playButtonsConfig.length === 0) {
    return <div>Nothing to play yet, please come back later</div>
  }

  return (
    <div>
      {playButtonsConfig.map((button) => {
        return (
          <button
            key={button.url}
            onClick={() => setPlayUrl(button.url)}
            className={`py-2 my-4 h-12 border-2 border-[#10447e] block w-full rounded-full`}
          >
            {button.label}
          </button>
        )
      })}
    </div>
  )
}

function Button() {}
