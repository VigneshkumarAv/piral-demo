import * as React from 'react';
import type { PiletApi } from 'my-app';
import {Link} from 'react-router-dom';
import Mario from './components/Mario';
import "./style.scss";
import Movie from './components/Movie';
import MarioImg from './static/icons/Mario.png';

const Page = React.lazy(() => import('./components/Page'));

export function setup(app: PiletApi) {
  
  //app.registerPage('/page', Page);
  app.showNotification('Hello from Pilet!', {
    autoClose: 10000,
  });
  
  app.registerTile('mario-tile',() => <Link to="/mario">Mario My Pilet
  <img src={MarioImg} alt='mario' width="100px" height="150px"/></Link>
  , {
    initialColumns: 3,
    initialRows: 2,
  });

  app.registerTile('first-tile',() => <Link to="/sample"><h4>My Pilet <br/> Api Data</h4>
  </Link>
  , {
    initialColumns: 2,
    initialRows: 2,
  });

  const connect = app.createConnector(()=> fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()))
  
  app.registerPage("/sample",connect(({data})=>{
    return <Page data={data} />
  }));
  app.registerPage("/mario", Mario);
  app.registerMenu("Movie", () => <Link to="/movies">Movies</Link>);

  app.registerPage("/movies", () => <Movie/>);
  app.setData('share', 'Hi, pilet 2');
}

//const connectFoo = app.createConnector(()=> fetch("/api/foo").then(res=>res.json()))
  /* app.registerPage("/sample-foo",connectFoo(({data})=>{
    return <Foo data={data} />
  })); */

  /* app.registerTile('foo-tile',() => <><Link to="/sample-foo">Foo Pilet</Link>
  </>, {
    initialColumns: 2,
    initialRows: 2,
  }); */
    /* app.registerTile(()=><button onClick={()=>app.unregisterTile('first-tile')}>Remove My Pilet Tile</button>,{
    initialColumns: 2,
    initialRows: 1,
  })
  app.registerTile(()=><button onClick={()=>app.registerTile('first-tile',() => <><Link to="/sample">My Pilet Api Data</Link>
    </>, {
      initialColumns: 2,
      initialRows: 2,
    })}>Add My Pilet Tile</button>,{
      initialColumns: 2,
      initialRows: 1,
    })
   */