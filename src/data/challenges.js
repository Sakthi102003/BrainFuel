// 90 challenges: 30 easy, 30 medium, 30 hard
export const CHALLENGES = [
  // EASY - FITNESS (10)
  { text: 'Do 10 jumping jacks', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 30 },
  { text: 'Stretch your arms and neck for 2 minutes', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 120 },
  { text: 'Take a 5-minute walk around your space', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 300 },
  { text: 'Do 5 slow squats', cat: 'fitness', diff: 'easy', kind: 'checklist', items: ['Do 5 squats', 'Done'] },
  { text: 'Stand up and sit down 10 times', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 60 },
  { text: 'Hold a plank for 20 seconds', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 20 },
  { text: 'Do 10 shoulder rolls', cat: 'fitness', diff: 'easy', kind: 'checklist', items: ['Roll shoulders back', 'Roll shoulders forward', 'Done'] },
  { text: 'March in place for 1 minute', cat: 'fitness', diff: 'easy', kind: 'timer', duration: 60 },
  { text: 'Touch your toes 5 times', cat: 'fitness', diff: 'easy', kind: 'checklist', items: ['Bend down slowly', 'Touch toes 5x', 'Done'] },
  { text: 'Do 8 wall push-ups', cat: 'fitness', diff: 'easy', kind: 'checklist', items: ['Find a wall', 'Do 8 push-ups', 'Done'] },

  // EASY - CREATIVITY (10)
  { text: 'Draw a simple doodle of your mood', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Grab paper/digital', 'Draw your mood', 'Done'] },
  { text: 'Write 3 things you are grateful for', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Think of 3 things', 'Write them down', 'Done'] },
  { text: 'Come up with 5 silly band names', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Think of 5 names', 'Write them', 'Done'] },
  { text: 'Take a creative photo of something nearby', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Find object', 'Take photo', 'Done'] },
  { text: 'Write a one-sentence story', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Think of story', 'Write one sentence', 'Done'] },
  { text: 'Hum or sing a favorite tune for 1 minute', cat: 'creativity', diff: 'easy', kind: 'timer', duration: 60 },
  { text: 'Write a haiku about your breakfast', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Write 3 lines', 'Done'] },
  { text: 'List 5 words that rhyme with fun', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Think of rhymes', 'Write 5 words', 'Done'] },
  { text: 'Invent a new emoji and describe it', cat: 'creativity', diff: 'easy', kind: 'checklist', items: ['Think of emoji', 'Describe it', 'Done'] },
  { text: 'Color or shade something for 3 minutes', cat: 'creativity', diff: 'easy', kind: 'timer', duration: 180 },

  // EASY - PRODUCTIVITY (5)
  { text: 'Clear 5 browser tabs you do not need', cat: 'productivity', diff: 'easy', kind: 'checklist', items: ['Open browser', 'Close 5 tabs', 'Done'] },
  { text: 'Organize your desktop icons', cat: 'productivity', diff: 'easy', kind: 'checklist', items: ['Group icons', 'Delete unused', 'Done'] },
  { text: 'Delete 3 old emails', cat: 'productivity', diff: 'easy', kind: 'checklist', items: ['Open email', 'Delete 3', 'Done'] },
  { text: 'Make a quick to-do list for today', cat: 'productivity', diff: 'easy', kind: 'checklist', items: ['List 3-5 tasks', 'Done'] },
  { text: 'Set one timer reminder for later', cat: 'productivity', diff: 'easy', kind: 'checklist', items: ['Pick task', 'Set reminder', 'Done'] },

  // EASY - CHAOS (5)
  { text: 'Send a random meme to a friend', cat: 'chaos', diff: 'easy', kind: 'checklist', items: ['Find meme', 'Send it', 'Done'] },
  { text: 'Wear mismatched socks today', cat: 'chaos', diff: 'easy', kind: 'checklist', items: ['Find 2 different socks', 'Put them on', 'Done'] },
  { text: 'Make a weird face in the mirror for 10 seconds', cat: 'chaos', diff: 'easy', kind: 'timer', duration: 10 },
  { text: 'Say something in a silly accent for 30 seconds', cat: 'chaos', diff: 'easy', kind: 'timer', duration: 30 },
  { text: 'Shuffle a playlist and dance to the first song', cat: 'chaos', diff: 'easy', kind: 'checklist', items: ['Shuffle playlist', 'Dance', 'Done'] },

  // MEDIUM - FITNESS (10)
  { text: 'Do 20 squats before coffee', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 90 },
  { text: 'Hold a plank for 45 seconds', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 45 },
  { text: 'Do 15 push-ups (modified OK)', cat: 'fitness', diff: 'medium', kind: 'checklist', items: ['Do 15 push-ups', 'Rest if needed', 'Done'] },
  { text: 'Dance for 3 minutes to any song', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 180 },
  { text: 'Do 25 jumping jacks', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 60 },
  { text: 'Walk or jog in place for 5 minutes', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 300 },
  { text: 'Do 10 lunges on each leg', cat: 'fitness', diff: 'medium', kind: 'checklist', items: ['10 lunges left leg', '10 lunges right leg', 'Done'] },
  { text: 'Hold a wall sit for 30 seconds', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 30 },
  { text: 'Do 20 high knees', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 45 },
  { text: 'Complete a 7-minute stretch routine', cat: 'fitness', diff: 'medium', kind: 'timer', duration: 420 },

  // MEDIUM - CREATIVITY (10)
  { text: 'Write 200 words of a short story', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 600 },
  { text: 'Draw a self-portrait (any style)', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 600 },
  { text: 'Create a 4-line poem about nature', cat: 'creativity', diff: 'medium', kind: 'checklist', items: ['Pick nature theme', 'Write 4 lines', 'Done'] },
  { text: 'Design a logo for an imaginary company', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 480 },
  { text: 'Write a letter to your future self (100 words)', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 420 },
  { text: 'Compose a 30-second melody or beat', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 300 },
  { text: 'Take 5 creative photos with a theme', cat: 'creativity', diff: 'medium', kind: 'checklist', items: ['Pick theme', 'Take 5 photos', 'Done'] },
  { text: 'Write dialogue for 2 characters meeting', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 480 },
  { text: 'Sketch 3 objects from your room', cat: 'creativity', diff: 'medium', kind: 'checklist', items: ['Pick 3 objects', 'Sketch each', 'Done'] },
  { text: 'Brainstorm 10 video game ideas in 5 minutes', cat: 'creativity', diff: 'medium', kind: 'timer', duration: 300 },

  // MEDIUM - PRODUCTIVITY (5)
  { text: 'Try the Pomodoro: 25 minutes focused work', cat: 'productivity', diff: 'medium', kind: 'timer', duration: 1500 },
  { text: 'Declutter one desktop folder', cat: 'productivity', diff: 'medium', kind: 'checklist', items: ['Pick one folder', 'Delete or move files', 'Done'] },
  { text: 'Unsubscribe from 5 email lists', cat: 'productivity', diff: 'medium', kind: 'checklist', items: ['Find 5 newsletters', 'Unsubscribe', 'Done'] },
  { text: 'Plan your meals for tomorrow', cat: 'productivity', diff: 'medium', kind: 'checklist', items: ['Plan breakfast/lunch/dinner', 'Write it down', 'Done'] },
  { text: 'Review and update your calendar for the week', cat: 'productivity', diff: 'medium', kind: 'checklist', items: ['Open calendar', 'Add/remove events', 'Done'] },

  // MEDIUM - CHAOS (5)
  { text: 'Send a kind message to someone random', cat: 'chaos', diff: 'medium', kind: 'checklist', items: ['Think of someone', 'Write message', 'Send'] },
  { text: 'Take a 5-minute chaos photo walk with weird angles only', cat: 'chaos', diff: 'medium', kind: 'timer', duration: 300 },
  { text: 'Talk in rhymes for the next 3 minutes', cat: 'chaos', diff: 'medium', kind: 'timer', duration: 180 },
  { text: 'Rearrange 3 things on your desk for no reason', cat: 'chaos', diff: 'medium', kind: 'checklist', items: ['Pick 3 items', 'Move them', 'Done'] },
  { text: 'Learn and say hello in 5 new languages', cat: 'chaos', diff: 'medium', kind: 'checklist', items: ['Look up 5 languages', 'Practice saying hello', 'Done'] },

  // HARD - FITNESS (10)
  { text: 'Do 50 squats without stopping', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 180 },
  { text: 'Hold a plank for 2 minutes', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 120 },
  { text: 'Do 30 burpees', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 240 },
  { text: 'Complete a 15-minute cardio workout', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 900 },
  { text: 'Do 100 jumping jacks', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 300 },
  { text: 'Run or jog for 10 minutes', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 600 },
  { text: 'Do 25 push-ups (full form)', cat: 'fitness', diff: 'hard', kind: 'checklist', items: ['Do 25 push-ups', 'Rest only if needed', 'Done'] },
  { text: 'Hold a wall sit for 90 seconds', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 90 },
  { text: 'Do 20 lunges per leg plus 20 squats', cat: 'fitness', diff: 'hard', kind: 'checklist', items: ['20 lunges each leg', '20 squats', 'Done'] },
  { text: 'Complete a 20-minute yoga flow', cat: 'fitness', diff: 'hard', kind: 'timer', duration: 1200 },

  // HARD - CREATIVITY (10)
  { text: 'Write a complete short story (500+ words)', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1800 },
  { text: 'Create a detailed character profile for a novel', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 900 },
  { text: 'Compose and record a 1-minute original song', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1200 },
  { text: 'Draw a detailed landscape or cityscape', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1500 },
  { text: 'Write 10 haikus on different themes', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 900 },
  { text: 'Design a full poster for a fake movie', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1800 },
  { text: 'Write a script for a 2-minute comedy sketch', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1200 },
  { text: 'Create a detailed world map for a fantasy novel', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1500 },
  { text: 'Write and illustrate a 4-page comic strip', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 2400 },
  { text: 'Produce a 20-photo series with a narrative', cat: 'creativity', diff: 'hard', kind: 'timer', duration: 1200 },

  // HARD - PRODUCTIVITY (5)
  { text: 'Deep clean and organize your entire workspace', cat: 'productivity', diff: 'hard', kind: 'timer', duration: 1800 },
  { text: 'Complete a 50-minute Pomodoro work session', cat: 'productivity', diff: 'hard', kind: 'timer', duration: 3000 },
  { text: 'Achieve inbox zero', cat: 'productivity', diff: 'hard', kind: 'checklist', items: ['Read all emails', 'Archive/delete/respond', 'Reach 0 inbox', 'Done'] },
  { text: 'Plan your entire month: goals, tasks, events', cat: 'productivity', diff: 'hard', kind: 'timer', duration: 1500 },
  { text: 'Audit and optimize 10 recurring tasks or habits', cat: 'productivity', diff: 'hard', kind: 'checklist', items: ['List 10 tasks', 'Find improvements', 'Document changes', 'Done'] },

  // HARD - CHAOS (5)
  { text: 'Learn and perform a 1-minute magic trick', cat: 'chaos', diff: 'hard', kind: 'timer', duration: 900 },
  { text: 'Create a 30-second TikTok-style video challenge', cat: 'chaos', diff: 'hard', kind: 'timer', duration: 1200 },
  { text: 'Speak only in questions for 10 minutes', cat: 'chaos', diff: 'hard', kind: 'timer', duration: 600 },
  { text: 'Invent a new board game with full rules', cat: 'chaos', diff: 'hard', kind: 'timer', duration: 1800 },
  { text: 'Teach yourself to juggle 3 objects', cat: 'chaos', diff: 'hard', kind: 'timer', duration: 1200 }
]
