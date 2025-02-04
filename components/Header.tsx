import { Committee } from ".prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import YearContext from "../util/YearContext";
import ImageWithFallback from "./ImageWithFallback";

const headerCategories = [
  {
    name: "NollKIT",
    items: [
      {
        text: "Vi är NollKIT",
        href: "nollkit",
      },
      {
        text: "Pateter",
        href: "pateter",
      },
    ]
  },
  {
    name: "Mottagningen",
    items: [
      {
        text: "Mottagningen",
        href: "mottagningen",
      },
      {
        text: "Nolldeklaration",
        href: "nolldeklaration",
      },
      {
        text: "Modul",
        href: "modul",
      },
      {
        text: "Schema",
        href: "schema",
      },
    ]
  },
]

interface HeaderProps {
  blackout: boolean
  year?: number
}

const Header: NextPage<HeaderProps> = ({blackout, year}) => {


  return (
    <>
      {/* Background gradient */}
      <div className={`fixed top-0 w-screen -z-10 h-28 bg-gradient-to-b to-black/0 ${blackout ? "from-black/80" : "from-black/25"}`}></div>

      <div className="w-full lg:hidden pointer-events-auto">
        <MobileHeader selectedYear={year} />
      </div>
      <div className="hidden lg:block pointer-events-auto">
        <DesktopHeader selectedYear={year} />
      </div>
    </>
  )
}

export default Header

function DesktopHeader({selectedYear}: {selectedYear?: number}) {

  function getGridColsString(): string {
    // Sets the correct column sizes depending on how many items there are in each category
    return "0.8fr " + headerCategories.map((category, index) => (index !== 0 ? "0.1fr " : "") + category.items.length + "fr ").join("")
  }

  return (
    <YearContext.Consumer>
      {({ year, changeYear }) => {
        if (selectedYear) {
          year = selectedYear.toString()
        }
        return ( 
        <>
        <div className="mt-6 font-light grid grid-rows-2" style={{ gridTemplateColumns: getGridColsString() }}>
          <div className="w-full flex flex-col items-end relative">
            <Link href="/">
              <a className="w-20 h-20 absolute -top-5">
                <ImageWithFallback src={`/bilder/${year}/märke.png`} fallbacksrc={`/bilder/reserv/nollbricka_outline.png`} alt={"NollKIT" + year} layout={"fill"} objectFit={"contain"} loading="eager"/>
              </a>
            </Link>
          </div>

          {headerCategories.map((category, index) => (
            <React.Fragment key={category.name}>
              {
                index !== 0 ? <div className="border-l border-white mx-3"></div> : null
              }
              <div className="col-span-1 flex justify-center">
                {category.items.map(item => (
                  <Link href={`/${item.href}`} key={item.text}>
                    <a className="text-lg text-center px-5 whitespace-nowrap transition-opacity duration-300 opacity-80 hover:opacity-100">
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>
            </React.Fragment>
          ))}

          {headerCategories.map((category, index) => (
            <React.Fragment key={category.name}>
              <div className="flex items-center">
                <div className="border-t border-t-white w-full"></div>
              </div>
              <div className="flex items-center">
                <div className="border-t border-t-white w-full"></div>
                {
                  index === 0 ?
                    <YearSelector defaultText={category.name} changeYear={changeYear} />
                    :
                    <p className="px-3 text-xs font-light">{category.name}</p>
                }
                <div className="border-t border-t-white w-full"></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </>
        )}}
    </YearContext.Consumer>
  )
}

function MobileHeader({selectedYear}: {selectedYear?: number}) {

  const [isOpen, setOpen] = useState(false)

  return (
    <YearContext.Consumer>
      {({ year, changeYear }) => {
         if (selectedYear) {
          year = selectedYear.toString()
        }
        return (
        <>
          <div className={`fixed top-0 left-0 w-full h-full pt-28 bg-black/90 transition duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            {
              headerCategories.map((category, index) => (
                <div key={category.name} className="ml-20">
                  {
                    index === 0 ?
                      <YearSelector defaultText={category.name} changeYear={changeYear} />
                      :
                      <p className="text-xl italic mt-8 mb-3">{category.name}</p>
                  }
                  {
                    category.items.map(item => (
                      <Link href={`/${item.href}`} key={item.text}>
                        <a className="px-3 pb-1 text-lg font-light block w-fit transition-opacity duration-300 opacity-80 hover:opacity-100">
                          {item.text}
                        </a>
                      </Link>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className="w-full h-full px-5 relative">

            <div className="border-b border-b-white w-full pr-5 h-[4.5rem] flex items-center justify-end">
              <div className="h-10">
                <Hamburger isOpen={isOpen} setOpen={setOpen} />
              </div>
            </div>

            <Link href="/">
              <a className="w-20 h-20 absolute top-2 left-12">
                <ImageWithFallback src={`/bilder/${year}/märke.png`} fallbacksrc={`/bilder/reserv/nollbricka_outline.png`} alt={"NollKIT" + year} layout={"fill"} objectFit={"contain"} loading="eager"/>
              </a>
            </Link>

          </div>
        </>
        )}}
    </YearContext.Consumer>
  )
}

function Hamburger({ isOpen: isOpen, setOpen: setOpen }: { isOpen: boolean, setOpen: (isOpen: boolean) => void }) {
  const whiteline = "border-b-2 border-b-white w-full absolute transition-all"
  return (
    <div className="h-full aspect-square relative flex flex-col justify-center cursor-pointer select-none" onClick={() => setOpen(!isOpen)}>

      <div className={`relative transition-all duration-200 ${isOpen ? "h-0.5" : "h-3/4 "}`}>
        <div className={`${whiteline} top-0     ${isOpen ? " rotate-45 duration-300" : "rotate-0 duration-50"}`}></div>
        <div className={`${whiteline} bottom-0  ${isOpen ? "-rotate-45 duration-300" : "rotate-0 duration-50"}`}></div>
      </div>

      <div>
        <div className={`${whiteline} top-1/2 -translate-y-1/2 ${isOpen ? "opacity-0 duration-200" : "opacity-100 duration-300"}`}></div>
      </div>

    </div>
  )
}

function YearSelector({defaultText, changeYear}: {defaultText: string, changeYear: (year: string) => void}) {
  
  const [committees, setCommittees] = useState<Committee[]>([])

  useEffect(() => {
    (async () => {
      const fetchedCommittees = await fetch("./api/admin/committee/get").then(res => res.json()) as Committee[]
      setCommittees(fetchedCommittees.sort((a,b) => b.year - a.year))
    })()
  }, [])
  
  return (
    <select className="px-0 lg:px-3 lg:font-light lg:text-xs lg:not-italic lg:my-0 text-xl w-20 italic mt-8 mb-3 bg-transparent outline-none appearance-none cursor-pointer" defaultValue={defaultText} onChange={e => { changeYear(e.target.value); e.target.selectedIndex = 0}}>
      <option disabled hidden value={defaultText}>{defaultText}</option>
      {
        committees.map(committee => (
          <option className="bg-black" key={committee.year} value={committee.year}>{committee.year}</option>
        ))
      }
    </select>
  )
}

