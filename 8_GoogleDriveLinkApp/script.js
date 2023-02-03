// -----------DOM elemets queries-------------

const links = document.querySelector("ul");
const inputedLink = document.querySelector("#gdlink");
const generateButton = document.querySelector(".generate button");
const copyButton = document.querySelector("#copy");
const copyButton2 = document.querySelector("#copy2");
const copyButton3 = document.querySelector("#copy3");
const linkTab = document.querySelector(".link-tab");
const audioTab = document.querySelector(".audio-tab");
const videoTab = document.querySelector(".video-tab");
const resultDirect = document.querySelector("#result-direct");
const resultAudio = document.querySelector("#result-audio");
const resultVideo = document.querySelector("#result-video");

// -----------event listeners-----------

generateButton.addEventListener("click", pasteLinks);

copyButton.addEventListener("click", copyToClipboard);
copyButton2.addEventListener("click", copyToClipboard);
copyButton3.addEventListener("click", copyToClipboard);

links.addEventListener("click", activateSection);

// --------FUNCTIONS---------

//  change tab section

function activateSection(el) {
  el.preventDefault();
  let hash = el.target.hash;
  switch (hash) {
    case "#generate-tab":
      showSection(linkTab);
      hideSection(audioTab);
      hideSection(videoTab);
      makeActive(el);
      break;

    case "#audio-tab":
      hideSection(linkTab);
      showSection(audioTab);
      hideSection(videoTab);
      makeActive(el);
      break;

    case "#video-tab":
      hideSection(linkTab);
      hideSection(audioTab);
      showSection(videoTab);
      makeActive(el);
      break;

    default:
      break;
  }
}

function showSection(el) {
  if (el.classList.contains("d-none")) {
    el.classList.remove("d-none");
    return;
  }
}

function hideSection(el) {
  if (!el.classList.contains("d-none")) {
    el.classList.add("d-none");
    return;
  }
}
function makeActive(el) {
  document.querySelectorAll(".active")[0].classList.remove("active");
  el.target.classList.add("active");
}

// link handlers functions

function copyToClipboard(el) {
  el.preventDefault();
  let result = this.parentElement.firstElementChild.value;
  navigator.clipboard.writeText(result);
  alert("Link has been copied to clipboard!");
  return;
}

function generateLink() {
  const directDownLinkStart = "https://drive.google.com/uc?export=download&id=";
  let wholeLink = inputedLink.value;
  let changedLink = wholeLink
    .replace("https://drive.google.com/file/d/", directDownLinkStart)
    .replace("/view?usp=share_link", "");
  return changedLink;
}

function makeAudioLink() {
  let audioLinkStart = '<audio width="300" height=32 controls="controls" src="';
  let audioLinkEnd = '" type="audio/mp3"></audio>';
  return audioLinkStart + generateLink() + audioLinkEnd;
}

function makeVideoLink() {
  let videoLinkStart = '<iframe src="';
  let videoLinkEnd = '/preview" width="560" height="315"></iframe>';
  return videoLinkStart + generateLink() + videoLinkEnd;
}

function pasteLinks(el) {
  el.preventDefault();
  if (!inputedLink.value) {
    alert("please paste link to input field first!!!");
  } else {
    resultDirect.value = generateLink();
    resultAudio.value = makeAudioLink();
    resultVideo.value = makeVideoLink();
    return;
  }
}
