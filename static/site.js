// Site helper: load sounds.json and provide functions to get sounds and generate quiz
window.Site = (function(){
  let ALL_CHORD_FILES = null;
  let CHORD_FILES = {};

  async function initSounds(){
    if (ALL_CHORD_FILES) return;
    try{
      const res = await fetch('static/sounds.json');
      const data = await res.json();
      ALL_CHORD_FILES = data.filter(f => /^\d+/.test(f)).slice().sort();
      for (let i = 1; i < 14; i++){
        CHORD_FILES[i] = ALL_CHORD_FILES.slice(0, i+1);
      }
    }catch(e){
      ALL_CHORD_FILES = [];
    }
  }

  function pick_random(level, last_two){
    const choices = (CHORD_FILES[level] || []).slice();
    if (last_two.length === 2 && last_two[0] === last_two[1] && choices.includes(last_two[0])){
      const idx = choices.indexOf(last_two[0]);
      if (idx >= 0) choices.splice(idx, 1);
    }
    if (!choices.length) return null;
    return choices[Math.floor(Math.random()*choices.length)];
  }

  async function getSoundsForLevel(level){
    await initSounds();
    return CHORD_FILES[level] || [];
  }

  async function generateQuiz(level, num_questions = 10){
    await initSounds();
    const quiz = [];
    const last_two = [];
    for (let i = 0; i < num_questions; i++){
      const note = pick_random(level, last_two);
      if (!note) break;
      quiz.push(note);
      last_two.push(note);
      if (last_two.length > 2) last_two.shift();
    }
    return quiz;
  }

  return { initSounds, getSoundsForLevel, generateQuiz };
})();
