// import Navbar from '../components/Navbar';
// import Link from 'next/Link';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
           <div> 
               {/* <Navbar/> */}
               {/* <ul>
                   <li><Link href="/"><a>Home</a></Link></li>
                   <li><Link href="/about"><a>About</a></Link></li>
               </ul> */}
                
               <h1>Welcome to BitzPrice</h1>
               <p>Check current Bitcoin rate</p>
               {/* {props.bpi.time.updated} */}
               <Prices bpi={props.bpi}/>
           </div>
    </Layout>    
);


Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();


    return {
        bpi: data.bpi
    };
}

export default Index;