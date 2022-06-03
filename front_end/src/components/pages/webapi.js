import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import DataGrid, {
    RemoteOperations
} from 'devextreme-react/scheduler';
 
import Scheduler from 'devextreme-react/scheduler';


import { createStore } from 'devextreme-aspnet-data-nojquery';
 
const serviceUrl = 'http://localhost:3000/agendamento';
 
const remoteDataSource = createStore({
    key: 'ID',
    loadUrl: serviceUrl + '/GetAction',
    insertUrl: serviceUrl + '/InsertAction',
    updateUrl: serviceUrl + '/UpdateAction',
    deleteUrl: serviceUrl + '/DeleteAction'
});
 
class webapi extends React.Component {
    render() {
        return (
            <Scheduler dataSource={remoteDataSource}>
                <RemoteOperations groupPaging={true} />
            </Scheduler>
        );
    }
}
export default webapi;
