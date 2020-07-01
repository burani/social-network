import s from "./users.module.css";
import React, {useEffect, useState} from "react";

const Paginator = ({pageSize, totalUsers, currentPage, onPageNumClick, portionSize = 10}) => {



    let pages = [];
    let totalPages = Math.ceil(totalUsers / pageSize);
    const [portion, setPortion] = useState(1);
    let portionAmount = Math.ceil(totalPages/ portionSize);//количество порций страниц




    //нам надо вычислить правую и левую границу(страницу) текущей порции
    let leftBorder = (portion - 1) * portionSize + 1;
    let rightBorder = portion * portionSize;


    for (let i = 1; i < totalPages; i++) {
        pages.push(i);
    }






    return (<div>


        {portion > 1? <button onClick={() => {setPortion(portion - 1)}}>Prev</button>: ""}
        {
            pages.filter(p => p >= leftBorder && p <= rightBorder).map((pageNum) => {
                return <span
                    className={pageNum === currentPage ? s.currentPage : '' + ' ' + s.pageNumber}
                    onClick={(event) => {
                        onPageNumClick(pageNum)
                    }}>{pageNum}</span>
            })
        }
        {portion < portionAmount? <button onClick={() => {setPortion(portion + 1)}}>Next</button>: ""}
    </div>)
};

export default Paginator;