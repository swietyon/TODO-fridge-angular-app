# Lista "TO DO" - w formie karteczek samoprzylepnych na wirtualnej lodówce - TODO - fridge sticky notes


# Proj3TodoFridge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# POLISH

## Opis

Aplikacja internetowa służąca do zarządzania zadaniami i notatkami.

## Cel aplikacji

Celem aplikacji jest zapewnienie użytkownikom możliwości łatwego i prostego zarządzanie zadaniami i sporządzanie notatek za pomocą intuicyjnego interfejsu. 

## Grupa docelowa

Grupą docelową aplikacji jest dowolny użytkownik wykorzystujący aplikację na potrzeby osobiste lub komercyjne.


## Autentykacja

Użytkownik będzie mógł się zalogować na swoje konto za pomocą jednego z zewnętrznych serwisów (np. Google). Aplikacja nie będzie posiadać standardowego systemu rejestracji użytkownika.


## Dostępne funkcjonalności dla użytkownika

- Dodawanie notatek za pomocą formularza
- Edycja notatek za pomocą formularza
- Usuwanie notatek
- Wyświetlanie, edycja, oraz usuwanie notatek

# Lista "TO DO" - w formie karteczek samoprzylepnych na wirtualnej lodówce - Dokumentacja

## Repozytorium projektu
Link: https://github.com/swietyon/TODO-fridge-angular-app

## Wykorzystane technologie
- Angular Framework v14.2.6
- Node 16.18
- npm 8.19.2
- TypeScript
- HTML
- CSS
- Firebase

## Strona główna
![1](/screenshots/1.png)

Strona główna zawiera logo aplikacji oraz odnośniki z ikonkami do odnośniki słuące do zalogowania się za pomocą jednego z dostępnych zewnętrznych dostawców - Facebook, Twitter, GitHub, Google.

## Logowanie
![2](/screenshots/4.png)

Kliknięcie ikonki odpowiadającej jednemu z dostępnych dostawców przekierowuje użytkownika na stronę autoryzacji tego dostawcy. Następnie po poprawnym zalogowaniu się użytkownik zostaje przekierowany na stronę związaną z zarządzaniem zadaniami.

## Strona z zarządzaniem zadaniami
![3](/screenshots/2.png)

![4](/screenshots/3.png)

Na górze strony znajduje się pasek nawigacyjny. Na panelu nawigacyjnym po lewej stronie widoczna jest ikonka z logo aplikacji, a na środku znajduje się ikonka z odnośnikiem służącym do wylogowania użytkownika. Poniżej paska nawigacyjnego znajduje się panel służący do zarządzania notatkami. Na tym panelu prawej stronie znajduje się formularz służący do dodawania notatek, a po lewej stronie znajduje się lista dostępnych notatek. Utworzone notatki można następnie edytować i usuwać. Na dole strony widoczna jest stopka z oznaczniem autorów aplikacji.

## Główne moduły aplikacji
### Angular Framework
- Komponenty – aplikacja jest zbudowana z komponentów, które odpowiadają za wyświetlanie interfejsu użytkownika i interakcję z użytkownikiem. Każdy komponent składa się z 3 części: HTML (szablon wykorzystywany do wyświetlania interfejsu użytkownika), CSS (style określające wygląd elementów interfejsu), Typescript (logika aplikacji wykorzystywana w interakcji z systemem i użytkownikiem).
- Autentykacja – za autentykację w aplikacji odpowiadają serwisy zintegrowane z systemem Firebae. Od mechanizmu AuthGuard zależny jest dostęp do zabezpieczonych części aplikacji, do których dostęp mają tylko uprawnieni (zalogowani) użytkownicy.
- Serwisy – są wykorzystywane do obsługi logiki biznesowej w aplikacji. Odpowiadają za takie operacje jak logowanie się za pomocą różnych dostawców, wylogowanie przechowywanie danych o użytkowniku, operacje związane z zarządzaniem listą zadań.
- Routing – pozwala aplikacji na korzystanie z wielu stron i przełączanie się między nimi. Definiuje ścieżki dostępu do poszczególnych stron i uprawnienia związane z dostępem do nich.
- Firebase – jest zainstalowany, zaimportowany i zawarta jest w aplikacji jego konfiguracja w celu nawiązania połączenia z zewnętrzną aplikacją. Aplikacja w Angular Framework odpowiada za wykonywanie operacji na bazie danych Firebase za pomocą odpowiednich metod.
- Assets – statyczne pliki takie jak obrazki wykorzystywane w interfejsie aplikacji.

### Firebase
- Autentykacja – aplikacja korzysta z Firebase Authentication – rozwiązania, które umożliwia łatwe i bezpieczne zarządzanie uwierzytelnianiem użytkowników za pomocą popularnych zewnętrznych dostawców. Logowanie do aplikacji jest możliwe za pomocą kont od dostawców: Google, Facebook, Twitter oraz GitHub.
- Baza danych – aplikacja zapewnia bazę danych do przechowywania wszelkich potrzebnych danych dla naszej aplikacji. Baza danych integruje się i współpracuje z aplikacją utworzoną w Angular Framework.

