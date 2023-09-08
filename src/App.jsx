import Card from "./Components/Card";
import ofJedi  from "./assets/of-jedi.jpg"
import starWars  from "./assets/star-wars.webp"
import strikeBack  from "./assets/strike-back.jpg"

function App(){
  return (
    <>
      <Card alt='Poster de Star Wars' image={starWars} title="Poster: Star Wars (1977)" /> 
      <Card alt='Poster de Empire Strikes Back' image={strikeBack} title="Poster: Empire Strikes Back (1980)" /> 
      <Card alt='Poster de Return of the Jedi' image={ofJedi} title="Poster: Return of the Jedi (1983)" /> 
    </>
  )
}
export default App;
