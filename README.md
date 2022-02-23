# Reikalavimai:


Projekto pateikimas:
  * https://github.com vieša repozitorija.
  * Projekto vystymo darbai atliekami juo skaidant tvarkingai įvardintais commit'ais. 

---------------------------------------------------------------------------------------------

Techninės priemonės:
  * react pusės aplikacija parašyta su TypeScript [-2]
  * React.js
  * FE komponentų Framework'as (Material-ui)
  * react-router-dom 'v5' arba 'v6'
  * Redux.js (ir|arba) React Context.
  * Validacija įvedamiems duomenims (Formik)
  * node.js
  * Express.js

---------------------------------------------------------------------------------------------

Funkciniai reikalavimai:
  * Autentifikacija ir Autorizacija
    * Prisijungus turi būti galima atlikti papildomus veiksmus:
      * (C) kurti nauja turinį
      * (R) matyti papildomą turinį
      * (U) atnaujinti esantį turinį
      * (D) trinti esantį turinį
      Pavyzdžiui:
        * keisti puslapio turinį ( turinio valdymo sistema. Verslui ar organizacijai. )
        * kurti pirkinių krepšelius ir daryti užsakymus ( e-shop )
        * rezervuoti laikus ( restorano online rezervacijos )
        * komentuoti ( blog'as / naujienraštis )
        * ir t.t.
  
  * Duomenų bazė su bent 5 struktūromis. Bent 3 ryšiai tarp struktūrų.
     * Teisingai sudaryta duomenų bazės ryšių schema.

  * Sąsaja su node.js + Express.js serverio API .
  * Duomenų saugojimas localStorage, pvz: 
    * Autentifikacijai.
    * Neprisiregistravusio vartotojo duomenims saugoti.

  * Dizainas (Pakeisti ir panaudoti stilių temos kintamieji).
  * Kliento pusės maršrutai(FE routing)
  * URLSearchParametrų panaudojimas filtruoti elementams.
  * Puslapiavimas ir/arba infinite scroll

---------------------------------------------------------------------------------------------

Nefunkciniai reikalavimai:
  * visi vadinami failai kebab-case'u
  * kintamieji ir funkcijos vadinami camelCase'u
  * klasės, prototipai ir react-komponentai vadinami PascalCase'u
  * funkcijos atlieka tik vieną darbą.
  * kintamieji, klasių, komponenetų ir funkcijų su parametrais pavadinimai turi sufleruoti jų paskirtį.
  * eslint sugriežtinti rašymo standartai

---------------------------------------------------------------------------------------------

Vertinimas:
  1. Pasiekiama repozitorija su readme.md failu, kurioje aprašyta kaip pasileisti projektą. [1]
  2. Veikiantys kliento pusės maršrutai [1]
  3. Panaudota localStorage [1]
  4. Panaudota globalios puslapio būsenos technologijos( react-context || redux.js ) [1]
  5. Autentifikacija ir Autorizacija [1-2]
    * viena rolė [1]
    * kelios rolės [1]
  6. Teisingais ryšiais sudaryta ir pakankamo struktūrinio turinio duomenų bazė [1]
  7. Duomenų filtracija (ir|arba) paieška [1-2]
    * paieška [1]
    * filtracija [1]
  8. Panaudota komponentų biblioteka su pritaikytais temos nustatymais [1]
  9. Puslapiavimas (ir|arba) infinite* scroll [1-2]
    * infinite scroll [1]
    * puslapiavimas [1]
  10. FULLSTACK CRUD veiksmai [1-3] 
    * Vienos struktūros daliniai CRUD veiksmai [1]
    * Vienos struktūros pilni CRUD veiksmai [1]
    * Struktūros susijusios su kita struktūra CRUD veiksmai [1]
  11. Formos validacija [1]

  TypeScript nebūvimas React aplikacijoje: -2
  min: 5
  max: 21
  max-vertinimas: 10
