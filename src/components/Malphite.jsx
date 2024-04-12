import Pedra from '../assets/Pedra.jpg'

function Malphite() {
  return (
    <div>
       <section>
       <h2 className='text-2xl font-bold py-8 text-amber-700'>Malphite Lore</h2>
        <img src={Pedra} alt="Imagem do Malphite" />
        <p className='text-xl py-4' >Malphite, uma imensa criatura feita de pedra viva, nasceu do coração da grande construção ixtalense conhecida como Monolito. Ele estudou o equilíbrio elemental de Runeterra por séculos, usando sua tremenda força para manter a ordem em um mundo frequentemente caótico e para destruir as coisas sombrias que rastejam sob ele. Agora que já foi despertado tantas vezes de seu sono, Malphite suporta o temperamento volátil dos mortais em busca da única causa digna do último de sua espécie</p>
        <a href="https://universe.leagueoflegends.com/pt_BR/champion/malphite/">Mais informações sobre Malphite</a>
       </section>
    </div>
  )
}

export default Malphite
