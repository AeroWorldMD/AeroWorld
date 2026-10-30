// INFORMAȚII DESPRE AVIOANE
const aircraftInfo = {
	"Boeing 737": "Avion comercial cu un singur culoar. Este utilizat pentru zboruri scurte și medii.",
	"Airbus A320": "Avion comercial modern, apreciat pentru eficiență și tehnologia de la bord.",
	"Airbus A380": "Un avion cu două punți complete, capabil să transporte sute de pasageri."
};

// FACEM CARDURILE INTERACTIVE
const aircraftCards = document.querySelectorAll(".card");

aircraftCards.forEach(card => {
	card.style.cursor = "pointer";

	card.addEventListener("click", () => {
		const title = card.querySelector("h3").textContent;
		let details = card.querySelector(".aircraft-details");

		if (details) {
			details.remove();
		} else {
			details = document.createElement("p");
			details.className = "aircraft-details";
			details.textContent = aircraftInfo[title];
			card.appendChild(details);
		}
	});
});

console.log("AeroWorld a fost încărcat cu succes!");
