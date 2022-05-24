import { NextPage } from "next"
import Head from "next/head"
import Precursor from "../components/Precursor"
import Header from "../components/Header"
import ReactPageScroller from 'react-page-scroller';
import { useState } from "react";
import PageInfo from "../components/PageInfo";

const Pateter: NextPage = () => {

  interface Member {
    name: string,
    role: string,
  }

  type Committee = {
    name: string,
    imageDesc: string,
    year: string,
    members: Member[]
  }

  const allNollkit: Committee[] = [
    {
      name: "NollKIT'21",
      year: "2021",
      imageDesc: "Från uppe vänster",
      members: [
        { name: 'Sebastian "Kvalle" Kvaldén', role: 'Uppdragschef' },
        { name: 'Erik "Knuten" Henriksson', role: 'Vice ordförande' },
        { name: 'Daði "Klakinn" Andrason', role: 'Eventchef' },
        { name: 'Clara "Champis" Simonsson', role: 'Ordförande' },
        { name: 'Eimer "Florett" Ahlstedt', role: 'Kassör' },
        { name: 'Jacob "Drake" Bengtsson', role: 'PR-chef' },
        { name: 'Julia "Bieber" Böckert', role: 'Phadderchef' },
        { name: 'Sara "SÄPO" Borg', role: 'Infochef' },
      ]
    },
    {
      name: "NollKIT'20",
      year: "2020",
      imageDesc: "Från vänster",
      members: [
        { name: 'Ida "Ide" Dahl', role: 'Infochef' },
        { name: 'Vilhelm "Drill" Hedquist', role: 'PR-chef' },
        { name: 'Josefin "josen" Nord', role: 'Phadderchef' },
        { name: 'Felix "Heinz" Holmesten', role: 'Vice ordförande' },
        { name: 'Jon "Snow" Emilsson', role: 'Eventchef' },
        { name: 'Albert "Tabbe" Lund', role: 'Kassör' },
        { name: 'Måns "Mums" Josefsson', role: 'Ordförande' },
      ],
    },
    {
      name: "NollKIT'19",
      year: "2019",
      imageDesc: "Från vänster",
      members: [
        { name: 'Adam "Rondell" Rohdell', role: 'Phadderchef' },
        { name: 'Herman "Minus" Bergström', role: 'PR-chef' },
        { name: 'Amanda "Bassi" Déhlen', role: 'Ordförande' },
        { name: 'Hugo "Steget" Stegrell', role: 'Infochef' },
        { name: 'Pär "Giff" Aronsson', role: 'Eventchef' },
        { name: 'Jonathan "Carbol" Carbol', role: 'Kassör' },
        { name: 'Viktor "Norris" Fredholm', role: 'Uppdragschef' },
      ],
    },
    {
      name: "NollKIT'18",
      year: "2018",
      imageDesc: "Från vänster",
      members: [
        { name: 'Henrik "Hank" Lagergren', role: 'Kassör' },
        { name: 'Ellen "Plums" Widerstrand', role: 'Phadderchef' },
        { name: 'Mona "Moki" Kilsgård', role: 'Eventchef' },
        { name: 'Hassan "Flash" Jaber', role: 'Ordförande' },
        { name: 'Melker "Mike" Veltman', role: 'Infochef' },
        { name: 'Viktor "Vifraa" Franzén', role: 'Uppdragschef' },
        { name: 'Nils-Martin "Pon" Robeling', role: 'PR-chef' },
      ],
    },
    {
      name: "NollKIT'17",
      year: "2017",
      imageDesc: "Från vänster",
      members: [
        { name: 'Jacob "Mintuw" Rohdin', role: 'Organisatör' },
        { name: 'Gabriel "GW" Wallin ', role: 'Ordförande' },
        { name: 'Linnea "Prim" Bark', role: 'Phadderchef' },
        { name: 'Eli "Rudolf" Knoph', role: 'PR-chef' },
        { name: 'Olof "Blixxten" Enström', role: 'Kassör' },
        { name: 'Omar "Ouei" Oueidat', role: 'Uppdragschef' },
      ],
    },
    {
      name: "NollKIT'16",
      year: "2016",
      imageDesc: "Från vänster",
      members: [
        { name: 'Johanna "Yoschü" Schüldt', role: 'Modulchef' },
        { name: 'Frej "Täcket" Karlsson', role: 'Kassör' },
        { name: 'Pedram "Admin" Shirmohammad', role: 'Organisatör' },
        { name: 'Albin "L’Oréal" Bååw', role: 'Ordförande' },
        { name: 'Emilia "Vesslan" Vestlund', role: 'Uppdragschef' },
        { name: 'Amanda "Rabban" Jonsson', role: 'Phadderchef' },
        { name: 'Martin "Tino" Tran', role: 'PR-chef' },
      ],
    },
    {
      name: "NollKIT'15",
      year: "2015",
      imageDesc: "Från vänster",
      members: [
        { name: 'Katarina "Lovre" Bergbom', role: 'PR-chef' },
        { name: 'Mats "Maddy" Högberg', role: 'Organisatör' },
        { name: 'Ina "Chezz" Tran', role: 'Phadderchef' },
        { name: 'Tina "Tiny" Mostafavi', role: 'Ordförande' },
        { name: 'Johannes "Jolle" Hildén', role: 'Modulchef' },
        { name: 'Christian "Saser" Persson', role: 'Kassör' },
        { name: 'Viktoria "Bowg" Bogren', role: 'Uppdragschef' },
      ],
    },
    {
      name: "NollKIT'14",
      year: "2014",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'13",
      year: "2013",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'12",
      year: "2012",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'11",
      year: "2011",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'10",
      year: "2010",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'09",
      year: "2009",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'08",
      year: "2008",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'07",
      year: "2007",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'06",
      year: "2006",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'05",
      year: "2005",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'04",
      year: "2004",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'03",
      year: "2003",
      imageDesc: "Från vänster",
      members: [
      ],
    },
    {
      name: "NollKIT'02",
      year: "2002",
      imageDesc: "Från vänster",
      members: [
      ],
    },

  ]

  const changeBgOpacity = (index: number) => {
    const fp = document.getElementById("first-page")
    if (!fp) return
    if (index === 0) {
      fp.style.background = "rgba(0,0,0,0.4)"
    } else {
      fp.style.background = "rgba(0,0,0,0.9)"
    }
  }

  return (
    <div className="fullPage">

      <div className="section bg-cover bg-center h-full overflow-hidden w-screen" style={{ backgroundImage: "url('/bilder/bakgrund/2021.jpg')" }} >
        <div id="first-page" className={`bg-black h-full transition bg-opacity-40 duration-700`}>
          <ReactPageScroller
            animationTimer={700}
            animationTimerBuffer={300}
            renderAllPagesOnFirstRender={true}
            onBeforePageScroll={changeBgOpacity}
          >
            <div className="section">
              <div className="absolute left-[25%] top-[15%] drop-sh w-1/2 flex flex-col items-center">
                <PageInfo heading="Pateter">
                  På Chalmers är patet ett allmänt namn för personer som tidigare suttit i en förening/kommitté. De som har suttit i just NollKIT tidigare år kallas för NollQIT. De kan vara bra att ha lite då och då, både för NollKIT och för Nollan, eftersom de alltid svarar glatt på frågor om NollKIT råkar vara borta för stunden.
                </PageInfo>
              </div>
            </div>
            {allNollkit.map((committee, index) => (
              <div key={index} className="section">
                <Precursor precursor={committee} />
              </div>
            ))}
          </ReactPageScroller>
        </div>
      </div>
      <div className="absolute top-0 flex flex-col items-center w-full">
        <Header blackout={true}/>
      </div>
    </div>
  )
}

export default Pateter