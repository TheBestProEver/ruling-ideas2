window.RULING_DATA = {
 "teams": [
  {
   "id": 1,
   "name": "Factory Workers",
   "color": "#D7263D",
   "ink": "#FFFFFF",
   "shape": "circle",
   "reading": "Communist Manifesto",
   "who": "The modern working class, packed into factories and cities by big industry.",
   "cry": "Workers of the world, unite!",
   "learn": "The Manifesto says the real fruit of workers’ battles is “the ever-expanding union of the workers.”"
  },
  {
   "id": 2,
   "name": "Guild Artisans",
   "color": "#1B6CA8",
   "ink": "#FFFFFF",
   "shape": "square",
   "reading": "German Ideology and Manifesto",
   "who": "Medieval craftsmen and shopkeepers, squeezed out by big industry.",
   "cry": "Roll back the wheel!",
   "learn": "The Manifesto says the lower middle class fights big business only to save itself: “they try to roll back the wheel of history.”"
  },
  {
   "id": 3,
   "name": "Pin Makers",
   "color": "#2A9D5C",
   "ink": "#FFFFFF",
   "shape": "triangle",
   "reading": "Wealth of Nations",
   "who": "Adam Smith’s ten workers, each doing one small step of making a pin.",
   "cry": "48,000 pins a day!",
   "learn": "Smith says ten workers who split up the job can make upwards of 48,000 pins a day. Marx agrees it’s productive, but asks who ends up owning the pins."
  },
  {
   "id": 4,
   "name": "Bedouin",
   "color": "#F4B400",
   "ink": "#1E1E1E",
   "shape": "diamond",
   "reading": "Muqaddimah",
   "who": "Ibn Khaldun’s desert tribe, held together by group feeling.",
   "cry": "Asabiyyah!",
   "learn": "Ibn Khaldun says desert peoples have the strongest group feeling, which is why they conquer cities, until city luxury softens them too."
  }
 ],
 "rules": [
  [
   "Before you start",
   [
    "The Banker starts with all 80 tokens. Each team gets 3 tokens in its own color, and the Banker keeps the rest.",
    "Each team gets its Identity Card, scrap paper and a pen. Put the prize (candy) where everyone can see it."
   ]
  ],
  [
   "Answering",
   [
    "The Host reads a question. After 20 seconds, everyone holds up their answer on “3, 2, 1.”",
    "Every team that’s right gets 1 token from the Banker, in its own color (any color if that one runs out). Shout your team cry!"
   ]
  ],
  [
   "Round 1: Work",
   [
    "Play questions 1–6. The team with the most tokens becomes the Ruling Class and gets the placard. If there’s a tie, the closest guess on the tiebreaker wins."
   ]
  ],
  [
   "Round 2: Rule",
   [
    "The Ruling Class picks one Rule Card and finishes the sentence “This rule is good for everyone because…” The Banker enforces it for the rest of the game.",
    "Play questions 7–11. Everyone answers, including the Ruling Class."
   ]
  ],
  [
   "Round 3: Wages",
   [
    "The Ruling Class can’t answer the Hard Question. The other teams call out lower and lower wages (3, 2, 1, 0) to do it, and the lowest offer gets the job.",
    "The Ruling Class pays that wage. If the answer is right, the Banker gives 3 tokens to the Ruling Class, not to the team that answered. Play two Hard Questions."
   ]
  ],
  [
   "Round 4: Revolution",
   [
    "First, the Ruling Class may offer 2 tokens to one team. If that team takes the Bribe, it sits out the revolution.",
    "All the other teams answer one Revolution Prompt together, one sentence per team. The Historian judges.",
    "If the revolution wins, the placard is torn up and everyone except a bribed team shares the prize. If it fails, the Ruling Class and any bribed team share it."
   ]
  ]
 ],
 "rounds": [
  {
   "n": 1,
   "name": "Work",
   "mins": 4,
   "what": "Questions 1–6. The team with the most tokens becomes the Ruling Class.",
   "teaches": "Smith, Ibn Khaldun and Marx agree more than you’d expect, and the quotes prove it."
  },
  {
   "n": 2,
   "name": "Rule",
   "mins": 4,
   "what": "The Ruling Class picks a Rule Card and says why it’s “good for everyone.” Then questions 7–11 under the new rule.",
   "teaches": "“The ideas of the ruling class are in every epoch the ruling ideas.” Every ruling class says its interest is everyone’s."
  },
  {
   "n": 3,
   "name": "Wages",
   "mins": 4,
   "what": "The Ruling Class can’t answer the Hard Questions. The other teams undercut each other for the job, and the reward goes to the Ruling Class.",
   "teaches": "Estranged labour: you do the work and someone else owns the result. Competition between workers pushes wages down."
  },
  {
   "n": 4,
   "name": "Revolution",
   "mins": 4,
   "what": "The Ruling Class may bribe one team to sit out. The rest answer one prompt together. If they win, everyone shares the prize.",
   "teaches": "A revolution needs the workers to stay united, and a ruling class survives by splitting them."
  }
 ],
 "questions": [
  {
   "id": "1",
   "round": 1,
   "type": "Who said it?",
   "prompt": "“It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest.”",
   "options": [
    "Marx and Engels",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 1,
   "answer": "Adam Smith (Wealth of Nations, Book I)",
   "why": "The Manifesto describes the same thing as “naked self-interest” and “callous cash payment.” Same fact, opposite verdict."
  },
  {
   "id": "2",
   "round": 1,
   "type": "Who said it?",
   "prompt": "The bourgeoisie “has accomplished wonders far surpassing Egyptian pyramids, Roman aqueducts, and Gothic cathedrals.”",
   "options": [
    "Marx and Engels",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 0,
   "answer": "Marx and Engels (Manifesto, Section I)",
   "why": "Marx admires how productive capitalism is. The German Ideology says communism needs that wealth, or want is “merely made general.”"
  },
  {
   "id": "3",
   "round": 1,
   "type": "Who said it?",
   "prompt": "Differences between peoples come from “the different ways in which they make their living.”",
   "options": [
    "Marx and Engels",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 2,
   "answer": "Ibn Khaldun (Muqaddimah, Chapter 2)",
   "why": "How people make a living shapes who they are. Ibn Khaldun said it more than 450 years before The German Ideology."
  },
  {
   "id": "4",
   "round": 1,
   "type": "Who said it?",
   "prompt": "Doing a few simple tasks all day can make a worker “as stupid and ignorant as it is possible for a human creature to become.”",
   "options": [
    "Marx and Engels",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 1,
   "answer": "Adam Smith (Wealth of Nations, Book V)",
   "why": "Smith worried about this too. His fix is public schooling. Marx’s fix is ending the division of labour."
  },
  {
   "id": "5",
   "round": 1,
   "type": "Multiple choice",
   "prompt": "In Smith’s pin factory, about how many pins can ten workers make in a day by splitting up the job?",
   "options": [
    "About 480",
    "About 4,800",
    "Upwards of 48,000"
   ],
   "correct": 2,
   "answer": "Upwards of 48,000",
   "why": "One worker alone could hardly make 20. Dividing the work multiplies output, which Marx accepts. His question is who ends up owning the pins."
  },
  {
   "id": "6",
   "round": 1,
   "type": "Fill in the blanks",
   "prompt": "Thesis XI: “The philosophers have only ______ the world, in various ways; the point, however, is to ______ it.”",
   "answer": "interpreted; change",
   "why": "The most famous line in the Theses, and the theme of this game: next round, someone gets to change the rules."
  },
  {
   "id": "7",
   "round": 2,
   "type": "Fill in the blanks",
   "prompt": "The Manifesto’s first line: “The history of all hitherto existing society is the history of ______ ______.”",
   "answer": "class struggles",
   "why": "Engels later added a footnote: he meant written history. Before that, he thought, came village communities without classes."
  },
  {
   "id": "8",
   "round": 2,
   "type": "Fill in the blanks",
   "prompt": "Thesis VI: the human essence “in its reality … is the ensemble of the ______ ______.”",
   "answer": "social relations",
   "why": "No fixed human nature: you are your relationships. In this game, too, what matters is whether your team rules, not what it’s called."
  },
  {
   "id": "9",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "Feuerbach treated this tree as plain “nature,” but The German Ideology points out that trade brought it to Europe only a few centuries ago. Which tree?",
   "options": [
    "Oak",
    "Cherry",
    "Pine"
   ],
   "correct": 1,
   "answer": "Cherry",
   "why": "Even the “nature” around us is shaped by history and trade."
  },
  {
   "id": "10",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "The Manifesto says the executive of the modern state is a committee for managing the common affairs of…",
   "options": [
    "the whole people",
    "the whole bourgeoisie",
    "the working class"
   ],
   "correct": 1,
   "answer": "the whole bourgeoisie",
   "why": "That’s why our Banker plays the State: it enforces whatever the Ruling Class decides."
  },
  {
   "id": "11",
   "round": 2,
   "type": "Multiple choice",
   "prompt": "In communist society, says The German Ideology, you could hunt in the morning, fish in the afternoon, rear cattle in the evening, and ______ after dinner.",
   "options": [
    "sleep",
    "criticise",
    "pray"
   ],
   "correct": 1,
   "answer": "criticise",
   "why": "Nobody is stuck being “a hunter” or “a critic” for life once the division of labour is gone."
  }
 ],
 "tiebreakers": [
  {
   "id": "T1",
   "prompt": "In what year was The German Ideology first published? Closest guess wins.",
   "answer": "1932",
   "why": "Marx and Engels left the manuscript to “the gnawing criticism of the mice.”"
  },
  {
   "id": "T2",
   "prompt": "According to The German Ideology, how many vagabonds did Henry VIII of England have hanged? Closest guess wins.",
   "answer": "72,000",
   "why": "Peasants pushed off the land became vagabonds before factories could absorb them."
  }
 ],
 "hard": [
  {
   "id": "H1",
   "prompt": "“Estranged Labour” says the worker is estranged in four ways. Name any two.",
   "answer": "From the product of their labour; from the act of working; from their species-being (human nature); from other people."
  },
  {
   "id": "H2",
   "prompt": "The Manifesto says the bourgeoisie gets out of economic crises in two ways. Name both.",
   "answer": "Destroying a mass of productive forces; conquering new markets and exploiting old ones more thoroughly. Both set up bigger crises later."
  },
  {
   "id": "H3",
   "prompt": "The German Ideology traces forms of ownership through history. Name the first two, in order.",
   "answer": "Tribal ownership, then ancient communal and State ownership (as in Rome)."
  },
  {
   "id": "H4",
   "prompt": "Thesis III says “it is essential to educate the ______ himself.” Fill it in and say why.",
   "answer": "Educator. People change their circumstances, not only the other way round, so no group can stand above society as its teacher."
  }
 ],
 "prompts": [
  {
   "id": "P1",
   "prompt": "Explain Thesis XI (“interpret” vs. “change”) using an example from student life.",
   "answer": "A good answer separates describing a problem from acting on it, for example analysing why campus jobs pay badly versus organising to change it. Bonus for Thesis II: truth is proved in practice."
  },
  {
   "id": "P2",
   "prompt": "Smith says people have a natural “propensity to truck, barter, and exchange.” How would Thesis VI answer him?",
   "answer": "There is no fixed nature inside each person; the human essence is “the ensemble of the social relations.” Smith is mistaking a habit of commercial society for human nature."
  }
 ],
 "bonus": [
  {
   "id": "B1",
   "type": "Who said it?",
   "prompt": "Employers are “always and every where in a sort of tacit, but constant and uniform combination” to keep wages down.",
   "options": [
    "Marx and Engels",
    "Adam Smith",
    "Ibn Khaldun"
   ],
   "correct": 1,
   "answer": "Adam Smith (Wealth of Nations, Book I)",
   "why": "Smith already sees the conflict between masters and workers that the Manifesto builds on."
  },
  {
   "id": "B2",
   "type": "True or false",
   "prompt": "Ibn Khaldun thought city luxury makes a ruling group stronger with every generation.",
   "options": [
    "True",
    "False"
   ],
   "correct": 1,
   "answer": "False",
   "why": "Luxury weakens group feeling, so dynasties usually decline within a few generations and a tougher group takes over."
  },
  {
   "id": "B3",
   "type": "Multiple choice",
   "prompt": "Ibn Khaldun’s word for the group feeling that lets a people conquer and rule is…",
   "options": [
    "hadara",
    "asabiyyah",
    "umran"
   ],
   "correct": 1,
   "answer": "asabiyyah",
   "why": "Hadara is settled city life and umran is civilisation. Asabiyyah is the Bedouin team’s cry."
  },
  {
   "id": "B4",
   "type": "Multiple choice",
   "prompt": "The German Ideology says ideology shows people and their circumstances upside down, as in a…",
   "options": [
    "mirror",
    "camera obscura",
    "telescope"
   ],
   "correct": 1,
   "answer": "camera obscura",
   "why": "Ideas look like they come first, but they are really flipped images of material life."
  },
  {
   "id": "B5",
   "type": "Fill in the blank",
   "prompt": "Estranged Labour: “The worker becomes all the poorer the more ______ he produces.”",
   "answer": "wealth",
   "why": "Compare Smith’s pin factory: more output, but not for the person making it."
  },
  {
   "id": "B6",
   "type": "Multiple choice",
   "prompt": "The Manifesto says cheap prices are the “heavy artillery” the bourgeoisie uses to batter down all ______ walls.",
   "options": [
    "Roman",
    "Chinese",
    "city"
   ],
   "correct": 1,
   "answer": "Chinese",
   "why": "Trade, not armies, pulls every nation into the world market."
  },
  {
   "id": "B7",
   "type": "Fill in the blank",
   "prompt": "Thesis X: “The standpoint of the old materialism is ‘civil’ society; the standpoint of the new is ______ society, or socialised humanity.”",
   "answer": "human",
   "why": "Marx moves from isolated individuals in a market to people as members of society."
  }
 ],
 "debrief": [
  [
   "The leader wrote the rules",
   "The ruling class’s ideas become everyone’s ideas",
   "German Ideology, p. 172"
  ],
  [
   "The “good for everyone” speech",
   "Every class dresses up its interest as the common interest",
   "German Ideology, p. 174"
  ],
  [
   "The Banker enforced it",
   "The state as “a committee” for the ruling class",
   "Manifesto, p. 475"
  ],
  [
   "Teams undercut each other",
   "Competition between workers pushes wages down",
   "Manifesto, p. 479"
  ],
  [
   "The worker team didn’t get the 3",
   "Estranged labour: the product belongs to someone else",
   "Estranged Labour, pp. 71–78"
  ],
  [
   "Your team name didn’t matter, your position did",
   "We are “the ensemble of the social relations”",
   "Thesis VI"
  ],
  [
   "The bribe split the teams",
   "Workers’ unity is “continually being upset” by competition",
   "Manifesto, p. 481"
  ],
  [
   "Teams revolted together",
   "The “ever-expanding union of the workers”",
   "Manifesto, p. 481"
  ]
 ],
 "roundLines": [
  [
   "After Round 1",
   "Smith, Ibn Khaldun and Marx all think how we make a living shapes everything else. They disagree about what to do with that fact."
  ],
  [
   "After Round 2",
   "The Ruling Class just claimed its rule was good for everyone. Marx says every ruling class does this, and the State, our Banker, enforced it."
  ],
  [
   "After Round 3",
   "One team did the work and another got the tokens. That’s estranged labour. And you undercut each other on price, which is exactly how the Manifesto says wages fall."
  ]
 ],
 "endings": [
  {
   "key": "revolution",
   "label": "Revolution won",
   "line": "You won together, the Manifesto’s “ever-expanding union of the workers.” And nobody replaced the Ruling Class. That’s Marx’s big claim: this revolution ends class rule itself."
  },
  {
   "key": "survived",
   "label": "Ruling Class survived",
   "line": "The bribe or a weak answer saved the rulers. The Manifesto says workers’ unity is “continually being upset” by competition between them, and the ruling class uses that."
  }
 ],
 "discussion": [
  {
   "id": "D1",
   "prompt": "Marx praises capitalism for wonders “far surpassing Egyptian pyramids.” Is he being sincere, or does his argument need capitalism to be this productive?",
   "hint": "The German Ideology says that without huge productive forces, communism would just make “want” general (p. 161)."
  },
  {
   "id": "D2",
   "prompt": "Thesis XI says philosophers only interpret the world. Is the Manifesto just more interpreting, or does a text start changing the world once people organise around it?",
   "hint": "The German Ideology mocks thinkers who fight “phrases” with more phrases (p. 149)."
  },
  {
   "id": "D3",
   "prompt": "Ibn Khaldun sees history as a cycle: a united group takes power, gets comfortable, and is replaced. Is Marx’s revolution the end of that cycle, or just its next turn?",
   "hint": "Marx says the proletariat is “the immense majority” and the lowest layer of society, so its rise brings down the whole structure (Manifesto, p. 482)."
  },
  {
   "id": "D4",
   "prompt": "Smith says self-interest gets us our dinner. The Manifesto says it leaves nothing between people but “callous cash payment.” Do they disagree about the facts, or only about whether it’s good?",
   "hint": "Smith himself worried that repetitive work makes workers “stupid and ignorant” and that employers collude to keep wages down."
  },
  {
   "id": "D5",
   "prompt": "Thesis II says truth is proved in practice. By that test, how well has the Manifesto held up?",
   "hint": "Think of what came true (a world market, constant change) and what didn’t (society splitting into just two classes)."
  }
 ]
};
