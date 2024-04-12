import Tali from '../assets/Taliyah.jpg'

function Taliyah() {
  return (
    <div>
      <section>
        <h2 className='text-2xl font-bold py-8 text-amber-700'>Taliyah Lore</h2>
        <img src={Tali} alt="Taliyah" />
        <p className='text-xl py-4' >Taliyah é uma maga nômade de Shurima, dividida entre sua empolgação juvenil e suas grandes responsabilidades. Ela cruzou quase toda Valoran em uma jornada para conhecer a verdadeira natureza de seus próprios poderes, apesar de ter retornado recentemente para proteger sua tribo. Há aqueles que já interpretaram sua compaixão como fraqueza e pagaram o preço por isso, pois, debaixo do comportamento juvenil de Taliyah, existe uma determinação forte o suficiente para mover montanhas e um espírito feroz o suficiente para fazer a terra tremer.</p>
        <a href="https://www.leagueoflegends.com/pt-br/champions/taliyah/">Mais infromações sobre Taliyah</a>
      </section>
    </div>
  )
}

export default Taliyah
