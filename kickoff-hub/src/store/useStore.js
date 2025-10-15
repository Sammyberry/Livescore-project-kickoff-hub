// src/store/useStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  liveMatches: [
    {
      id: 1,
      home: "Arsenal",
      away: "Chelsea",
      score: "1 - 2",
      status: "LIVE",
      lineups: {
        home: {
          formation: "4-3-3",
          players: [
            "Ramsdale",
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
          formation: "4-2-3-1",
          players: [
            "Petrović",
            "James",
            "Disasi",
            "Silva",
            "Cucurella",
            "Caicedo",
            "Fernández",
            "Palmer",
            "Gallagher",
            "Mudryk",
            "Jackson",
          ],
        },
      },
    },
    { id: 2, home: "Bayern", away: "Napoli", score: "0 - 2" },
    { id: 3, home: "Chelsea", away: "Dortmund", score: "2 - 0" },
  ],

  upcomingFixtures: [
    { id: 1, home: "Barcelona", away: "Real Madrid", time: "Sat 7:30 PM" },
    { id: 2, home: "Man City", away: "Liverpool", time: "Sun 4:30 PM" },
  ],

  trending: {
    id: 1, // ✅ Match id so it connects with liveMatches
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
