import SeacrhInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./logoutButton"
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SeacrhInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton /> 
    </div>
  )
}

export default Sidebar


// STARTER CODE FOR THIS FILE
// import SeacrhInput from "./SearchInput"
// import Conversations from "./Conversations"
// import LogoutButton from "./logoutButton"
// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SeacrhInput />
//       <div className='divider px-3'></div>
//       <Conversations />
//       <LogoutButton /> 
//     </div>
//   )
// }

// export default Sidebar

