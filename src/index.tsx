export function start({message}) {
  alert(message)
}


// export function start({message}: {message: string}) {
//   alert(message)
// }
//
// start({message: 1})


// import React from 'react'
// import ReactDOM from 'react-dom'
//
// export function App({message}) {
//   return <div>Babel {message}</div>
// }
//
// export function start({message, ...others}) {
//   const stuff = {...others, message}
//
//   const el = document.getElementById('main')
//   ReactDOM.render(<App message={message}/>, el)
// }
