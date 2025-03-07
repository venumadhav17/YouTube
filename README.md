## Machine Coding Round Interview Discussion

- Requirement Clarification
  - Features
  - Tech Stack
  - Redux (Data layer, UI Layer) / Context-API
  - Tailwind (Justification about why we are choosing)
  - Scalable Applications
  - formic library for forms
  - react-router-dom for routing
  - Bundler
  - Jest for React Testing

Can we use google search ?

## Planning

- Header
- Body
- Sidebar
  - Menu Items
- Main Container
  - ButtonsList
  - VideoContainer
    - Video Card

1. Initialised a project using Vite
2. Injected Tailwind Css for Styling
3. Implemenetd Header, Search Bar, User Icon on Header Section
   - Taken Youtube APIs from youtube docs
   - Seacrh YouTube Video API
4. Created Sidebar component for displaying data.
5. Collapsing Sidebar using redux (state management library)
6. npm i @redux/toolkit react-redux
7. Added Link tag to components for navigating
8. Created VideoCard, Button, WatchPage for listing and displaying the data on webpage
   - Created Constants folder, stored api keys
9. Used useSearchParams for getting the id for card
10. Display the data dynamically using youtube apis

11. Higher order Components
12. Debouncing
    - When typing fast, the difference between each keystroke is less.(200ms)
    - typing slow - 200ms
    - typing fast - 30ms
13. Performance
    - iphone pro max - Total 14 letters \* 1000(people) = 14,000 api calls
    - with debouncing = 3 API calls \* 1000 = 3000
14. Search Youtube Search Suggestions API - (Stackoverflow 1st link)
15. Example for Debouncing:
    @ key - i

    - - render the component
    - - useEffect()
    - - start timer => make api call after 200ms

    @key - ip

    - - destroy the component(useEffect return method if previous call is before 200ms)
    - - re-render the component
    - - useEffect()
    - - start timer => make api call after 200ms (once the user stops typing)

16. Clear Interval (Whenever we make an api call before 200ms it starts again fresh/new api call)

17. Created Suggestions container using map
18. useState for SearchQuery and Suggestions
19. onFocus, onBlur for hiding and showing suggestions
20. Cache: - Time Complexity to search in array = O(n)
    array.indexOf() -> 0(n) internally stores/changes array still it's gives O(n)

- To find a key in an object -> O(1)
  {
  i
  ip
  iph
  }
- new Map(); Optimised for searching inside object

21. Search is using 1. Live API 2. Debouncing 3. Caching

22. Created Redux Store, Slice, Store suggestions data debouncing in redux

23. Created new folder (CommentContainer) for creating comments on youtube

24. Implemented Recursion for nested comments

25. We can see nested comments of 2 levels on youtube and infinite nested chaining in reddit

26. Built Live Chat in YouTube
    1. Live Chat >>> Infinte Scroll >>>>> Pagination

## Challenges of Live Chat

    - Get Data Live - Data Layer
    - Update the UI on the Page - UI Layer

- 2 ways to handle live data

  1. Websockets - 2 way connection established. It's a kind of handshake between Server and UI
     1.1 - Bi-Directional live data (Backend to UI and vice versa)
     1.2 - No Regular Interval (Data come in right now or at some time, 1s, 10s)
     1.3 - Can send data whenever we want to be...

     Applications:\*

     - Trading Apps like Zerodha

  2. API Polling (Long Polling) - Uni (One directional) - Data flows from Server to UI, After an Interval
     2.1 - Keep polling data after 1s, 10s
     Applications:
     \*\*\*----------
     - GMail
     - Cricbuzz - Create api pooling after 25s

27. YouTube uses API Polling
28. Live Chat Option
    28.1 - Added Comments List Section
29. Chat Message Option
30. Added helper file, chatSlice
31. Added setInterval for chat messages using useEffect()

- API Polling for live data

32. Redux for storing live chat messages
33. Implemented chat adding feature
34. Improves performance by reducing unnecessary api calls and webpage performant using splice and unshift
35. Scrolling effect for live data
