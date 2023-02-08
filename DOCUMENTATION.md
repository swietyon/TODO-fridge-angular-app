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
![(/screenshots/1.png)

Strona główna zawiera logo aplikacji oraz odnośniki z ikonkami do odnośniki słuące do zalogowania się za pomocą jednego z dostępnych zewnętrznych dostawców - Facebook, Twitter, GitHub, Google.

## Logowanie
![(/screenshots/4.png)

Kliknięcie ikonki odpowiadającej jednemu z dostępnych dostawców przekierowuje użytkownika na stronę autoryzacji tego dostawcy. Następnie po poprawnym zalogowaniu się użytkownik zostaje przekierowany na stronę związaną z zarządzaniem zadaniami.

## Strona z zarządzaniem zadaniami
![(/screenshots/2.png)

![(/screenshots/3.png)

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