import React from 'react'
import './Table.scss'
import $ from 'jquery'

interface Props {
    onChangeTypeForm: (value: string) => void 
}

function Table({onChangeTypeForm}: Props) {

    //states

    const data = [
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        },
        {
            title: 'Jurassic Park',
            img: '',
            director: 'Dinh Phuc Khang',
            year: 2021,
            timing: 150,
            category: 'Action'
        }
    ]


    const handleClickToShowAddedForm = (e: React.MouseEvent) => {
        $('.admin-categories-background').css('left', '-100%')
        onChangeTypeForm('add')
    }

    const handleClickShowUpdatedForm = (e: React.MouseEvent) => {
        $('.admin-categories-background').css('left', '-100%')
        onChangeTypeForm('update')
    }

    const getData = () => {
        return data.map((value, idx) => {
            return (
                <tr key={idx}>
                    <td className="td-SN">{idx+1}</td>
                    <td className="td-title">{value.title}</td>
                    <td className="td-image"><img src={value.img} alt="" /></td>
                    <td className="td-director">{value.director}</td>
                    <td className="td-year">{value.year}</td>
                    <td className="td-timing">{value.timing}m</td>
                    <td className="td-category">{value.category}</td>
                    <td className="td-action">
                        <button onClick={handleClickShowUpdatedForm}><i className="fas fa-edit"></i></button>
                        <button><i className="fas fa-eraser"></i></button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="admin-category-table-background">
            <div className="admin-add-category-button">
                <button className="btn-admin btn-admin-add" onClick={handleClickToShowAddedForm}>Add</button>
            </div>
            <div className="admin-category-table">
                <table className="admin-category-table-title">
                    <tbody>
                        <tr>
                            <th className="th-SN">S.N</th>
                            <th className="th-title">Title</th>
                            <th className="th-image">Image</th>
                            <th className="th-director">Director</th>
                            <th className="th-year">Year</th>
                            <th className="th-timing">Timing</th>
                            <th className="th-category">Category</th>
                            <th className="th-action">Action</th>
                        </tr>
                    </tbody>
                </table>
                <div className="admin-category-table-content">
                    <table>
                        <tbody>
                            {
                                getData()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;