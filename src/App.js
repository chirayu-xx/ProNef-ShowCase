import {Download, Features,SectionWrapper} from './components'
import assests from './assets'
import styles from './styles/Global';
const App = () => {
  return (
    <>
    <SectionWrapper
    title="Your own store of Nifty NFTs.
    Strt Selling and Growing"
    description= {`Buy, Store, collect NFTs,
    exchange and earn crypto. Join 25+ million people using ProNef Marketplace`}
    showBtn
    mockupImage={assests.homeHero}
    banner="banner"
    />
    <SectionWrapper
    title="Smart User interface Marketplace"
    description= {`Experiance a buttey UI of ProNef NFT marketPlace. Smooth Constant colors of a fluent UI design`}
    mockupImage={assests.homeCards}
    reverse
    />
    <Features/>
    <SectionWrapper
    title="Deployment"
    description= {`ProNef is build using Expo which runs natively on all users' devices. You can easily get your app into people's hands`}
    mockupImage={assests.feature}
    reverse
    />
    <SectionWrapper
    title="Creative way to showcase the store"
    description= {`The app contains two screens. The first screen lists all the NFTs while the second one shows the details of the specific NFT`}
    mockupImage={assests.mockup}
    banner='banner02'
    />
    <Download/>
    <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
      <p className={`${styles.pText } ${styles.whiteText}`}>Made with love by {" "}
      <span className='bold'> Chirayu Shah</span>
      </p>
    </div>
    </>
  )
}

export default App;
