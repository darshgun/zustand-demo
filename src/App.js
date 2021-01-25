import React from "react"
import create from "zustand"
import PrismCode from "react-prism"
import "prismjs"
import "prismjs/components/prism-jsx.min"
import "prismjs/themes/prism-okaidia.css"
import code from "./resources/code"

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div class="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default function App() {
  return (
    <div class="main">
      <div class="code">
        <div class="code-container">
          <PrismCode className="language-jsx" children={code} />
          <Counter />
        </div>
      </div>
      <a href="https://github.com/drcmda/zustand" class="top-right" children="Github" />
      <a href="https://twitter.com/0xca0a" class="bottom-right" children="Twitter" />
      <span class="header-left">Zustand</span>
    </div>
  )
}
