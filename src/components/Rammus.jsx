import tatu from '../assets/rammus.jpg'

export default function Rammus() {
  return (
    <div>
      <section>
        <h2 className='text-2xl font-bold py-8 text-amber-700'>Rammus Lore</h2>
        <img src={tatu} alt="Tatu blindado" />
        <p className='text-xl py-4'>Idolatrado por muitos, desprezado por alguns e misterioso para todos, Rammus, este ser curioso, é um enigma. Protegido por uma couraça de espinhos, Rammus inspira teorias crescentemente distintas de sua origem onde quer que esteja - de semideus, passando por oráculo sagrado até uma simples criatura transformada pela magia. Qualquer que seja a verdade, Rammus mantém seus pareceres e não interrompe seu caminho para quem for enquanto ronda o deserto.</p>
        <a href="https://universe.leagueoflegends.com/pt_BR/story/champion/rammus/">Mais infromações sobre Rammus</a>
      </section>
    </div>
  )
}

