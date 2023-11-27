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


    <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            JavaScript Tutorial
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most
                            popular lightweight, interpreted
                            compiled programming language.
                            It is also known as scripting
                            language for web pages. It is
                            well-known for the development
                            of web page many non-browser
                            environments also use it.
                            JavaScript can be used for
                            Client-side developments as well
                            as Server-side developments.
                        </p>
                    </div>
                </div>
                
</section>

  );
}

export default App
