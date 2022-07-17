import React from 'react'

const Nav = () => {
  return (
    <div className="bg-[#8cb1b9] text-xl fixed w-full h-8 flex flex-row justify-between items-center">
        <>
        <span>
            <img class="h-10 inline" src="./assets/logo.png"></img>
            Recipes
        </span>
        </>

        <ul className="menu-list lg:flex lg:flex-row text-xl">
            <li class ="mx-4 my-6 md:my-0">
                <a href="Home" class="hover:text-white duration-500"> Home</a>
                <a href="About" class="hover:text-white duration-500"> About</a>
                <a href="Contact" class="hover:text-white duration-500"> Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav