import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';
import { initChatReceiver } from './module/chatService';

const Calendar = React.lazy(() => import('./components/Calendar'));
const ChatReceiver = React.lazy(()=> import('./components/ChatReceiver'));
const Carousel = React.lazy(()=> import('./components/Carousel'));

export function setup(app: PiletApi) {
  
  app.registerTile(() => <h6>second pilet - data from first pilet {app.getData('share')}</h6>, {
    initialColumns: 2,
    initialRows: 2,
  });
  
  app.registerMenu(() => <Link to="/calendar">Calendar</Link>);
  app.registerPage('/calendar', Calendar);
  app.registerExtension("Carousel", Carousel);
  
  initChatReceiver(app);
  app.registerTile(()=> <ChatReceiver/>,
  { initialColumns: 3, initialRows: 3 });
 
}

  /* app.registerPage('/test-carousel', () => ( // for testing purpose
    <div>
      <h1>Testing Extension</h1>
      <app.Extension name="Carousel"/>
    </div>
  )); */

