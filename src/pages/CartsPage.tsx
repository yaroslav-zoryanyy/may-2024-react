import React, {useEffect, useState} from 'react';
import {getCarts} from "../services/api.dummyjson";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/paginations/Pagination";
import {ICart, ICarts} from "../models/ICarts";
import Carts from "../components/carts/Carts";

const CartsPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [carts, setCarts] = useState<ICart[]>([])
    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if(page){
            getCarts(+page)
                .then(response => {
                    setCarts(response.carts);
                    const lastId = response.carts[response.carts.length - 1].id;
                    if(lastId >= response.total){
                        setFlag(true)
                    }else {
                        setFlag(false)
                    }
                });
        }
    }, [query]);

    return (
        <div>
            <h2>CartsPage:</h2>
            <Carts carts={carts}/>
            <Pagination flag={flag}/>
            <hr/>
        </div>
    );
};

export default CartsPage;