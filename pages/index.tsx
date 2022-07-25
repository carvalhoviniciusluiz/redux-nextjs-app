import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { selectValue, reset, decrement, increment, incrementByAmount, incrementAsync } from '../slices/counterSlice'

const Home: NextPage = () => {
  const count = useSelector(selectValue)
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>The value of count is {count}</h1>

        <button onClick={() => dispatch(increment())} className="w-full h-10 bg-green-400/50">Increment</button>
        <button onClick={() => dispatch(decrement())} className="w-full h-10 bg-red-400/50">Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(3)) } className="w-full h-10 bg-blue-400/50">Increment By Amount</button>
        <button onClick={() => dispatch(incrementAsync(5))} className="w-full h-10 bg-yellow-400/50">Add Async (1s)</button>
        <button onClick={() => dispatch(reset())} className="w-full h-10 bg-gray-400/50">Reset</button>
      </main>
    </div>
  )
}

export default Home
