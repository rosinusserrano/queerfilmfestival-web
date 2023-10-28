export interface ProgrammEntry {
	time: string;
	location: string;
	title: string;
}

const locations = {
	luruspin: "Luru Kino (Alte Spinnerei)",
	luru: "Luru Kino",
	heiz: "Heizhaus",
	cine: "cineding",
	ostg: "OstGarage",
	poege: "Pögehaus",
	osta: "Ost Apotheke",
	fuge: "Fuge",
	prag: "Prager Frühling",
	candy: "CandyCrush",
	juicy: "Juicy",
	hop: "Hop",
};

export const programmMittwoch: ProgrammEntry[] = [
    {
        title: "Festivalzentrale",
        location: `${locations.luru} (Café/Bar)`,
        time: "ab 14 Uhr"
    },
    {
        title: "Festivalzentrale",
        location: `${locations.luru} (Café/Bar)`,
        time: "18:00 - 23:00 Uhr"
    },
	{
		title: "Eröffnung",
		location: locations.luruspin,
		time: "18:30 - 19:00 Uhr",
	},
	{
		title: "Peformance mit Video",
		location: locations.luru,
		time: "19:00 - 19:20 Uhr",
	},
	{
		title: "Pornfilme 1",
		location: locations.luru,
		time: "20:00 - 22:00 Uhr",
	},
];

export const programmDonnerstag: ProgrammEntry[] = [
    {
        title: "Festivalzentrale",
        location: `${locations.luru} (Café/Bar)`,
        time: "14:00 - 18:00 Uhr"
    },
	{
		title: "Jugendlangspielfilm 1",
		location: locations.luru,
		time: "16:00 - 17:45 Uhr",
	},
	{
		title: "Workshop Voging",
		location: locations.heiz,
		time: "15:00 - 16:00 Uhr",
	},
    {
        title: "Festivalzentrale",
        location: `${locations.cine} (Bar)`,
        time: "18:00 - 24:00 Uhr"
    },
	{
		title: "Porn",
		location: locations.cine,
		time: "18:30 - 20:00 Uhr",
	},
	{
		title: "Publikumsgespräch",
		location: locations.cine,
		time: "18:30 - 20:00 Uhr",
	},
	{
		title: "Langspielfilm",
		location: locations.luru,
		time: "21:00 - 23:00 Uhr",
	},
];

export const programmFreitag: ProgrammEntry[] = [
    {
        title: "Festivalzentrale",
        location: locations.fuge,
        time: "12:00 - 19:00 Uhr"
    },
	{
		title: "Langspielfilm Jugend",
		location: locations.luru,
		time: "14:00 - 15:45 Uhr",
	},
	{
		title: "Chill Out mit Gäst*innen",
		location: locations.luru,
		time: "14:00 - 18:00 Uhr",
	},
	{
		title: "Porn Talk mit Ina",
		location: locations.luru,
		time: "16:15 - 18:00 Uhr",
	},
	{
		title: "Workshop Rollfender Widerstand",
		location: locations.luru,
		time: "18:00 - 20:00 Uhr",
	},
	{
		title: "Paneel mit BERLIN STRIPPERS COLLECTIVE +",
		location: locations.ostg,
		time: "19:00 - 20:30 Uhr",
	},
	{
		title: "Peformance Berlin stripper collective",
		location: locations.ostg,
		time: "20:30 - 22:00 Uhr",
	},
	{
		title: "DJ Set im Anschloss an Peformance BSC",
		location: locations.luru,
		time: "22:00 - 23:00 Uhr",
	},
	{
		title: "Party",
		location: locations.osta,
		time: "22:00 - 06:00 Uhr",
	},
];

export const programmSamstag: ProgrammEntry[] = [
    {
        title: "Festivalzentrale",
        location: locations.hop,
        time: "13:00 - 18:00 Uhr"
    },
	{
		title: "Kinder Kurzfilme",
		location: locations.fuge,
		time: "14:00 - 15:30 Uhr",
	},
	{
		title: "Workshop Strap-on Harniss",
		location: locations.candy,
		time: "14:30 - 16:00 Uhr",
	},
	{
		title: "Kooperation: Lesung mit Mandita Oeming: Porno",
		location: locations.juicy,
		time: "16:00 - 18:00 Uhr",
	},
	{
		title: "Workshop Ann queer crafting",
		location: locations.fuge,
		time: "16:00 - 18:30 Uhr",
	},
	{
		title: "Workshop An Antidote Shibari",
		location: locations.poege,
		time: "18:00 - 21:00 Uhr",
	},
    {
        title: "Festivalzentrale",
        location: locations.prag,
        time: "18:30 - 23:30 Uhr"
    },
	{
		title: "Kurzfilme 2 crip activism Fokus",
		location: locations.prag,
		time: "19:00 - 20:00 Uhr",
	},
    {
		title: "Publikumsgespräch",
		location: locations.prag,
		time: "20:00 - 21:00 Uhr",
	},
    {
		title: "Pornfilme 3",
		location: locations.prag,
		time: "21:30 - 23:00 Uhr",
	},
    {
		title: "",
		location: locations.candy,
		time: "",
	},
];

export const programmSonntag: ProgrammEntry[] = [
    {
        title: "Festivalzentrale",
        location: locations.hop,
        time: "11:00 - 19:30 Uhr"
    },
    {
		title: "Frühstücksporn",
		location: locations.hop,
		time: "11:00 - 13:00 Uhr",
	},
    {
		title: "Workshop Drag",
		location: locations.fuge,
		time: "13:00 - 15:00 Uhr",
	},
    {
		title: "Vortrag by candy crush",
		location: locations.candy,
		time: "15:00 - 16:30 Uhr",
	},
    {
		title: "Workshop pornscript",
		location: locations.poege,
		time: "15:00 - 18:00 Uhr",
	},
    {
		title: "political Porn",
		location: locations.candy,
		time: "17:00 - 19:00 Uhr",
	},
    {
		title: "Black Sexwork collective (Olivia)",
		location: locations.fuge,
		time: "18:00 - 20:00 Uhr",
	},
    {
        title: "Festivalzentrale",
        location: locations.prag,
        time: "19:30 - 24:00 Uhr"
    },
    {
		title: "Kurzfilme 3",
		location: locations.prag,
		time: "20:00 - 22:00 Uhr",
	},
    {
        title: "Abschluss, Karaoke",
        location: locations.prag,
        time: "22:00 - 24:00 Uhr"
    }
]
