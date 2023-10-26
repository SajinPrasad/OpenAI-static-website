const researchBtn = document.getElementById("researchBtn");
const researchDropdown = document.getElementById("researchDropdown");
const researchArrow = document.getElementById("researchArrow");

const apiBtn = document.getElementById("apiBtn");
const apiDropdown = document.getElementById("apiDropdown");
const apiArrow = document.getElementById("apiArrow");

const chatBtn = document.getElementById("chatBtn");
const chatDropdown = document.getElementById("chatDropdown");
const chatArrow = document.getElementById("chatArrow");

const compBtn = document.getElementById("compBtn");
const compDropdown = document.getElementById("compDropdown");
const compArrow = document.getElementById("compArrow");

const searchBtn = document.getElementById("searchBtn");
const searchDropdown = document.getElementById("searchDropdown");

const closeBtn = document.getElementById("closeBtn");

const hdr = document.getElementById("hdr");

const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");

const menuResearchBtn = document.getElementById("menuResearchBtn");
const menuResearchDropdown = document.getElementById("menuResearchDropdown");

const menuApiBtn = document.getElementById("menuApiBtn");
const menuApiDropdown = document.getElementById("menuApiDropdown");

const menuChatBtn = document.getElementById("menuChatBtn");
const menuChatDropdown = document.getElementById("menuChatDropdown");

const menuCompBtn = document.getElementById("menuCompBtn");
const menuCompDropdown = document.getElementById("menuCompDropdown");

const RMD = document.getElementById("RMD");
const AMD = document.getElementById("AMD");
const ChatMD = document.getElementById("ChatMD");
const ComMD = document.getElementById("ComMD");

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        hdr.classList.add("scrolled")
    } else {
        hdr.classList.remove("scrolled")
    }
})

researchBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeDropdownsExcept(researchDropdown);
    researchDropdown.classList.toggle("show");
    researchArrow.classList.toggle("arrow");
});

apiBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeDropdownsExcept(apiArrow);
    apiDropdown.classList.toggle("show");
    apiArrow.classList.toggle("arrow");
});

chatBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  closeDropdownsExcept(chatDropdown);
  chatDropdown.classList.toggle("show");
  chatArrow.classList.toggle("arrow");
});

compBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  closeDropdownsExcept(compDropdown);
  compDropdown.classList.toggle("show");
  compArrow.classList.toggle("arrow");
});

searchBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeDropdownsExcept(searchDropdown);
    searchDropdown.classList.toggle("show");
});

searchDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function (e) {
    closeDropdownsExcept();
    if (searchDropdown.classList.contains("show")) {
        searchDropdown.classList.remove("show");
    }
});

closeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    if (searchDropdown.classList.contains("show")) {
        searchDropdown.classList.remove("show")
    }
    
})

menuBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    menuDropdown.classList.add("show");
})

menuDropdown.addEventListener("click", function(e) {
    e.stopPropagation();
});


document.addEventListener("click", function (e) {
    if (menuDropdown.classList.contains("show")) {
        menuDropdown.classList.remove("show")
    }
}) 

menuResearchBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    menuResearchDropdown.classList.toggle("show");
    RMD.classList.toggle("custombottommargin");
})

menuApiBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    menuApiDropdown.classList.toggle("show");
    AMD.classList.toggle("custombottommargin");
})

menuChatBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    menuChatDropdown.classList.toggle("show");
    ChatMD.classList.toggle("custombottommargin");
})

menuCompBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    menuCompDropdown.classList.toggle("show");
    ComMD.classList.toggle("custombottommargin");
})

function closeDropdownsExcept(exceptDropdown = null) {
    const dropdowns = document.querySelectorAll(".dropdown");
    const arrows = document.querySelectorAll("[id$='Arrow']");
    
    dropdowns.forEach(dropdown => {
        if (dropdown !== exceptDropdown && dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    });

    arrows.forEach(arrow => {
        if (arrow !== exceptDropdown && arrow.classList.contains("arrow")) {
            arrow.classList.remove("arrow");
        }
    });
}

const pauseBtn = document.getElementById("pauseBtn");
const homeVideo = document.getElementById("homeVideo");
const pauseSVG = document.getElementById("playSVG");
const playSVG = document.getElementById("playSVG")

function toggleVideo () {
    if (homeVideo.paused) {
        homeVideo.play();
        pauseBtn.textContent = "Pause video";
        //pauseSVG.classList.add("show");
    } else {
        homeVideo.pause();
        pauseBtn.textContent = "Play video";
        //playSVG.classList.add("show");
    }
}

pauseBtn.addEventListener("click", () => {
    toggleVideo();
})



