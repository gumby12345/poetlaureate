(() => {
  const DEFAULT_WORDS = [
    "the","a","an","and","but","or","if","you","i","we","they","he","she",
    "am","is","are","was","were","be","being","have","has","had","do","does",
    "will","would","can","could","should","not","no","yes","my","your","our",
    "this","that","these","those","me","us","them","here","there","where",
    "what","who","when","why","how","love","want","need","know","feel","see",
    "look","make","take","give","find","keep","leave","come","go","stay",
    "walk","run","fall","fly","dream","remember","forget","listen","wait",
    "like","into","from","with","without","for","to","of","in","on","under",
    "over","through","around","inside","outside","before","after","again",
    "still","always","never","only","almost","very","more","less","so",
    "just","now","then","today","tomorrow","yesterday","night","morning",
    "day","time","world","home","room","door","window","street","water",
    "rain","snow","sun","moon","star","sky","sea","ocean","river","wind",
    "tree","flower","bird","cat","dog","heart","hand","eyes","mouth","voice",
    "little","big","small","long","short","blue","red","green","gold",
    "quiet","loud","soft","dark","bright","warm","cold","old","new",
    "beautiful","strange","lonely","happy","sad","wild","free","near",
    "far","alive","alone","together","nothing","everything","something",
    "someone","somewhere","because","maybe","perhaps","please","hello",
    "goodbye","beautifully","slowly"
  ];

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
