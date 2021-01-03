import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";

import { PLAYERS } from "../public/static/data/players";

const firstFiftyPlayers = PLAYERS.slice(0, 50);

const ROOKIE = 0;

const DEFAULT_CONSTRAINTS = {
  totalPoints: 10,
  totalPlayers: 2,
  minimumExperience: ROOKIE,
  selectedPlayers: [],
  statMaximumAfterIncrease: 90,
  maximumTimesIncreased: 2,
  cannotBeIncreased: {
    speed: true,
    acceleration: true,
    changeOfDirection: true,
    strength: true,
    jumping: true,
    throwPower: true,
    hitPower: true,
    kickPower: true,
    stamina: true,
    toughness: true,
    injury: true
  }
};

type Player = {
  [key: string]: string;
};

let selectedPlayer: Player = {};

const Players: NextPage = () => (
  <div>
    <Head>
      <title>Available players</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="A quick starter Template for Next.js with Tailwind CSS and Typescript"
      />
    </Head>
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our selected player
            </h2>
            <h3>
              {selectedPlayer &&
                `${selectedPlayer.firstName} ${selectedPlayer.lastName}`}
            </h3>
            <p className="text-xl text-gray-500">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse. Vivamus
              fringilla.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {firstFiftyPlayers.map((player) => (
                <li>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{`${player.firstName} ${player.lastName}`}</h3>
                      <p className="text-indigo-600">{player.position}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Players;
