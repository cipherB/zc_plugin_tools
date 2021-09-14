import { useState, useEffect } from 'react';

import img from '../../../../assets/giphy.png';
import axios from "axios";

import './modal.css';

const Modal = (props) => {
    if (!props.show) {
        return null
    }

    const [gifs, setGifs] = useState([])

    useEffect(()=> {
        getGifs();
      }, []);
      
      const getGifs = async ()=> {
        const response = await axios({
            method: "GET",
            url: "https://externaltools.zuri.chat/api/giphy/search"
        })
        .then((response) => {
            console.log(response.data);
            setGifs(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
      }


    return (
        <div className="modall" >
            <div className="rounded-md modall-content">
                <div className="flex justify-between modall-header">
                    <div className="flex space-x-3" >
                        <div className="ml-4 bg-black rounded-sm w-9 h-9" >
                            <img src={img} className="w-8 h-9" alt="logo" />
                        </div>
                        <h2 className="font-bold" >Giphy</h2>
                    </div>
                    <button onClick={props.onClose} className="h-8 text-sm text-gray-600 border border-gray-400" >X</button>
                </div>
                <div className="modall-body" >
                    <div className="p-7" >
                        // this section displays gif
                        <img className="w-20 h-20 " src="https://media.giphy.com/media/pHXgcCMfC8XfjgoO4X/giphy.gif" alt="gif" />
                    </div>
                </div>
                <div className="flex justify-center p-2 space-x-1" >
                    <input type="text" className="border border-gray-700" placeholder="search for gif" />
                    <button className="p-1 text-white bg-green-600 rounded-sm" type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
