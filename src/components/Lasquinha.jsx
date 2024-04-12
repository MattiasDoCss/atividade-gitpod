import lasca from '../assets/lasquinha.jpg'

function Lasquinha() {
  return (
    <div>
      <section>
      <h2 className='text-2xl font-bold py-8 text-amber-700'>Lasquinha Lore</h2>
      <img src={lasca} alt="Lasquinha, filho de Malphite" />
      <p className='text-xl py-4' >Oi, tudo bom? Eu xô o Lasquinha e vim mostá Tágon pa voxês! É beeeeem gandão, então picisa de sapato bom pa andá! VAMO!</p>
      <a href="https://lor.cardsrealm.com/pt-br/card/04mt005-chip">Mais infromações sobre Lasquinha</a>
      </section>
    </div>
  )
}

export default Lasquinha
