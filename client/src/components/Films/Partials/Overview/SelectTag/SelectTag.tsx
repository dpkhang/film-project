import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import './SelectTag.scss'

SelectTag.propTypes = {
    option_select: PropTypes.array,
    default_value: PropTypes.string
}


export default function SelectTag(props: any) {
    const {option_select, default_value} = props
    const [item, setItem] = useState(default_value)
    const [option, setOption] = useState([])
    const mapOption = ()=> {
        return (
            option.map((elm, idx)=>{
                return <li key={idx} data-country={elm} className='select-option-item' onClick={changeOption}>{elm}</li>
            })
        )
    } 

    useEffect(()=>{
        $('.select-tag .select-option').hide()
        $('body').click((e)=>{
            if(!e.target.classList.value.match(/select-items/)){
                $('.select-tag .select-option').slideUp(400)
                $('.select-tag .select-items .select-tag-icon').css('transform', 'rotateZ(90deg)')
            }
        })
    },[]) 

    const changeOption = (e: any)=>{
        setItem(e.target.dataset.country)
    }

    useEffect(()=>{
        if(option_select){
            setOption(option_select)
        }
    }, [option_select])

    const handleClickItem = (e: any)=>{
        $(e.target).next().stop().slideToggle(400)
        const height = $(e.target).next().height()
        $(e.target).find('i').css('transform', `rotateZ(${height as number > 10 ? 90:-90}deg)`)
        for(let value of $('.select-items') as any){
            if(value !== $(e.target)[0]){
                $(value).next().slideUp(400)
                $(value).find('i').css('transform', `rotate(90deg)`)
            }
        }
    }

    return (
        <div className='select-tag'>
            <div className='select-items' onClick={handleClickItem}>
                <p className='select-tag-title'>{item}</p>
                <i className='fas fa-chevron-right select-tag-icon'></i>
            </div>
            <div className='select-option'>
                <ul>
                    {mapOption()}
                </ul>
            </div>
        </div>
    )
}