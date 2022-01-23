import Image from "next/image";
import Link from "next/dist/client/link";

import menubar from "../../config/menu.json";
import { useState } from "react";
import Search from "components/Search/Search";
import MobileMenu from "components/MobileMenu/MobileMenu";

const Header = ({ navbar, isOpen, toggle, isFixed }) => {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [showSearchPosts, setShowSearchPosts] = useState();
  const [searchItem, setSearchItem] = useState(false);

  const handleSearch = () => {
    setShowSearchPosts("");
    setSearchItem(!searchItem);

    if (showSearchbar) {
      setShowSearchBar(!showSearchbar);
    }
  };

  const { header, logo } = menubar;
  return (
    <>
      <header
        className={
          navbar
            ? `${showSearchbar ? "header py-0" : "header"} top-0  ${
                isFixed ? "fixed" : "sticky"
              }  z-40 bg-white shadow-lg`
            : `${showSearchbar ? "header py-0" : "header"} ${
                isFixed ? "fixed" : "sticky"
              }  z-40 top-0 `
        }
      >
        {showSearchbar ? (
          <div className=" w-full mx-auto  ">
            <div className="flex items-center w-full bg-white px-6">
              <input
                type="text"
                onChange={(e) => {
                  setShowSearchPosts(e.target.value);
                }}
                className="w-2/3 mx-auto py-12  outline-none text-2xl"
                placeholder="Tyepe Here"
              />{" "}
              <a className="text-h4 cursor-pointer" onClick={handleSearch}>
                <i className="fas fa-times"></i>
              </a>
            </div>

            <Search
              showSearchPosts={showSearchPosts}
              handleSearch={handleSearch}
            ></Search>
          </div>
        ) : (
          <nav
            className={
              "flex justify-between items-center w-full px-8  xl:w-2/3 mx-auto "
            }
          >
            <Link href="/">
              <a>
                <div className="w-52 h-8 relative">
                  <Image
                    src={logo}
                    alt="logo"
                    layout="fill"
                    // objectFit="cover"
                  ></Image>
                </div>
              </a>
            </Link>

            <div className=" lg:hidden">
              <a onClick={toggle} className="text-4xl">
                {isOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </a>
            </div>
            <ul className=" hidden lg:block">
              {header.map((menu) =>
                menu.class ? (
                  <li
                    key={menu.class}
                    className="mr-4 px-8 py-4 text-textColor inline-block cursor-pointer"
                  >
                    <i
                      className={`${menu.class} `}
                      onClick={() => {
                        setShowSearchBar(true);
                      }}
                    ></i>
                  </li>
                ) : (
                  <Link
                    href={menu.link == "" ? "#" : menu.link}
                    key={menu.menu}
                  >
                    <a className="mr-4 px-8 py-4 text-textColor">
                      <li className="inline-block">{menu.menu}</li>
                    </a>
                  </Link>
                )
              )}
            </ul>
          </nav>
        )}

        <MobileMenu
          navbar={navbar}
          toggle={toggle}
          isOpen={isOpen}
          showSearchbar={showSearchbar}
          setShowSearchBar={setShowSearchBar}
        ></MobileMenu>
      </header>
    </>
  );
};

export default Header;
