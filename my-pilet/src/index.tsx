import * as React from 'react';
import type { PiletApi } from 'my-app';
import {Link} from 'react-router-dom';
import "./style.scss";
import MarioImg from './static/icons/Mario.png';

const Page = React.lazy(() => import('./components/Page'));
const Movie = React.lazy(()=> import('./components/Movie'));
const Mario = React.lazy(()=> import('./components/Mario'));
const ChatSender = React.lazy(()=> import('./components/ChatSender'));

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

  const sendMessage = (message: string) => {
    if (message.trim()) {
      app.emit("chat-message", { text: message, sender: "Pilet 1" });
    }
  };
  app.registerTile(
    (props) => <ChatSender sendMessage={sendMessage} {...props}/>,
    { initialColumns: 3, initialRows: 2 }
  );

  app.registerTile('first-tile',() => <Link to="/sample"><h4>My Pilet <br/> Api Data</h4>
  </Link>
  , {
    initialColumns: 2,
    initialRows: 2,
  });

  const connect = app.createConnector(()=> fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()))

  app.registerPage('/shared',() =>  <div>
  <h4>Shared to pilet1 from pilet2 </h4>
  <app.Extension name="Carousel" />
  </div>);
  app.registerMenu("Shared", () => <Link to="/shared">Shared</Link>);
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