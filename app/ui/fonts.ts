import { Caveat, Cinzel, Lusitana, Roboto, Inter } from 'next/font/google';
 
const caveat = Caveat({ subsets: ['latin']});
const cinzel = Cinzel({ subsets: ['latin']});
const lusitana = Lusitana({ subsets: ['latin'], weight: "400"});
const roboto = Roboto({ subsets: ['latin'], weight: "400"});
const inter = Inter({subsets: ['latin']})

export {caveat, cinzel, lusitana, roboto, inter}