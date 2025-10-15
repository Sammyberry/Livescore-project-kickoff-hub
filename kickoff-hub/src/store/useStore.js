import { create } from "zustand";
import { getTodayMatches, mapMatchesToStore } from "../store/footballData";

export const useStore = create((set, get) => ({
  // --- Seed data (fallbacks) ---
  liveMatches: [
    { id: 1, home: "Arsenal", away: "Chelsea", score: "1 - 2", status: "LIVE" },
    { id: 2, home: "Bayern", away: "Napoli", score: "0 - 2" },
    { id: 3, home: "Chelsea", away: "Dortmund", score: "2 - 0" },
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

  // --- UI state ---
  loading: false,
  error: null,

  // --- Actions ---
  loadTodayFromAPI: async () => {
    try {
      set({ loading: true, error: null });
      const json = await getTodayMatches(); // defaults to today :contentReference[oaicite:2]{index=2}
      const { liveMatches, upcomingFixtures } = mapMatchesToStore(json);

      // Derive a trending match: first live if exists, else keep previous
      let trending = get().trending;
      if (liveMatches.length) {
        const t = liveMatches[0];
        trending = {
          id: t.id,
          home: t.home,
          away: t.away,
          score: t.score,
          status: "LIVE",
        };
      }

      set({ liveMatches, upcomingFixtures, trending, loading: false });
    } catch (e) {
      console.error(e);
      set({ error: e.message || "Failed to load matches", loading: false });
    }
  },
}));
