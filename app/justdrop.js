'use client'
import { useState } from 'react'

 

export default function Justdrop(){
    const datas = require('/public/data/dropdata.json')
    const [items,setItems]= useState([datas[0],datas[1],datas[2],datas[3],datas[4],])

    const loadMoreItems = () => { 
        const newItems = [];
        if(items.length==datas.length)
        return 0;

        for (let i =0; i<5; i++){
            newItems.push(datas[items.length+i]);
        }
        setItems([...items, ...newItems])   
    };
    return(
        <>
        <div className="justDrop">
            <div className="justDrop_Title">
                <div className="justDrop_Title_Main">
                    <div><span>Just Dropped</span></div>
                    <div><span className="justDrop_Title_Sub_1">발매상품</span></div>
                </div>
                <div className="justDrop_Title_Sub">
                    <div><a href="#"><span className="justDrop_Title_Sub_2">더보기</span></a></div>
                </div>
            </div>
            <div className="justDrop_Contents">
                <div className="justDrop_Wrapper">
                    {
                    items.map((data)=>(
                    <div className="justDrop_Product" key={data.id}>
                       <div className='product_Thumb'>
                            <a href="#">
                                <img src={data.url}></img>
                                <span></span>
                            </a>
                            <span></span>
                       </div>
                       <div className='product_Info'>
                            <a href="#">
                                <span>{data.brand}</span>
                                <span>{data.detail}</span>
                                <span>{data.price}</span>
                                <span></span>
                            </a>
                       </div>
                    </div>
                    ))}
                    <div className='btndiv'>
                        <button type='button' className='drop_plus_btn' onClick={loadMoreItems}>더보기</button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}