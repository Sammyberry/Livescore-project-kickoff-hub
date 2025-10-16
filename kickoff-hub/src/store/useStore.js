// src/store/useStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  liveMatches: [
    {
      id: 1,
      home: "Arsenal",
      away: "Chelsea",
      score: "1 - 2",
      minute: "65’",
      status: "LIVE",
      lineups: {
        home: {
          formation: "4-3-3",
          players: [
            "Raya (GK)",
            "White",
            "Saliba",
            "Gabriel",
            "Zinchenko",
            "Rice",
            "Ødegaard",
            "Havertz",
            "Saka",
            "Jesus",
            "Martinelli",
          ],
        },
        away: {
          formation: "3-4-2-1",
          players: [
            "Petrovic (GK)",
            "Disasi",
            "Colwill",
            "Thiago Silva",
            "James",
            "Caicedo",
            "Enzo",
            "Cucurella",
            "Palmer",
            "Sterling",
            "Jackson",
          ],
        },
      },
    },
    {
      id: 2,
      home: "Inter",
      away: "Napoli",
      score: "0 - 2",
      minute: "72’",
      status: "LIVE",
      lineups: {
        home: {
          formation: "3-5-2",
          players: [
            "Sommer (GK)",
            "Bastoni",
            "Acerbi",
            "Darmian",
            "Dimarco",
            "Barella",
            "Calhanoglu",
            "Mkhitaryan",
            "Dumfries",
            "Martínez",
            "Thuram",
          ],
        },
        away: {
          formation: "4-3-3",
          players: [
            "Meret (GK)",
            "Di Lorenzo",
            "Rrahmani",
            "Juan Jesus",
            "Olivera",
            "Anguissa",
            "Lobotka",
            "Zielinski",
            "Politano",
            "Osimhen",
            "Kvaratskhelia",
          ],
        },
      },
    },
    {
      id: 3,
      home: "Bayern",
      away: "Dortmund",
      score: "2 - 0",
      minute: "58’",
      status: "LIVE",
      lineups: {
        home: {
          formation: "4-2-3-1",
          players: [
            "Neuer (GK)",
            "Kimmich",
            "Upamecano",
            "de Ligt",
            "Davies",
            "Laimer",
            "Goretzka",
            "Sané",
            "Musiala",
            "Coman",
            "Kane",
          ],
        },
        away: {
          formation: "4-3-3",
          players: [
            "Kobel (GK)",
            "Ryerson",
            "Hummels",
            "Schlotterbeck",
            "Bensebaini",
            "Can",
            "Brandt",
            "Sabitzer",
            "Adeyemi",
            "Fullkrug",
            "Reus",
          ],
        },
      },
    },
  ],

  upcomingFixtures: [
    { id: 1, home: "Barcelona", away: "Real Madrid", time: "Sat 7:30 PM" },
    { id: 2, home: "Man City", away: "Liverpool", time: "Sun 4:30 PM" },
  ],

  trending: {
    id: 1,
    home: "Arsenal",
    away: "Chelsea",
    score: "1 : 2",
    status: "LIVE",
  },

  quickStats: [
    { id: 1, label: "Possession", value: "55% - 45%" },
    { id: 2, label: "Shots", value: "2 - 7" },
    { id: 3, label: "Fouls", value: "10 - 8" },
  ],
}));
