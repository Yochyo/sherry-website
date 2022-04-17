import * as React from 'react';

type Props = {};
export const Nav2 = (props: Props) => {
  return (
    <nav
      className="
navbar
navbar-expand-lg
navbar-light relative
flex
w-full
flex-wrap
items-center
justify-between
bg-gray-100
py-4
text-gray-500
shadow-lg hover:text-gray-700 focus:text-gray-700
">
      <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="
    navbar-toggler
    border-0
    bg-transparent
    py-2 px-2.5
    text-gray-500
    hover:no-underline
    hover:shadow-none
    focus:no-underline focus:shadow-none focus:outline-none focus:ring-0
  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
          <a className="text-xl text-black" href="#">
            Navbar
          </a>
          <ul className="navbar-nav list-style-none mr-auto flex flex-col pl-0">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="#">
                Features
              </a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link disabled p-0 text-gray-300">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
