import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section class="section">
    <div class="box-main">
        <div class="firstHalf">
            <h1 class="text-big">
                Learning C++
            </h1>
            <p class="text-small">
                Here is all the things you need to learn in C++
            </p>
        </div>
    </div>
</section>

  );
}

export default App
