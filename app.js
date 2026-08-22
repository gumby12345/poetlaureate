(() => {
  const DEFAULT_WORDS = [
 "&", "&", "a", "a", "a", "a", "a", "a", "about", "above", "ache", "ad", "after", "all", "am", "am", "an", "an", "and", "and", "and", "and", "apparatus", "are", "are", "arm", "as", "as", "as", "as", "ask", "at", "at", "away", "bare", "be", "beat", "beauty", "bed", "beneath", "bitter", "black", "blood", "blow", "blue", "boil", "boy", "breast", "but", "but", "but", "but", "butt", "by", "by", "can", "chant", "chocolate", "cool", "could", "crush", "cry", "d", "day", "death", "delirious", "diamond", "did", "do", "do", "dream", "dress", "drive", "drool", "drunk", "eat", "ed", "ed", "ed", "ed", "egg", "elaborate", "enormous", "er", "es", "est", "fast", "feet", "fiddle", "finger", "fluff", "for", "forest", "frantic", "friend", "from", "from", "garden", "gir", "l", "go", "goddess", "gorgeous", "gown", "hair", "has", "have", "have", "he", "he", "head", "heave", "her", "her", "here", "him", "his", "his", "honey", "hot", "how", "IIII", "if", "in", "in", "ing", "ing", "ing", "ing", "ing", "ing", "is", "is", "is", "is", "it", "it", "juice", "lake", "language", "languid", "lather", "lazy", "less", "let", "lick", "lie", "life", "light", "like", "like", "like", "live", "love", "luscious", "lust", "ly", "ly", "ly", "ly", "mad", "man", "me", "me", "me", "mean", "meat", "men", "milk", "mist", "moan", "moon", "mother", "music", "must", "my", "my", "need", "never", "no", "no", "not", "not", "of", "of", "of", "of", "on", "on", "one", "or", "our", "over", "pant", "peach", "petal", "picture", "pink", "play", "please", "pole", "pound", "puppy", "purple", "put", "r", "r", "rain", "raw", "recall", "red", "repulsive", "rip", "rock", "rose", "run", "rust", "s", "s", "s", "s", "s", "s", "sad", "said", "sausage", "say", "scream", "sea", "see", "shadow", "she", "she", "shine", "ship", "shot", "show", "sing", "sit", "skin", "sky", "sleep", "smear", "smell", "smooth", "so", "soar", "some", "sordid", "spray", "spring", "still", "stop", "storm", "suit", "summer", "sun", "sweat", "sweet", "swim", "symphony", "the", "the", "the", "the", "the", "their", "there", "these", "they", "those", "though", "thousand", "through", "time", "tiny", "to", "to", "to", "together", "tongue", "trudge", "TV", "ugly", "up", "urge", "us", "use", "want", "want", "was", "watch", "water", "wax", "we", "we", "were", "what", "when", "whisper", "why", "who", "will", "wind", "with", "with", "woman", "worship", "y", "y", "yet", "you", "you", "you", "you", "about", "after", "air", "all", "almost", "always", "am", "an", "an", "and", "and", "and", "and", "angel", "are", "are", "as", "as", "ask", "at", "at", "away", "baby", "be", "belly", "bleed", "blue", "blush", "born", "boy", "breath", "breeze", "brilliant", "bring", "broken", "brother", "bug", "but", "but", "by", "cake", "can", "candy", "caramel", "cat", "celebrate", "champagne", "child", "cloud", "coffee", "color", "come", "concrete", "cool", "corduroy", "could", "crap", "cup", "dd", "dance", "dark", "day", "dazzle", "decay", "delicious", "desire", "devour", "did", "die", "dirt", "do", "do", "dog", "drink", "e", "e", "eat", "ed", "ed", "ed", "embrace", "er", "er", "es", "es", "eternity", "explore", "eye", "fat", "father", "ferocious", "fever", "fire", "fish", "flower", "fly", "fool", "for", "for", "from", "from", "ghost", "girl", "give", "glass", "go", "go", "god", "good", "grass", "green", "growl", "hard", "has", "haunt", "have", "he", "he", "heal", "heart", "her", "her", "here", "him", "his", "hole", "home", "hot", "how", "I", "I", "I", "I", "ice", "if", "in", "in", "ing", "ing", "ing", "ing", "ing", "ing", "ing", "is", "is", "is", "is", "it", "it", "it", "it", "joy", "kiss", "laugh", "less", "let", "lie", "life", "like", "like", "like", "linger", "lip", "liquid", "listen", "live", "long", "look", "magic", "make", "man", "marble", "may", "me", "me", "melt", "men", "moist", "more", "morning", "must", "my", "my", "naked", "need", "never", "night", "no", "no", "not", "not", "o", "ocean", "of", "of", "of", "of", "old", "on", "on", "one", "only", "open", "or", "our", "out", "over", "peace", "perfume", "picture", "pie", "poetry", "poison", "porcelain", "prisoner", "put", "rr", "red", "remember", "rhythm", "sacred", "sad", "said", "sail", "salt", "secret", "see", "self", "sex", "she", "she", "sister", "sky", "slow", "smile", "smoke", "so", "soft", "some", "son", "star", "steam", "steel", "surround", "than", "that", "the", "the", "the", "the", "their", "them", "then", "there", "they", "thing", "this", "this", "those", "though", "throb", "time", "to", "to", "to", "to", "tree", "two", "universe", "up", "use", "vast", "velvet", "voice", "wake", "warm", "was", "we", "we", "were", "wet", "when", "which", "who", "wild", "will", "window", "with", "with", "woman", "women", "word", "work", "would", "yet", "you", "you", "you", "young"

  const canvas = document.getElementById("canvas");
  const wordbank = document.getElementById("wordbank");
  const dialog = document.getElementById("wordDialog");
  const wordForm = document.getElementById("wordForm");
  const wordInput = document.getElementById("wordInput");
  const addWordsButton = document.getElementById("addWordsButton");
  const closeDialog = document.getElementById("closeDialog");
  const clearButton = document.getElementById("clearButton");
  const resetCustomButton = document.getElementById("resetCustomButton");

  const CUSTOM_KEY = "little-poetry-machine-custom-words";
  const POEM_KEY = "little-poetry-machine-poem";

  let customWords = loadJSON(CUSTOM_KEY, []);
  let poem = loadJSON(POEM_KEY, []);

  function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  }

  function save() {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customWords));
    localStorage.setItem(POEM_KEY, JSON.stringify(poem));
  }

  function uid() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  function allWords() {
    return [...DEFAULT_WORDS, ...customWords];
  }

  function usedCount(word) {
    return poem.filter(t => t.text === word).length;
  }

  function renderBank() {
    wordbank.innerHTML = "";
    const available = allWords();

    available.forEach(word => {
      const availableCount = available.filter(w => w === word).length - usedCount(word);
      if (availableCount <= 0) return;

      const tile = createTile({ text: word, bank: true });
      wordbank.appendChild(tile);
    });
  }

  function renderPoem() {
    canvas.querySelectorAll(".tile").forEach(el => el.remove());

    const rect = canvas.getBoundingClientRect();
    poem.forEach(item => {
      const tile = createTile(item);
      canvas.appendChild(tile);
      const x = Math.max(4, Math.min(item.x, rect.width - tile.offsetWidth - 4));
      const y = Math.max(4, Math.min(item.y, rect.height - tile.offsetHeight - 4));
      tile.style.left = `${x}px`;
      tile.style.top = `${y}px`;
    });
  }

  function createTile(item) {
    const tile = document.createElement("div");
    tile.className = `tile${item.bank ? " bank-tile" : ""}`;
    tile.textContent = item.text;
    tile.dataset.id = item.id || "";
    if (!item.bank) {
      tile.style.left = `${item.x}px`;
      tile.style.top = `${item.y}px`;
    }
    makeDraggable(tile, item);
    return tile;
  }

  function addToPoem(text, x, y) {
    const rect = canvas.getBoundingClientRect();
    const id = uid();
    const item = {
      id,
      text,
      x: Math.max(8, Math.min(x, rect.width - 100)),
      y: Math.max(8, Math.min(y, rect.height - 35))
    };
    poem.push(item);
    save();
    renderBank();
    const tile = createTile(item);
    tile.classList.add("new-tile");
    canvas.appendChild(tile);
    tile.style.left = `${item.x}px`;
    tile.style.top = `${item.y}px`;
  }

  function makeDraggable(tile, item) {
    let startX, startY, originX, originY, moved = false;

    tile.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      tile.setPointerCapture(event.pointerId);
      tile.classList.add("dragging");
      moved = false;
      startX = event.clientX;
      startY = event.clientY;

      if (item.bank) {
        originX = 0;
        originY = 0;
      } else {
        originX = item.x;
        originY = item.y;
      }
    });

    tile.addEventListener("pointermove", (event) => {
      if (!tile.hasPointerCapture(event.pointerId)) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;

      if (item.bank) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left - tile.offsetWidth / 2;
        const y = event.clientY - rect.top - tile.offsetHeight / 2;
        tile.style.position = "fixed";
        tile.style.left = `${event.clientX - tile.offsetWidth / 2}px`;
        tile.style.top = `${event.clientY - tile.offsetHeight / 2}px`;
        tile.style.zIndex = "20";
        tile.dataset.dropX = x;
        tile.dataset.dropY = y;
      } else {
        const rect = canvas.getBoundingClientRect();
        item.x = Math.max(4, Math.min(originX + dx, rect.width - tile.offsetWidth - 4));
        item.y = Math.max(4, Math.min(originY + dy, rect.height - tile.offsetHeight - 4));
        tile.style.left = `${item.x}px`;
        tile.style.top = `${item.y}px`;
      }
    });

    tile.addEventListener("pointerup", (event) => {
      tile.releasePointerCapture(event.pointerId);
      tile.classList.remove("dragging");

      if (item.bank) {
        const x = Number(tile.dataset.dropX);
        const y = Number(tile.dataset.dropY);
        tile.style.position = "";
        tile.style.left = "";
        tile.style.top = "";
        tile.style.zIndex = "";
        delete tile.dataset.dropX;
        delete tile.dataset.dropY;

        if (moved && Number.isFinite(x) && Number.isFinite(y) &&
            x > -20 && y > -20 &&
            x < canvas.clientWidth + 20 && y < canvas.clientHeight + 20) {
          addToPoem(item.text, x, y);
        }
      } else if (moved) {
        save();
      }
    });

    tile.addEventListener("dblclick", () => {
      if (item.bank) return;
      poem = poem.filter(p => p.id !== item.id);
      save();
      renderPoem();
      renderBank();
    });

    tile.addEventListener("contextmenu", (event) => {
      if (item.bank) return;
      event.preventDefault();
      poem = poem.filter(p => p.id !== item.id);
      save();
      renderPoem();
      renderBank();
    });
  }

  addWordsButton.addEventListener("click", () => {
    wordInput.value = "";
    dialog.showModal();
    setTimeout(() => wordInput.focus(), 20);
  });

  closeDialog.addEventListener("click", () => dialog.close());

  wordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const words = wordInput.value
      .split(/\n|,/)
      .map(w => w.trim())
      .filter(Boolean);

    customWords.push(...words);
    save();
    renderBank();
    dialog.close();
  });

  resetCustomButton.addEventListener("click", () => {
    if (!customWords.length) return;
    customWords = [];
    save();
    renderBank();
  });

  clearButton.addEventListener("click", () => {
    if (!poem.length) return;
    poem = [];
    save();
    renderPoem();
    renderBank();
  });

  window.addEventListener("resize", () => {
    const rect = canvas.getBoundingClientRect();
    poem.forEach(item => {
      item.x = Math.max(4, Math.min(item.x, rect.width - 90));
      item.y = Math.max(4, Math.min(item.y, rect.height - 35));
    });
    save();
    renderPoem();
  });

  renderBank();
  renderPoem();
})();
