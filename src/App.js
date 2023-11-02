import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled']
  const userList = ['Anoop sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh']
  const priorityList = [{name:'No priority', priority: 0}, {name:'Low', priority: 1}, {name:'Medium', priority: 2}, {name:'High', priority: 3}, {name:'Urgent', priority: 4}]

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const ticketArray = refactorData(response);
      

      console.log(ticketArray);

    }
    fetchData();
    
  }, [])

  const [ticketDetails, setticketDetails] = useState([]);
  function refactorData(response){
    let ticketArray = []
      if(response.status  === 200){
        for(let i=0; i<response.data.tickets.length; i++){
          for(let j=0; j<response.data.users.length; j++){
            if(response.data.tickets[i].userId === response.data.users[j].id){
              let ticketJson = {...response.data.tickets[i], userObj: response.data.users[j]}
              ticketArray.push(ticketJson)
            }
          }
        }
      }
    setticketDetails(ticketArray);
    return ticketArray;
  }


  const [groupValue, setgroupValue] = useState('status')
  const [orderValue, setorderValue] = useState('priority')

  function handleGroupValue(value){
    setgroupValue(value);
    console.log(value);
  }

  function handleOrderValue(value){
    setorderValue(value);
    console.log(value);
  }
  
  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {
            {
              'status' : <>
                {
                  statusList.map((listItem) => {
                    return(<List
                      groupValue='other'
                      orderValue={orderValue}
                      listTitle={listItem}
                      listIcon=''
                      statusList={statusList}
                      ticketDetails={ticketDetails}
                    />)
                  })
                }
              </>,
              'user' : <>
              {
                userList.map((listItem) => {
                  return(<List
                    groupValue='other'
                    orderValue={orderValue}
                    listTitle={listItem}
                    listIcon=''
                    userList={userList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
              </>,
              'priority' : <>
              {
                priorityList.map((listItem) => {
                  return(<List
                    groupValue='priority'
                    orderValue={orderValue}
                    listTitle={listItem.priority}
                    listIcon=''
                    priorityList={priorityList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
            </>
            }[groupValue]
          }
        </div>
      </section>
    </>
  );
}

export default App;
