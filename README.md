# Izdelava spletne aplikacije "Imenik"

## Osnovna navodila
"Imenik" je spletna aplikacija za interno uporabo v podjetju. Zagotavlja podatke o zaposlenih v podjetju.
Aplikacija v datoteki (format izbereš sam) hrani naslednje podatke o zaposlenih:
* ime,
* priimek,
* oddelek (finance, prodaja, razvoj, administracija),
* interna telefonska številka;

Aplikacija obsega 2 zaslonski maski (ZM);

## Zaslonska maska ZM1: izpis celotnega imenika
Prva ZM ponuja izpis celotnega imenika in filtriranje imenika po oddelku. V vsaki vrstici imenika so naslednji
gumbi/grafične komponente:
* Odpri zaposlenca: gumb odpre drugo zaslonsko masko ZM2 s podrobnostmi izbranega zaposlenca,
* Izbriši zaposlenca: gumb izbriše obstoječega zaposlenca iz imenika;

Prav tako se na spodnji strani nahaja gumb/grafična komponenta Dodaj zaposlenca, s katerim odpremo zaslonsko
masko ZM2 in lahko dodamo novega zaposlenca.

## Zaslonska maska ZM2: podrobnosti/dodajanje zaposlenca
Drugo zaslonsko masko lahko odpremo na dva načina:
    
* preko gumba Odpri zaposlenca: v tem primeru zaslonska maska prikaže podrobnosti zaposlenca, ki jih je možno spremeniti in shraniti,
* preko gumba Dodaj zaposlenca: v tem primeru zaslonska maska prikaže prazno masko, kamor vnesemo in shranimo podrobnosti zaposlenca;