import React from 'react';
import {useState} from "react";


function App(props) {

    const [userList,setUserList]=useState([]);
    const [name,setName]=useState("");
    const [user,setUser]=useState({id:0, name:"", messageList:[]});
    const [messageText,setMessageText]=useState({});



    function addUser() {
        let newUser={
            id: Date.now(),
            name: name,
            messageList: []

        };
        let newUserList=userList.concat(newUser);
        setUserList(newUserList);
    }

    function getInputName(e) {
        setName(e.target.value)
    }
    function getInputMessage(e) {
        setMessageText(e.target.value)
    }

    function getUser(userId) {
        userList.forEach((item,index)=>{
            if (item.id === userId)
            {
                setUser(item);
                item.visit= true
            }


        })
    }

    function addMessage() {
       let newUserList = userList.map((item,index)=>{
            if (item.id === user.id)
                item.messageList = Array.from(item.messageList).concat(messageText)
                return item;
        });
       setUserList(newUserList)
    }

    function deleteMessage(id) {
        user.messageList.map((item,index)=>{
            if (index === id){
                let newMessage = user.messageList.splice(id,1);
                setMessageText(newMessage)
            }

        })
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="header">
                            <div className="input-group">
                                <input placeholder="Write name" onChange={getInputName} type="text" className='form-control'/>
                                <div className="input-group-prepend">
                                    <div onClick={addUser} className="addBtn">{<img src="/add-user.png"/> }</div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <ul>
                                {
                                    userList.map((item, index)=>{
                                        return <li onClick={()=>getUser(userList[userList.length-index-1].id)} key={item.id}> <div className="person">{userList[userList.length-index-1].name.slice(0,1)}</div> <div className="name">{userList[userList.length-index-1].name}</div></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                                <div className="header">
                                    <div className="fon">
                                        {user.name.slice(0,1)}
                                    </div>
                                    <div className="box">
                                        {user.name} <br/>
                                        <div className="online"> online</div>
                                    </div>

                                </div>
                                <div className="body">
                                    <ul>
                                        {user.messageList.map((item,index)=>{
                                            return <div className='message'>
                                                <div className='delButton' onClick={()=>deleteMessage(index)}>{<img src="/cancel.png"/> }</div>
                                                <li>{item}</li>
                                            </div>
                                        })}
                                    </ul>
                                </div>
                                <div className="footer">
                                    <div className="input-group">
                                        <div className="file">
                                            {<img src="/paper-clip.png"/> }
                                        </div>
                                        <input placeholder={"Wriate a message..."} onChange={getInputMessage} type="text" />
                                        <div className="input-group-prepend">
                                            <div className="smile">{<img src="/smile (1).png"/> }</div>
                                            <div onClick={addMessage} className="sentBtn">{<img src="/sent.png"/> }</div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;