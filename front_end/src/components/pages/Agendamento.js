import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import { data } from './data.js';

const currentDate = new Date();
const views = ['week', 'month'];

class Agendamento extends React.Component {
  render() {
    return (
      <Scheduler
        timeZone="Brazil"
        dataSource={data}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
    );
  }
}

export default Agendamento;
